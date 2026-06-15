import type { SVGProps, ComponentType } from "react";

export type ProcessStepData = {
  step: number;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

/**
 * A single step in the MirthLuxe Growth System timeline.
 */
export default function ProcessStep({
  step,
  icon: Icon,
  title,
  description,
}: ProcessStepData) {
  return (
    <div className="group relative flex h-full flex-col">
      {/* Node */}
      <div className="relative z-10 mb-6 flex items-center gap-4 lg:mb-8 lg:block">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-champagne-400/40 bg-ink-900 text-champagne-200 shadow-glow-sm transition-all duration-500 group-hover:scale-110 group-hover:text-champagne-100">
          <Icon className="h-7 w-7" />
        </span>
        <span className="font-semibold uppercase tracking-[0.2em] text-champagne-300/70 lg:mt-5 lg:block lg:text-xs">
          Step {step}
        </span>
      </div>

      <div className="glass h-full rounded-2xl p-5 transition-all duration-500 group-hover:border-champagne-400/35">
        <h3 className="mb-2 text-lg font-semibold text-cream-50">{title}</h3>
        <p className="text-sm leading-relaxed text-cream-300/75">{description}</p>
      </div>
    </div>
  );
}
