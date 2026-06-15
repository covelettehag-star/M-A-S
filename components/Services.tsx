import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ServiceCard, { type Service } from "./ServiceCard";
import {
  IconWebsite,
  IconChat,
  IconVoice,
  IconReactivate,
  IconCalendar,
  IconStar,
} from "./icons";

const services: Service[] = [
  {
    icon: IconWebsite,
    title: "AI Website Design",
    description:
      "Fast, elegant, conversion-focused websites with AI built in — so visitors get answers and book the moment they land.",
  },
  {
    icon: IconChat,
    title: "AI Chatbot for Customer Support",
    description:
      "A trained assistant that answers questions, qualifies leads, and captures details 24/7 in your brand's voice.",
  },
  {
    icon: IconVoice,
    title: "AI Voice Receptionist",
    description:
      "A natural-sounding voice agent that answers calls, books appointments, and never sends a customer to voicemail.",
  },
  {
    icon: IconReactivate,
    title: "Lead Reactivation System",
    description:
      "Automated campaigns that wake up old enquiries and past customers with timely, personal messages that convert.",
  },
  {
    icon: IconCalendar,
    title: "Booking & Appointment Automation",
    description:
      "Self-serve scheduling with confirmations and reminders that fill your calendar and cut no-shows on autopilot.",
  },
  {
    icon: IconStar,
    title: "Google Review & Reputation Automation",
    description:
      "Request, collect, and showcase 5-star reviews automatically — building the trust that wins new customers.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Services"
          title="AI services built for real business growth"
          highlight="real business growth"
          subtitle="Modular systems you can start with one piece and expand over time — each designed to save hours and capture more revenue."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 100} as="article" className="h-full">
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
