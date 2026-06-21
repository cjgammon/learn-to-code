import { useState, useEffect } from 'react'

// Reveals hints one at a time so the kid gets just enough help to keep going.
// Resets whenever the puzzle changes (keyed by puzzleId).

export default function HintPanel({ hints = [], puzzleId }) {
  const [revealed, setRevealed] = useState(0)

  useEffect(() => {
    setRevealed(0)
  }, [puzzleId])

  if (hints.length === 0) return null

  const moreLeft = revealed < hints.length

  return (
    <div className="hints">
      {Array.from({ length: revealed }).map((_, i) => (
        <div key={i} className="hints__item">
          <span className="hints__bulb">💡</span>
          {hints[i]}
        </div>
      ))}

      {moreLeft && (
        <button className="btn btn--ghost" onClick={() => setRevealed((r) => r + 1)}>
          {revealed === 0 ? 'Need a hint?' : 'Another hint, please'} 💡
        </button>
      )}

      {!moreLeft && (
        <div className="hints__done">That's every hint — you've got this! 💪</div>
      )}
    </div>
  )
}
