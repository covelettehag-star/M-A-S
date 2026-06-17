import Reveal from "./Reveal";
import { IconArrow } from "./icons";

const bookingUrl = "https://book.mirthluxeaistudio.com/book-page-914668";
const demoUrl = "https://buildmyagent.io/shared/AW3hdk8qP9?embed=true";

export default function AiDemo() {
return ( <section id="ai-demo" className="relative scroll-mt-24 py-24 sm:py-28"> <div className="mx-auto max-w-6xl px-4 sm:px-6"> <Reveal> <div className="text-center"> <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-champagne-300">
Try the Agent in Action </p>

```
        <h2 className="text-balance text-3xl font-bold leading-[1.1] tracking-tight text-cream-50 sm:text-4xl md:text-5xl">
          Experience the{" "}
          <span className="text-gold">MirthLuxe AI Assistant</span>
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-cream-300/80 sm:text-lg">
          Test the AI demo below. When you are ready, book a free AI audit
          and we&apos;ll discuss how automation can help your business get
          more leads, respond faster, and save time.
        </p>

        <div className="mt-6 flex justify-center">
          <a href={bookingUrl} className="btn-gold">
            Book a Free AI Audit
            <IconArrow className="h-4 w-4" />
          </a>
        </div>
      </div>
    </Reveal>

    <Reveal>
      <div className="mt-12 overflow-hidden rounded-3xl border border-champagne-500/20 bg-[#0B0B0B] shadow-2xl shadow-black/50">
        <iframe
          src={demoUrl}
          width="100%"
          height="650"
          style={{
            border: "none",
            width: "100%",
            minHeight: "500px",
            height: "75vh",
            maxHeight: "760px",
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
