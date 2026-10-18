export function ArrowIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M4 10h12m0 0l-5-5m5 5l-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Wrapper for 24px outline icons; pass the <path> elements as children.
export function OutlineIcon({ children, className = "h-5 w-5", strokeWidth = 1.8 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}
