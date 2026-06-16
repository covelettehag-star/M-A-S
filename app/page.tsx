export default function AiDemoPage() {
return ( <main className="min-h-screen bg-[#050505] px-4 py-20 text-white"> <section className="mx-auto max-w-6xl text-center"> <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#C9A96A]">
Live AI Demo </p>

```
    <h1 className="mb-10 text-4xl font-extrabold uppercase tracking-[0.08em] md:text-6xl">
      Try the{" "}
      <span className="bg-gradient-to-r from-[#D8C08A] to-[#C9A96A] bg-clip-text text-transparent">
        Agent in Action
      </span>
    </h1>

    <div className="overflow-hidden rounded-3xl border border-[#C9A96A]/25 bg-[#0B0B0B] shadow-2xl shadow-black/50">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#090909] px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C9A96A]/30 bg-[#C9A96A]/10 text-[#C9A96A]">
            AI
          </div>

          <div className="text-left">
            <p className="text-sm font-semibold text-white">
              MirthLuxe AI Studio
            </p>
            <p className="text-xs text-[#C9B99A]">
              AI Receptionist Demo
            </p>
          </div>
        </div>

        <a
          href="https://calendly.com/covelette-hag/30min"
          className="rounded-full bg-[#C9A96A] px-5 py-2 text-sm font-semibold text-black transition hover:opacity-90"
        >
          Book Audit
        </a>
      </div>

      <iframe
        src="https://buildmyagent.io/shared/AW3hdk8qP9?embed=true"
        width="100%"
        height="720"
        style={{
          border: "none",
          width: "100%",
          minHeight: "500px",
          height: "78vh",
          maxHeight: "800px",
          background: "#0E1116",
        }}
        allowFullScreen
        loading="lazy"
        title="MirthLuxe AI Studio Assistant Demo"
      />
    </div>

    <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-[#C9B99A]">
      Ask the agent about AI websites, chatbots, booking automation, lead
      capture, or how AI can help your business respond faster.
    </p>
  </section>
</main>
);
}
