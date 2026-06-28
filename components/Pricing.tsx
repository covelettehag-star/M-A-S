const packages = [
  {
    name: "Starter",
    price: "$497",
    description: "For small businesses that need a premium online presence.",
    features: ["1-page AI-ready website", "Lead capture form", "Mobile responsive design", "Basic SEO setup"],
  },
  {
    name: "Growth",
    price: "$997",
    description: "For businesses ready to automate leads and bookings.",
    features: ["Multi-section website", "AI chatbot integration", "Booking system", "Lead capture automation", "Basic CRM setup"],
  },
  {
    name: "Luxe AI System",
    price: "$1,997+",
    description: "For businesses that want a complete AI sales and automation system.",
    features: ["Premium website", "AI chatbot", "AI voice agent", "Booking automation", "CRM pipeline", "Follow-up automation"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#050505] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#C9A96A]">
          Packages
        </p>

        <h2 className="mb-6 text-4xl font-extrabold uppercase tracking-[0.08em] md:text-5xl">
          Choose Your AI Growth Plan
        </h2>

        <p className="mx-auto mb-14 max-w-2xl text-white/65">
          Premium AI websites, chatbots, booking systems, and automation packages built for modern businesses.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {packages.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-[#C9A96A]/25 bg-[#0B0B0B] p-8 text-left shadow-2xl shadow-black/40"
            >
              <h3 className="mb-3 text-2xl font-bold text-[#D8C08A]">{item.name}</h3>
              <p className="mb-6 text-4xl font-extrabold">{item.price}</p>
              <p className="mb-8 text-sm leading-6 text-white/65">{item.description}</p>

              <ul className="mb-8 space-y-3 text-sm text-white/80">
                {item.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <a
                href="https://calendly.com/covelette-hag/30min"
                className="block rounded-full bg-[#C9A96A] px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.2em] text-black"
              >
                Book Free Audit
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
