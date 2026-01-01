
export function ParentHighlightIcon({
  fillClassName = "#000",
  circleStrokeWidth = 1,
  letterStrokeWidth = 1.6,
  letterClassName = "#fff"
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`size-5`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: fillClassName }}
    >
      {/* Thin outer circle */}
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth={circleStrokeWidth}
      />

      {/* Letter A */}
      <path
        d="M9.2 16L12 8l2.8 8M10.4 13h3.2"
        stroke="currentColor"
        strokeWidth={letterStrokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color: letterClassName }}
      />
    </svg>
  );
}