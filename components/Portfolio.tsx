import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ProjectCard, { type Project } from "./ProjectCard";

const projects: Project[] = [
  {
    category: "Wellness Clinic",
    title: "Healthy Lab Website Preview",
    description:
      "A calm, premium site concept with instant AI answers and one-tap booking — designed to turn first-time visitors into appointments.",
    gradient:
      "bg-[linear-gradient(135deg,#1f2b2a_0%,#3a4d44_50%,#cba776_120%)]",
    tags: ["AI Website", "Booking", "Live Chat"],
  },
  {
    category: "Wellness Studio",
    title: "Wellness Studio AI Receptionist",
    description:
      "A voice agent concept that answers every call, books sessions, and handles FAQs — so the front desk is never the bottleneck.",
    gradient:
      "bg-[linear-gradient(135deg,#241a2e_0%,#4a3a55_50%,#cba776_120%)]",
    tags: ["Voice Agent", "Scheduling", "24/7"],
  },
  {
    category: "Tutorial Center",
    title: "Tutorial Center Lead System",
    description:
      "A lead capture and follow-up flow concept that nurtures parent enquiries automatically and fills class schedules faster.",
    gradient:
      "bg-[linear-gradient(135deg,#1a2230_0%,#324155_50%,#cba776_120%)]",
    tags: ["Lead Automation", "Follow-up", "CRM"],
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Sample Work"
          title="Designed to look premium. Built to perform."
          highlight="Built to perform."
          subtitle="Concept previews of the kinds of systems we build for service-based businesses. Each one blends a refined look with real automation underneath."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 120} className="h-full">
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center" delay={120}>
          <p className="text-sm text-cream-300/60">
            Previews shown are illustrative concepts created to demonstrate
            design and capability.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
