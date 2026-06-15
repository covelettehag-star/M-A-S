import type { SVGProps, ComponentType } from "react";

export type Service = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

/**
 * Premium glass service card with gradient border and glow-on-hover.
 */
export default function ServiceCard({ icon: Icon, title, description }: Service) {
  return (
    <div className="group gradient-border relative h-full overflow-hidden rounded-3xl bg-ink-800/50 p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow">
      {/* Hover glow wash */}
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-radial-glow opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

      <span className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-champagne-400/30 bg-champagne-500/10 text-champagne-200 transition-all duration-500 group-hover:scale-110 group-hover:border-champagne-300/60 group-hover:text-champagne-100">
        <Icon className="h-7 w-7" />
      </span>

      <h3 className="relative mb-3 text-xl font-semibold text-cream-50">
        {title}
      </h3>
      <p className="relative text-sm leading-relaxed text-cream-300/75">
        {description}
      </p>

      <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-champagne-300 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-2">
        Learn more
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </div>
  );
}
