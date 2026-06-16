import Reveal from "./Reveal";

export default function AiDemo() {
return ( <section id="ai-demo" className="relative z-10 py-24 sm:py-28"> <div className="mx-auto max-w-6xl px-4 sm:px-6"> <Reveal> <div className="text-center"> <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-champagne-300">
Live AI Demo </p>

```
        <h2 className="mb-10 text-4xl font-extrabold uppercase tracking-[0.08em] text-cream-50 md:text-6xl">
          Try the{" "}
          <span className="text-[#70D6C9]">Agent in Action</span>
        </h2>
      </div>
    </Reveal>

    <Reveal>
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0E1116] shadow-2xl shadow-black/60">
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
    </Reveal>
  </div>
</section>
);
}
