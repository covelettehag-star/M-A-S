export default function AiDemoPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-4 py-20 text-white">
      <section className="mx-auto max-w-6xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#C9A96A]">
          Live AI Demo
        </p>

        <h1 className="mb-10 text-4xl font-extrabold uppercase tracking-[0.08em] md:text-6xl">
          Try the{" "}
          <span className="bg-gradient-to-r from-[#D8C08A] to-[#C9A96A] bg-clip-text text-transparent">
            Agent in Action
          </span>
        </h1>

        <div className="overflow-hidden rounded-3xl border border-[#C9A96A]/25 bg-[#0B0B0B] shadow-2xl shadow-black/50">
          <iframe
            src="https://buildmyagent.io/shared/AW3hdk8qP9?embed=true"
            width="100%"
            height="600"
            style={{
              border: "none",
              width: "100%",
              minHeight: "400px",
              height: "90vh",
              maxHeight: "90vh",
            }}
            allowFullScreen
            loading="lazy"
            title="MirthLuxe AI Studio Assistant Demo"
          />
        </div>
      </section>
    </main>
  );
}
