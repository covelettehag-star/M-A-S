import { IconArrow, IconWebsite, IconVoice, IconTarget, IconCalendar } from "./icons";

const flowSteps = [
  "Lead Captured",
  "AI Replies",
  "Appointment Booked",
  "Follow-up Sent",
];

const trustBadges = [
  { label: "AI Websites", icon: IconWebsite },
  { label: "Voice Agents", icon: IconVoice },
  { label: "Lead Automation", icon: IconTarget },
  { label: "Booking Systems", icon: IconCalendar },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-radial-glow blur-2xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] translate-x-1/3 translate-y-1/3 rounded-full bg-radial-glow opacity-60 blur-2xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left: copy */}
        <div className="flex flex-col items-start gap-7">
          <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-champagne-500/25 bg-champagne-500/[0.06] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-champagne-200">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-champagne-300" />
            AI Automation Agency
          </span>

          <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-cream-50 sm:text-5xl md:text-6xl lg:text-[4rem]">
            Luxury <span className="text-shimmer">AI Systems</span> for Modern
            Businesses
          </h1>

          <p className="max-w-xl text-pretty text-base leading-relaxed text-cream-300/85 sm:text-lg">
            We build AI-powered websites, automations, chatbots, voice agents,
            and lead systems that help small businesses look premium, respond
            faster, and grow smarter.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-gold">
              Book a Free AI Audit
              <IconArrow className="h-4 w-4" />
            </a>
            <a href="#services" className="btn-ghost">
              View Services
            </a>
          </div>

          {/* Trust badges */}
          <ul className="mt-2 flex flex-wrap gap-3">
            {trustBadges.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium text-cream-200"
              >
                <Icon className="h-4 w-4 text-champagne-300" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: orb + automation flow panel */}
        <div className="relative">
          {/* Glowing orb */}
          <div className="relative mx-auto h-64 w-64 sm:h-72 sm:w-72">
            <div className="absolute inset-0 animate-pulse-glow rounded-full bg-gold-gradient opacity-30 blur-3xl" />
            <div className="absolute inset-6 animate-spin-slow rounded-full border border-champagne-400/30" />
            <div className="absolute inset-12 animate-spin-slow rounded-full border border-champagne-300/20 [animation-direction:reverse]" />
            <div className="absolute inset-0 animate-float rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(247,236,217,0.9),rgba(168,126,79,0.5)_45%,rgba(11,11,13,0.2)_75%)] shadow-glow" />
          </div>

          {/* Automation flow panel */}
          <div className="gradient-border glass-strong mt-[-2rem] rounded-3xl p-5 shadow-card sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-champagne-200">
                Automation Flow
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-cream-300/70">
                <span className="h-2 w-2 animate-pulse-glow rounded-full bg-emerald-400" />
                Live
              </span>
            </div>

            <ul className="flex flex-col gap-2.5">
              {flowSteps.map((step, i) => (
                <li
                  key={step}
                  className="flex items-center gap-3"
                  style={{ animation: `flow 2.4s ease-in-out ${i * 0.4}s infinite` }}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-champagne-400/40 bg-champagne-500/10 text-xs font-semibold text-champagne-200">
                    {i + 1}
                  </span>
                  <div className="glass flex-1 rounded-xl px-4 py-2.5 text-sm font-medium text-cream-100">
                    {step}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
