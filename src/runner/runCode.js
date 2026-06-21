// Orchestrates running the kid's code in the sandbox worker with a hard timeout.
//
// Each run spins up a fresh worker (cheap, and guarantees a clean scope). If the
// code runs longer than TIMEOUT_MS we terminate the worker and report a friendly
// "took too long" message — this protects against infinite loops later on.

const TIMEOUT_MS = 2000

export function runCode(code, checks = []) {
  return new Promise((resolve) => {
    // Vite resolves this URL form into a bundled worker for dev and build.
    const worker = new Worker(
      new URL('./sandbox.worker.js', import.meta.url),
      { type: 'module' },
    )

    let settled = false
    const finish = (result) => {
      if (settled) return
      settled = true
      clearTimeout(timer)
      worker.terminate()
      resolve(result)
    }

    const timer = setTimeout(() => {
      finish({
        logs: [],
        error:
          'That took too long to finish! If you used a loop, make sure it can ' +
          'stop. Try again with simpler code. ⏱️',
        checkResults: checks.map((c) => ({ label: c.label, passed: false })),
      })
    }, TIMEOUT_MS)

    worker.onmessage = (event) => finish(event.data)
    worker.onerror = (event) => {
      finish({
        logs: [],
        error: 'Something went wrong running the code: ' + (event.message || ''),
        checkResults: checks.map((c) => ({ label: c.label, passed: false })),
      })
    }

    worker.postMessage({ code, checks })
  })
}
