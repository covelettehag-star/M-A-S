import Reveal from "./Reveal";

export default function AiDemo() {
return ( <section id="ai-demo" className="relative z-10 py-24 sm:py-28"> <div className="mx-auto max-w-6xl px-4 sm:px-6"> <Reveal> <div className="text-center"> <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-champagne-300">
Live AI Demo </p>

```
        <h2 className="mb-10 text-4xl font-extrabold uppercase tracking-[0.08em] text-cream-50 md:text-6xl">
          Try the{" "}
          <span className="text-[#70D6C9]">
            Agent in Action
          </span>
        </h2>
      </div>
    </Reveal>

    <Reveal>
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0E1116] shadow-2xl shadow-black/60">
        <div className="flex items-center justify-between border-b border-white/10 bg-[#07090C] px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#70D6C9]/40 bg-[#70D6C9]/10 text-sm font-bold text-[#70D6C9]">
              AI
            </div>

            <div>
              <p className="text-sm font-semibold text-[#70D6C9]">
                MirthLuxe AI Studio
              </p>
              <p className="text-xs text-cream-300/60">
                AI Receptionist Demo
              </p>
            </div>
          </div>

          <a
            href="https://calendly.com/covelette-hag/30min"
            className="rounded-lg bg-[#70D6C9] px-4 py-2 text-sm font-semibold text-black"
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
    </Reveal>
  </div>
</section>
```

);
}
