import { TOPICS, PUZZLES } from '../data/puzzles'
import Robot from './Robot'
import SpeechBubble from './SpeechBubble'

// The home screen: the robot welcomes the player, then shows each topic with its
// puzzles. A puzzle is unlocked once the puzzle before it (in overall order) is
// solved, so the very first puzzle is always open and the rest reveal in order.

export default function LessonMap({ isSolved, onPick, solvedCount }) {
  const total = PUZZLES.length

  // Index of the first not-yet-solved puzzle = the "current" unlocked puzzle.
  const firstUnsolved = PUZZLES.findIndex((p) => !isSolved(p.id))
  const unlockedThrough = firstUnsolved === -1 ? total - 1 : firstUnsolved

  return (
    <div className="map">
      <header className="map__header">
        <Robot mood={solvedCount === total ? 'happy' : 'idle'} size={110} />
        <div>
          <h1 className="map__title">Code Quest</h1>
          <SpeechBubble>
            {solvedCount === 0 &&
              "Hi, I'm Bit! Let's learn real JavaScript by solving puzzles. Pick the first one to start!"}
            {solvedCount > 0 &&
              solvedCount < total &&
              `Great work so far — ${solvedCount} of ${total} puzzles solved! Keep going!`}
            {solvedCount === total &&
              "WOW! You solved every puzzle! You're a real coder now. 🏆"}
          </SpeechBubble>
        </div>
      </header>

      <div className="map__progress">
        <div className="map__progressbar">
          <div
            className="map__progressfill"
            style={{ width: `${(solvedCount / total) * 100}%` }}
          />
        </div>
        <span className="map__progresstext">
          {solvedCount} / {total} ⭐
        </span>
      </div>

      {TOPICS.map((topic) => {
        const topicPuzzles = PUZZLES.filter((p) => p.topic === topic.title)
        return (
          <section key={topic.title} className="topic">
            <h2 className="topic__title">
              <span className="topic__emoji">{topic.emoji}</span> {topic.title}
              <span className="topic__blurb">{topic.blurb}</span>
            </h2>
            <div className="topic__grid">
              {topicPuzzles.map((puzzle) => {
                const order = PUZZLES.findIndex((p) => p.id === puzzle.id)
                const solved = isSolved(puzzle.id)
                const locked = order > unlockedThrough
                return (
                  <button
                    key={puzzle.id}
                    className={
                      'card' +
                      (solved ? ' card--solved' : '') +
                      (locked ? ' card--locked' : '')
                    }
                    onClick={() => onPick(puzzle.id)}
                  >
                    <span className="card__badge">
                      {solved ? '⭐' : locked ? '🔒' : '▶'}
                    </span>
                    <span className="card__title">{puzzle.title}</span>
                  </button>
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}
