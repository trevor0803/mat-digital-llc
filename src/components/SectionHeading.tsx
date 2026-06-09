import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <Reveal>
          <span className={`eyebrow ${light ? "text-gold-300" : ""}`}>
            <span
              className={`h-px w-6 ${light ? "bg-gold-300/60" : "bg-teal-500/50"}`}
            />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={60}>
        <h2
          className={`mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl ${
            light ? "text-cream-50" : "text-teal-950"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={120}>
          <p
            className={`mt-5 text-lg leading-relaxed text-pretty ${
              light ? "text-cream-100/80" : "text-ink-soft"
            }`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
