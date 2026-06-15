import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  /** Optional portion of the title to render in gold */
  highlight?: string;
  subtitle?: string;
  align?: "center" | "left";
};

/**
 * Reusable section header with eyebrow label, large title, and optional subtitle.
 */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  const renderTitle = () => {
    if (!highlight || !title.includes(highlight)) {
      return title;
    }
    const [before, after] = title.split(highlight);
    return (
      <>
        {before}
        <span className="text-gold">{highlight}</span>
        {after}
      </>
    );
  };

  return (
    <Reveal className={`flex flex-col gap-4 ${alignment} max-w-3xl`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 self-start rounded-full border border-champagne-500/25 bg-champagne-500/[0.06] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-champagne-200">
          <span className="h-1.5 w-1.5 rounded-full bg-champagne-300 shadow-glow-sm" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance text-3xl font-bold leading-[1.1] tracking-tight text-cream-50 sm:text-4xl md:text-5xl">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="text-pretty text-base leading-relaxed text-cream-300/80 sm:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
