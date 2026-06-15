import Reveal from "./Reveal";
import { IconBolt, IconClock, IconMail, IconSparkle, IconCheck } from "./icons";

const stats = [
  {
    icon: IconBolt,
    title: "Faster customer replies",
    body: "Instant responses, day or night, so no enquiry waits.",
  },
  {
    icon: IconClock,
    title: "Less manual admin",
    body: "Booking, reminders, and data entry run themselves.",
  },
  {
    icon: IconMail,
    title: "More consistent follow-up",
    body: "Every lead is nurtured — nothing falls through the cracks.",
  },
  {
    icon: IconSparkle,
    title: "Premium online presence",
    body: "A polished brand experience that earns trust on sight.",
  },
];

const points = [
  "Systems tailored to your business, not generic templates",
  "Start small with one service and scale when you're ready",
  "Clear, jargon-free guidance from concept to launch",
];

export default function WhyUs() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Left: text */}
        <Reveal className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-champagne-500/25 bg-champagne-500/[0.06] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-champagne-200">
            <span className="h-1.5 w-1.5 rounded-full bg-champagne-300" />
            Why MirthLuxe
          </span>
          <h2 className="text-balance text-3xl font-bold leading-[1.1] tracking-tight text-cream-50 sm:text-4xl md:text-5xl">
            Not just pretty websites.{" "}
            <span className="text-gold">Intelligent business systems.</span>
          </h2>
          <p className="text-pretty text-base leading-relaxed text-cream-300/80 sm:text-lg">
            Anyone can make a page look nice. We engineer the experience behind
            it — the instant replies, the seamless booking, the follow-ups that
            actually happen. The result is a business that feels premium and
            runs smoother, so you can focus on the work you love.
          </p>

          <ul className="flex flex-col gap-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-champagne-400/40 bg-champagne-500/10 text-champagne-200">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm text-cream-200/85">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Right: stat cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {stats.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 110} className="h-full">
              <div className="group gradient-border h-full rounded-3xl bg-ink-800/50 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-champagne-400/30 bg-champagne-500/10 text-champagne-200 transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mb-1.5 text-base font-semibold text-cream-50">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-cream-300/70">
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
