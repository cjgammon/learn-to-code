import { useState } from 'react'
import LessonMap from './components/LessonMap'
import PuzzleView from './components/PuzzleView'
import { useProgress } from './hooks/useProgress'
import { PUZZLES, getPuzzleById, getPuzzleIndex } from './data/puzzles'

// Top-level screen switcher: the lesson map, or a single puzzle. Kept as simple
// state (no router needed for a single-page learning game).

export default function App() {
  const { solved, markSolved, isSolved } = useProgress()
  const [activeId, setActiveId] = useState(null) // null = show the map

  const activePuzzle = activeId ? getPuzzleById(activeId) : null

  function goToNext() {
    const i = getPuzzleIndex(activeId)
    const next = PUZZLES[i + 1]
    if (next) setActiveId(next.id)
    else setActiveId(null)
  }

  return (
    <div className="app">
      {activePuzzle ? (
        <PuzzleView
          puzzle={activePuzzle}
          alreadySolved={isSolved(activePuzzle.id)}
          onSolved={markSolved}
          onBack={() => setActiveId(null)}
          onNext={goToNext}
        />
      ) : (
        <LessonMap
          isSolved={isSolved}
          solvedCount={solved.length}
          onPick={(id) => setActiveId(id)}
        />
      )}
      <footer className="app__footer">
        Made for curious kids who want to write real code. 🤖
      </footer>
    </div>
  )
}
