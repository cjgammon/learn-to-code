// Shows the result of a run: console.log output, any error, and the pass/fail
// of each puzzle check (green = passed, red = not yet).

export default function OutputConsole({ result, expectedOutput }) {
  if (!result) {
    return (
      <div className="console console--empty">
        Press <strong>Run</strong> ▶ to test your code!
      </div>
    )
  }

  const { logs, error, checkResults } = result

  return (
    <div className="console">
      {logs && logs.length > 0 && (
        <div className="console__section">
          <div className="console__label">Output</div>
          <pre className="console__logs">{logs.join('\n')}</pre>
        </div>
      )}

      {error && (
        <div className="console__section">
          <div className="console__label">Oops</div>
          <pre className="console__error">{error}</pre>
        </div>
      )}

      {checkResults && checkResults.length > 0 && (
        <div className="console__section">
          <div className="console__label">Checklist</div>
          <ul className="checks">
            {checkResults.map((c, i) => (
              <li key={i} className={c.passed ? 'check check--pass' : 'check check--fail'}>
                <span className="check__mark">{c.passed ? '✓' : '○'}</span>
                {c.label}
              </li>
            ))}
          </ul>
        </div>
      )}

      {expectedOutput && (!logs || logs.length === 0) && !error && (
        <div className="console__section console__hintline">
          Tip: this puzzle wants you to <strong>print</strong> something with{' '}
          <code>console.log(...)</code>.
        </div>
      )}
    </div>
  )
}
