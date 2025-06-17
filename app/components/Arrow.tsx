interface ArrowProps {
  /** Tail length in width utility classes, e.g., 'w-8', 'w-16'. */
  tailLength?: string;
  /** Deprecated alias kept for backward-compatibility. */
  stemLength?: string;
}

/**
 * Horizontal arrow component →
 * Tail thickness: 2 px
 * Arrow head: outlined ">" shape using 2 px stroke (same weight as tail).
 * Tail length can be adjusted via `tailLength` prop.
 */
const Arrow: React.FC<ArrowProps> = ({ tailLength, stemLength }) => {
  // Prefer new prop, fallback to deprecated one, then default
  const widthClass = tailLength || stemLength || 'w-8';

  return (
    <div className="flex items-center">
      {/* Tail */}
      <div className={`h-[2px] bg-primaryText ${widthClass}`}></div>
      {/* Head */}
      <div className="w-2 h-2 border-t-[2px] border-r-[2px] border-primaryText rotate-45 -ml-2"></div>
    </div>
  );
};

export default Arrow;