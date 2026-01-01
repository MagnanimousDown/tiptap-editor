
export const HighlightIcon = ({
  className = "",
  circleStrokeWidth = 1
}) => {

    return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`size-5 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Thin outer circle */}
      <circle
        cx="12"
        cy="12"
        r="9.5"
        stroke="currentColor"
        strokeWidth={circleStrokeWidth}
      />
    </svg>
    );
}