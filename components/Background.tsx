import AnimatedShaderBackground from "./ui/animated-shader-background";

/**
 * Full-page premium background layer.
 *
 * Renders the animated gold shader behind every section, then softens it with
 * a dark base, radial vignette, and edge masks so headings, cards, and CTAs
 * stay perfectly readable. Fixed + pointer-events-none so it never blocks
 * clicks and sits behind all content (z-[-10]); the navbar (z-50) and page
 * content (relative z-10) always render above it.
 */
export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-950"
    >
      {/* Animated gold shader, dimmed for subtlety */}
      <div className="absolute inset-0 opacity-[0.55] [mask-image:radial-gradient(ellipse_100%_80%_at_50%_30%,black_55%,transparent_100%)]">
        <AnimatedShaderBackground />
      </div>

      {/* Warm radial glow toward the top, echoing the hero */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,rgba(216,185,138,0.16),transparent_70%)]" />

      {/* Dark vignette to keep edges deep and content legible */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_120%_at_50%_50%,transparent_30%,rgba(7,7,8,0.55)_100%)]" />

      {/* Vertical fade — darker at very top/bottom for nav and footer contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-transparent to-ink-950/85" />

      {/* Subtle luxury grain/grid already lives in sections; keep this layer clean */}
    </div>
  );
}
