export type Project = {
  category: string;
  title: string;
  description: string;
  /** Tailwind gradient classes for the preview visual */
  gradient: string;
  tags: string[];
};

/**
 * Mock portfolio card with an abstract gradient "preview" and result-focused copy.
 */
export default function ProjectCard({
  category,
  title,
  description,
  gradient,
  tags,
}: Project) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-champagne-500/12 bg-ink-800/50 transition-all duration-500 hover:-translate-y-2 hover:border-champagne-400/35 hover:shadow-card">
      {/* Preview visual */}
      <div className="relative h-44 overflow-hidden">
        <div
          className={`absolute inset-0 ${gradient} transition-transform duration-700 group-hover:scale-110`}
        />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-cream-50/20 bg-ink-900/50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cream-100 backdrop-blur-sm">
          {category}
        </span>
        {/* Demo badge */}
        <span className="absolute right-4 top-4 rounded-full bg-champagne-500/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-champagne-100 backdrop-blur-sm">
          Concept
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-lg font-semibold text-cream-50">{title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-cream-300/75">
          {description}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-champagne-500/15 bg-champagne-500/[0.06] px-2.5 py-1 text-xs text-cream-200/80"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href="#contact"
          className="mt-auto inline-flex w-fit items-center gap-1.5 text-sm font-medium text-champagne-300 transition-colors hover:text-champagne-100"
        >
          View Concept
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </article>
  );
}
