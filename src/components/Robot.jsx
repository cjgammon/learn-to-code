// The robot buddy. A single inline SVG whose face changes with the `mood` prop:
//   idle      friendly resting face
//   thinking  squinty eyes (while code runs)
//   happy     big smile + rosy cheeks (success)
//   oops      worried face (a check failed)
// No image assets — everything is drawn with SVG so it stays crisp and animates.

const MOOD_COLORS = {
  idle: '#6c5ce7',
  thinking: '#0984e3',
  happy: '#00b894',
  oops: '#e17055',
}

export default function Robot({ mood = 'idle', size = 120 }) {
  const color = MOOD_COLORS[mood] || MOOD_COLORS.idle

  return (
    <svg
      className={`robot robot--${mood}`}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label={`Robot buddy looking ${mood}`}
    >
      {/* antenna */}
      <line x1="50" y1="10" x2="50" y2="22" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <circle className="robot__antenna" cx="50" cy="9" r="5" fill={color} />

      {/* head */}
      <rect x="20" y="22" width="60" height="52" rx="14" fill={color} />
      {/* screen face */}
      <rect x="28" y="30" width="44" height="36" rx="9" fill="#1b1b2f" />

      {/* eyes */}
      {mood === 'thinking' ? (
        <>
          <rect x="36" y="46" width="9" height="3.5" rx="1.75" fill="#7ef9ff" />
          <rect x="55" y="46" width="9" height="3.5" rx="1.75" fill="#7ef9ff" />
        </>
      ) : (
        <>
          <circle className="robot__eye" cx="40.5" cy="46" r="4.5" fill="#7ef9ff" />
          <circle className="robot__eye" cx="59.5" cy="46" r="4.5" fill="#7ef9ff" />
        </>
      )}

      {/* mouth */}
      {mood === 'happy' && (
        <path d="M38 56 Q50 66 62 56" stroke="#7ef9ff" strokeWidth="3" fill="none" strokeLinecap="round" />
      )}
      {mood === 'oops' && (
        <path d="M40 60 Q50 53 60 60" stroke="#7ef9ff" strokeWidth="3" fill="none" strokeLinecap="round" />
      )}
      {(mood === 'idle' || mood === 'thinking') && (
        <line x1="42" y1="58" x2="58" y2="58" stroke="#7ef9ff" strokeWidth="3" strokeLinecap="round" />
      )}

      {/* rosy cheeks when happy */}
      {mood === 'happy' && (
        <>
          <circle cx="33" cy="54" r="3" fill="#ff7675" opacity="0.7" />
          <circle cx="67" cy="54" r="3" fill="#ff7675" opacity="0.7" />
        </>
      )}

      {/* ears */}
      <rect x="14" y="40" width="6" height="16" rx="3" fill={color} />
      <rect x="80" y="40" width="6" height="16" rx="3" fill={color} />

      {/* body */}
      <rect x="30" y="76" width="40" height="18" rx="8" fill={color} />
      <circle cx="42" cy="85" r="2.5" fill="#ffffff" opacity="0.8" />
      <circle cx="50" cy="85" r="2.5" fill="#ffffff" opacity="0.8" />
      <circle cx="58" cy="85" r="2.5" fill="#ffffff" opacity="0.8" />
    </svg>
  )
}
