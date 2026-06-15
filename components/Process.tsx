import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ProcessStep, { type ProcessStepData } from "./ProcessStep";
import { IconTarget, IconChat, IconCalendar, IconReactivate } from "./icons";

const steps: ProcessStepData[] = [
  {
    step: 1,
    icon: IconTarget,
    title: "Attract",
    description:
      "A modern website and smart lead capture bring the right visitors in and turn clicks into contacts.",
  },
  {
    step: 2,
    icon: IconChat,
    title: "Respond",
    description:
      "An AI chatbot or voice agent replies instantly, answers questions, and qualifies every enquiry.",
  },
  {
    step: 3,
    icon: IconCalendar,
    title: "Convert",
    description:
      "Booking and follow-up automation guides interested leads straight into your calendar.",
  },
  {
    step: 4,
    icon: IconReactivate,
    title: "Retain",
    description:
      "Reviews, reminders, and reactivation campaigns keep customers coming back and referring others.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-radial-glow opacity-50 blur-2xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Signature System"
          title="The MirthLuxe AI Growth System"
          highlight="AI Growth System"
          subtitle="A clear four-stage system that turns attention into booked, loyal customers — working quietly in the background, every hour of the day."
        />

        <div className="relative mt-16">
          {/* Connecting line — desktop */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-champagne-500/40 to-transparent lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.step} delay={i * 120} className="h-full">
                <ProcessStep {...step} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
