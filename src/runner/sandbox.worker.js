// Sandbox Web Worker.
//
// Runs the kid's JavaScript and the puzzle's check expressions in ONE eval call
// so the checks can read the variables the kid declared (let/const live for the
// whole eval scope). Running inside a Worker means we can terminate it from the
// outside if the code loops forever — the page never freezes.
//
// Message in:  { code: string, checks: [{ label, expr }] }
// Message out: { logs: string[], error: string|null, checkResults: [{label, passed}] }

self.onmessage = (event) => {
  const { code, checks = [] } = event.data
  const logs = []

  // Capture console.log / console.error so the kid can see their output.
  const format = (args) =>
    args
      .map((a) => {
        if (typeof a === 'string') return a
        try {
          return JSON.stringify(a)
        } catch {
          return String(a)
        }
      })
      .join(' ')

  const fakeConsole = {
    log: (...args) => logs.push(format(args)),
    error: (...args) => logs.push(format(args)),
    warn: (...args) => logs.push(format(args)),
    info: (...args) => logs.push(format(args)),
  }

  // Build one script: the kid's code, then an array of check results. Each check
  // is wrapped in try/catch so an undefined variable becomes a failed check
  // (false) rather than crashing the whole run.
  const checkArray =
    '[' +
    checks
      .map(
        (c) =>
          `(function(){ try { return Boolean(${c.expr}); } catch (e) { return false; } })()`,
      )
      .join(',') +
    ']'

  // `__logs` is the same array reference that fakeConsole pushes into, so by the
  // time the checks run it holds everything the kid printed. Checks can use it to
  // verify the kid printed their answer, e.g. "__logs.includes(hero)".
  const script =
    'return (function(console, __logs){\n' +
    code +
    '\n;return ' +
    checkArray +
    ';\n})(__sandboxConsole, __capturedLogs);'

  let error = null
  let results = checks.map(() => false)

  try {
    // eslint-disable-next-line no-new-func
    const fn = new Function('__sandboxConsole', '__capturedLogs', script)
    const out = fn(fakeConsole, logs)
    if (Array.isArray(out)) results = out
  } catch (e) {
    error = friendlyError(e)
  }

  const checkResults = checks.map((c, i) => ({
    label: c.label,
    passed: Boolean(results[i]),
  }))

  self.postMessage({ logs, error, checkResults })
}

// Turn scary error messages into kid-friendly ones.
function friendlyError(e) {
  const msg = (e && e.message) || String(e)
  if (e instanceof SyntaxError) {
    return "Hmm, the code has a typo somewhere. Check for missing quotes, " +
      'brackets, or semicolons. (' + msg + ')'
  }
  if (e instanceof ReferenceError) {
    return "I don't recognize one of those names. Did you spell every " +
      'variable the same way? (' + msg + ')'
  }
  return 'Something went wrong: ' + msg
}
