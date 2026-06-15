import Background from "./Background";
import Header from "./Header";
import Footer from "./Footer";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

type LegalLayoutProps = {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
};

const DISCLAIMER =
  "This document is provided for general informational purposes and should be reviewed by a qualified legal professional before publication.";

/**
 * Shared shell for legal pages (Privacy Policy, Terms of Service).
 * Reuses the site background, header, and footer, and renders the legal
 * content inside a premium glassmorphism container with numbered sections.
 */
export default function LegalLayout({
  title,
  lastUpdated,
  sections,
}: LegalLayoutProps) {
  return (
    <>
      <Background />
      <Header />
      <main className="relative z-10">
        <article className="mx-auto max-w-4xl px-4 pb-24 pt-36 sm:px-6 sm:pt-40">
          {/* Heading */}
          <header className="mb-10 flex flex-col gap-4">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-champagne-500/25 bg-champagne-500/[0.06] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-champagne-200">
              <span className="h-1.5 w-1.5 rounded-full bg-champagne-300 shadow-glow-sm" />
              Legal
            </span>
            <h1 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-cream-50 sm:text-4xl md:text-5xl">
              {title}
            </h1>
            <p className="text-sm text-cream-300/70">
              Last Updated:{" "}
              <span className="text-champagne-200">{lastUpdated}</span>
            </p>
          </header>

          {/* Disclaimer callout */}
          <div className="gradient-border mb-10 rounded-2xl bg-ink-800/60 p-5 sm:p-6">
            <p className="text-sm italic leading-relaxed text-cream-200/85">
              {DISCLAIMER}
            </p>
          </div>

          {/* Content */}
          <div className="glass-strong rounded-3xl p-6 shadow-card sm:p-9">
            <div className="flex flex-col gap-10">
              {sections.map((section, i) => (
                <section
                  key={section.heading}
                  className={
                    i > 0 ? "border-t border-champagne-500/10 pt-10" : ""
                  }
                >
                  <h2 className="mb-4 flex items-baseline gap-3 text-xl font-semibold text-cream-50 sm:text-2xl">
                    <span className="text-base font-semibold text-champagne-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {section.heading}
                  </h2>

                  {section.paragraphs?.map((paragraph, p) => (
                    <p
                      key={p}
                      className="mb-3 text-sm leading-relaxed text-cream-300/80 sm:text-[0.95rem] sm:leading-7"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets && (
                    <ul className="mt-3 flex flex-col gap-2.5">
                      {section.bullets.map((bullet, b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 text-sm leading-relaxed text-cream-300/80 sm:text-[0.95rem]"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-champagne-400" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
