import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { IconChat, IconClock, IconGear } from "./icons";

const problems = [
  {
    icon: IconChat,
    title: "Missed messages",
    body: "Every unanswered enquiry is a customer walking to a competitor. Calls, DMs, and form fills pile up after hours — and most never get a reply.",
  },
  {
    icon: IconClock,
    title: "Slow follow-ups",
    body: "Leads go cold within minutes. When follow-up depends on someone being free to type, the warmest prospects quietly disappear.",
  },
  {
    icon: IconGear,
    title: "Manual admin work",
    body: "Booking, reminders, reviews, and data entry eat the hours you should spend on customers. Busy work becomes the bottleneck to growth.",
  },
];

export default function Problem() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="The Cost of Doing It Manually"
          title="Your business should not lose customers while you sleep."
          highlight="lose customers"
          subtitle="When everything runs by hand, leads slip through the cracks. Automation keeps your business responsive around the clock."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problems.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 120} as="article">
              <div className="group relative h-full overflow-hidden rounded-3xl border border-champagne-500/12 bg-ink-800/60 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-champagne-400/35">
                <div className="absolute inset-0 -z-10 bg-radial-glow opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-champagne-400/30 bg-champagne-500/10 text-champagne-200">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mb-2.5 text-xl font-semibold text-cream-50">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-cream-300/75">
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
