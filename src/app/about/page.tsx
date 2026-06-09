import type { Metadata } from "next";
import { Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import StatStrip from "@/components/StatStrip";
import CTASection from "@/components/CTASection";
import { differentiators, founders, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "MAT Digital is a founder-led, boutique performance-marketing agency in West Palm Beach, started by Michael Ullman and Trevor Bianco to help businesses scale smarter.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About — ${site.name}`,
    description:
      "Founder-led performance marketing built on real operating experience, transparency, and systems that last.",
    url: `${site.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-teal-900/10 bg-cream-50">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 -top-24 h-80 w-80 rounded-full bg-gold-100/50 blur-3xl"
        />
        <div className="container-page relative grid gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
          <SectionHeading
            eyebrow="About MAT Digital"
            title="The “M” and the “T” behind the marketing"
            intro="We're a boutique agency built on a simple belief: businesses grow best with marketing systems that last — and partners who actually pick up the phone."
          />
          <Reveal delay={120} className="lg:justify-self-end">
            <figure className="relative max-w-md rounded-4xl border border-teal-900/10 bg-white p-8 shadow-lift">
              <Quote
                className="h-8 w-8 text-gold-400"
                strokeWidth={1.5}
                aria-hidden
              />
              <blockquote className="mt-4 font-display text-xl font-semibold leading-snug text-teal-950">
                “Help businesses scale smarter, not faster, with marketing
                systems that last — and relationships that actually matter.”
              </blockquote>
              <figcaption className="mt-5 text-sm font-medium text-ink-muted">
                — Our mission
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="container-page py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-teal-500/50" />
              Our story
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-teal-950">
              Built by operators who got tired of the agency status quo
            </h2>
          </Reveal>
          <Reveal delay={100} className="space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              Before MAT Digital, our founders helped lead one of the largest
              performance-marketing agencies in the region — managing millions
              in ad spend across hundreds of campaigns. They saw what worked,
              and they saw what didn&apos;t: clients handed off to rotating account
              managers, opaque reporting, and growth tactics that fizzled the
              moment the budget paused.
            </p>
            <p>
              So they started MAT Digital as the boutique alternative. The kind
              of agency they&apos;d want to hire: personalized strategy, direct
              support from the people actually running the work, and transparent
              communication at every step.
            </p>
            <p>
              Between them, our founders have owned and operated multiple
              businesses — including a construction company — so they understand
              marketing from the other side of the table. They know what it
              feels like to spend your own money on ads and need them to work.
              That operator&apos;s mindset shapes everything we do.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="container-page pb-4">
        <StatStrip />
      </section>

      {/* Founders */}
      <section className="container-page py-20 lg:py-24">
        <SectionHeading
          eyebrow="Meet the founders"
          title="You'll work directly with us"
          intro="No layers, no hand-offs. When you partner with MAT Digital, you partner with the people whose names are on the door."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {founders.map((person, i) => (
            <Reveal
              key={person.name}
              delay={i * 90}
              className="flex flex-col gap-5 rounded-3xl border border-teal-900/10 bg-white p-8 shadow-soft sm:flex-row sm:items-start"
            >
              <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-teal-700 font-display text-xl font-extrabold text-cream-50 shadow-soft">
                {person.initials}
              </span>
              <div>
                <h3 className="font-display text-xl font-bold text-teal-950">
                  {person.name}
                </h3>
                <p className="text-sm font-semibold uppercase tracking-wide text-gold-500">
                  {person.role}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {person.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-teal-950 py-20 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we stand for"
            title="The principles behind every engagement"
            light
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {differentiators.map((item, i) => (
              <Reveal
                key={item.title}
                delay={(i % 2) * 80}
                className="rounded-3xl border border-cream-50/10 bg-cream-50/[0.04] p-7"
              >
                <h3 className="font-display text-lg font-bold text-cream-50">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-cream-100/75">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="py-20 lg:py-24">
        <CTASection />
      </div>
    </>
  );
}
