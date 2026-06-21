// A speech bubble for the robot's teaching text and reactions.

export default function SpeechBubble({ children, tone = 'neutral' }) {
  return <div className={`speech speech--${tone}`}>{children}</div>
}
