import { useEffect, useRef, useState } from 'react'
import confetti from 'canvas-confetti'
import Robot from './Robot'
import SpeechBubble from './SpeechBubble'
import CodeEditor from './CodeEditor'
import OutputConsole from './OutputConsole'
import HintPanel from './HintPanel'
import { runCode } from '../runner/runCode'
import { PUZZLES, getPuzzleIndex } from '../data/puzzles'

// The solve screen: robot teaches on the left, code + run + output on the right.

export default function PuzzleView({ puzzle, alreadySolved, onSolved, onBack, onNext }) {
  const [code, setCode] = useState(puzzle.starter)
  const [result, setResult] = useState(null)
  const [running, setRunning] = useState(false)
  const [solved, setSolved] = useState(alreadySolved)
  const firedConfetti = useRef(false)

  // Reset everything when we move to a different puzzle.
  useEffect(() => {
    setCode(puzzle.starter)
    setResult(null)
    setRunning(false)
    setSolved(alreadySolved)
    firedConfetti.current = false
  }, [puzzle.id, puzzle.starter, alreadySolved])

  const index = getPuzzleIndex(puzzle.id)
  const hasNext = index >= 0 && index < PUZZLES.length - 1

  async function handleRun() {
    setRunning(true)
    setResult(null)
    const res = await runCode(code, puzzle.checks)

    // Decide success: all checks pass (if any) AND expected output matches (if set).
    const checksPass =
      res.checkResults.length === 0 || res.checkResults.every((c) => c.passed)
    const outputPass = matchesExpected(res.logs, puzzle.expectedOutput)
    const didSolve = !res.error && checksPass && outputPass

    setResult(res)
    setRunning(false)

    if (didSolve) {
      setSolved(true)
      if (!firedConfetti.current) {
        firedConfetti.current = true
        celebrate()
      }
      onSolved(puzzle.id)
    }
  }

  // Robot mood reflects what's happening.
  let mood = 'idle'
  if (running) mood = 'thinking'
  else if (solved) mood = 'happy'
  else if (result) mood = 'oops'

  return (
    <div className="puzzle">
      <button className="btn btn--back" onClick={onBack}>
        ← Map
      </button>

      <div className="puzzle__grid">
        {/* Teaching side */}
        <div className="puzzle__teach">
          <div className="puzzle__robotrow">
            <Robot mood={mood} size={96} />
            <div className="puzzle__heading">
              <div className="puzzle__topic">{puzzle.topic}</div>
              <h2 className="puzzle__title">{puzzle.title}</h2>
            </div>
          </div>

          <SpeechBubble>{puzzle.teach}</SpeechBubble>

          <div className="puzzle__task">
            <span className="puzzle__tasklabel">Your mission</span>
            {puzzle.task}
          </div>

          <HintPanel hints={puzzle.hints} puzzleId={puzzle.id} />
        </div>

        {/* Coding side */}
        <div className="puzzle__work">
          <CodeEditor value={code} onChange={setCode} />

          <div className="puzzle__buttons">
            <button className="btn btn--run" onClick={handleRun} disabled={running}>
              {running ? 'Running…' : 'Run ▶'}
            </button>
            <button
              className="btn btn--ghost"
              onClick={() => {
                setCode(puzzle.starter)
                setResult(null)
              }}
              disabled={running}
            >
              Reset
            </button>
          </div>

          {solved && (
            <SpeechBubble tone="success">
              {puzzle.success}{' '}
              {hasNext ? (
                <button className="btn btn--next" onClick={onNext}>
                  Next puzzle →
                </button>
              ) : (
                <button className="btn btn--next" onClick={onBack}>
                  Back to map 🗺️
                </button>
              )}
            </SpeechBubble>
          )}

          {!solved && result && (
            <SpeechBubble tone="encourage">
              Almost! Check the list below and try again — you can do it! 💪
            </SpeechBubble>
          )}

          <OutputConsole result={result} expectedOutput={puzzle.expectedOutput} />
        </div>
      </div>
    </div>
  )
}

function matchesExpected(logs, expected) {
  if (!expected) return true
  if (!logs || logs.length !== expected.length) return false
  return expected.every((want, i) => String(logs[i]).trim() === String(want).trim())
}

function celebrate() {
  const burst = (originX) =>
    confetti({
      particleCount: 60,
      spread: 70,
      startVelocity: 45,
      origin: { x: originX, y: 0.7 },
    })
  burst(0.3)
  setTimeout(() => burst(0.7), 150)
}
