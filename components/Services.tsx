import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ServiceCard, { type Service } from "./ServiceCard";
import {
  IconChat,
  IconVoice,
  IconCalendar,
  IconWebsite,
} from "./icons";

const services: Service[] = [
  {
    icon: IconVoice,
    title: "Answers Calls 24/7",
    description:
      "Your AI receptionist answers customer calls after hours, on weekends, and when your team is busy.",
  },
  {
    icon: IconChat,
    title: "Answers Common Questions",
    description:
      "It responds to FAQs about services, prices, opening hours, location, policies, and availability.",
  },
  {
    icon: IconWebsite,
    title: "Collects Customer Details",
    description:
      "It captures the customer’s name, phone number, service request, preferred time, and important notes.",
  },
  {
    icon: IconCalendar,
    title: "Books Appointments Automatically",
    description:
      "It guides customers toward a confirmed booking and sends the appointment details to your team.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="One Solution"
          title="What Your AI Receptionist Can Do"
          highlight="AI Receptionist"
          subtitle="One AI receptionist that answers calls, handles questions, captures customer details, and books appointments 24/7."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 4) * 100} as="article" className="h-full">
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
