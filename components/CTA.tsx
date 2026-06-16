import Reveal from "./Reveal";
import { IconArrow } from "./icons";

const bookingUrl = "https://book.mirthluxeaistudio.com/book-page-914668";

export default function CTA() {
return ( <section id="contact" className="relative scroll-mt-24 py-24 sm:py-28"> <div className="mx-auto max-w-5xl px-4 sm:px-6"> <Reveal> <div className="gradient-border relative overflow-hidden rounded-[2.5rem] bg-ink-800/60 px-6 py-16 text-center sm:px-12 sm:py-20">
{/* Glow accents */} <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-radial-glow blur-2xl" /> <div className="pointer-events-none absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

```
        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-champagne-500/25 bg-champagne-500/[0.06] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-champagne-200">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-champagne-300" />
            Free AI Audit
          </span>

          <h2 className="text-balance text-3xl font-bold leading-[1.1] tracking-tight text-cream-50 sm:text-4xl md:text-5xl">
            Ready to make your business look{" "}
            <span className="text-gold">premium</span> and work{" "}
            <span className="text-gold">smarter?</span>
          </h2>

          <p className="text-pretty text-base leading-relaxed text-cream-300/80 sm:text-lg">
            Get a free AI audit and discover where automation can save time,
            capture leads, and improve your customer experience.
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <a href={bookingUrl} className="btn-gold">
              Book a Free AI Audit
              <IconArrow className="h-4 w-4" />
            </a>
            <a href="#services" className="btn-ghost">
              Explore Services
            </a>
          </div>

          <p className="text-xs text-cream-300/55">
            No pressure, no jargon — just a clear look at what&apos;s
            possible.
          </p>
        </div>
      </div>
    </Reveal>
  </div>
</section>
```

);
}
