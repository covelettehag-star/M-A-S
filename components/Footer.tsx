import Logo from "./Logo";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    path: "M14 9h2.5V5.5H14c-2 0-3.5 1.5-3.5 3.5v2H8.5V14h2v6.5H14V14h2.3l.7-3.5H14V9.5c0-.3.2-.5.5-.5Z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm4.5 5.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5-1.2a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8Z",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M6.5 8.5v9M6.5 5.5v.01M10.5 17.5v-5a2.5 2.5 0 0 1 5 0v5M10.5 12.5v5",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-champagne-500/12 bg-ink-950/60">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne-500/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-cream-300/70">
              Luxury AI systems for modern businesses. Websites, chatbots, voice
              agents, and automation that help you look premium and grow
              smarter.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-champagne-200">
              Explore
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream-300/75 transition-colors hover:text-cream-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + socials */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-champagne-200">
              Get in touch
            </h3>
            <a
              href="mailto:hello@mirthluxe.ai"
              className="text-sm text-cream-300/75 transition-colors hover:text-cream-50"
            >
              hello@mirthluxe.ai
            </a>
            <div className="mt-5 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-champagne-500/20 text-cream-200/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-champagne-400/50 hover:text-champagne-200"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-champagne-500/10 pt-8 sm:flex-row">
          <p className="text-xs text-cream-300/55">
            © {new Date().getFullYear()} MirthLuxe AI Studio. All rights
            reserved.
          </p>
          <p className="text-xs text-cream-300/55">
            Crafted with precision · Built to perform
          </p>
        </div>
      </div>
    </footer>
  );
}
