type LogoProps = {
  /** Show the wordmark text next to the mark */
  withText?: boolean;
  className?: string;
};

/**
 * Geometric champagne-gold "M" mark inspired by the MirthLuxe logo,
 * paired with the wordmark.
 */
export default function Logo({ withText = true, className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="mlx-gold" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0%" stopColor="#F7ECD9" />
            <stop offset="40%" stopColor="#E4C9A0" />
            <stop offset="100%" stopColor="#A87E4F" />
          </linearGradient>
        </defs>
        {/* Left upright triangle */}
        <path d="M4 34 L12 6 L20 34 Z" fill="url(#mlx-gold)" />
        {/* Inverted center triangle forming the M valley */}
        <path d="M14 6 L26 6 L20 22 Z" fill="url(#mlx-gold)" opacity="0.9" />
        {/* Right upright triangle */}
        <path d="M20 34 L28 6 L36 34 Z" fill="url(#mlx-gold)" />
      </svg>
      {withText && (
        <span className="text-lg font-semibold tracking-tight text-cream-50">
          MirthLuxe <span className="text-gold">AI Studio</span>
        </span>
      )}
    </span>
  );
}
