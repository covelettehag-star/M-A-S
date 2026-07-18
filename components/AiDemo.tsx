const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We identify repetitive tasks and missed opportunities affecting your business.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We map the workflow, customer journey, integrations, and human handoffs.",
  },
  {
    number: "03",
    title: "Build & Test",
    description:
      "We build your automation and carefully test every step before launch.",
  },
  {
    number: "04",
    title: "Launch & Improve",
    description:
      "We launch the system, monitor performance, and refine it as you grow.",
  },
];

export default function AiDemo() {
  return (
    <section
      id="ai-demo"
      className="relative z-10 scroll-mt-24 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A96A]">
            How We Work
          </p>

          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            From AI Ideas to{" "}
            <span className="text-[#C9A96A]">Working Automation</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
            We turn business challenges into practical AI systems that save
            time, respond faster, and capture more opportunities.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-[#C9A96A]/20 bg-white/[0.03] p-6"
            >
              <p className="text-sm font-semibold tracking-widest text-[#C9A96A]">
                {step.number}
              </p>

              <h3 className="mt-5 text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/65">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://book.mirthluxeaistudio.com/book-page-914668"
            className="inline-flex rounded-full bg-[#C9A96A] px-7 py-3.5 font-semibold text-black transition hover:bg-[#D8C08A]"
          >
            Discuss Your Automation Idea
          </a>
        </div>
      </div>
    </section>
  );
}
