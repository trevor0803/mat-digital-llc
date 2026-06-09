import type { Metadata } from "next";
import Script from "next/script";
import { CalendarCheck, Clock, MessageSquare, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Call",
  description:
    "Book your free 30-minute strategy call with MAT Digital. Pick a time that works for you — no sales pitch, just an honest look at your marketing.",
  alternates: { canonical: "/book" },
  openGraph: {
    title: `Book a Call — ${site.name}`,
    description:
      "Schedule a free 30-minute strategy call with MAT Digital. No pitch — just a clear plan for your marketing.",
    url: `${site.url}/book`,
  },
};

const highlights = [
  {
    icon: Clock,
    title: "30 minutes",
    body: "A focused, no-fluff conversation that respects your time.",
  },
  {
    icon: MessageSquare,
    title: "No sales pitch",
    body: "An honest assessment of where your marketing stands today.",
  },
  {
    icon: CalendarCheck,
    title: "A custom plan",
    body: "Leave with clear, actionable next steps — yours to keep.",
  },
];

export default function BookPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-teal-900/10 bg-cream-50">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-teal-200/40 blur-3xl"
        />
        <div className="container-page relative py-16 lg:py-20">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-teal-500/50" />
              Free strategy call
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-balance text-teal-950 sm:text-5xl">
              Pick a time that works for you
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty">
              Choose a slot on the calendar below and we&apos;ll meet for a free
              30-minute strategy call. It&apos;s a real conversation — no
              obligation, no pressure.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.title}
                  delay={i * 80}
                  className="flex items-start gap-3 rounded-2xl border border-teal-900/10 bg-white p-4 shadow-soft"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-700/10 text-teal-700">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-teal-950">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-sm text-ink-soft">{item.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-page py-12 lg:py-16">
        <Reveal className="overflow-hidden rounded-3xl border border-teal-900/10 bg-white p-2 shadow-soft sm:p-3">
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/Voe8aAUGZsaSAIyu7AZ0"
            title="Book a free strategy call with MAT Digital"
            id="Voe8aAUGZsaSAIyu7AZ0_1781017335634"
            scrolling="no"
            className="h-[760px] w-full rounded-2xl border-0"
            style={{ minHeight: "760px", overflow: "hidden" }}
          />
        </Reveal>

        <Reveal className="mt-8 flex items-center justify-center gap-2 text-sm text-ink-muted">
          <ShieldCheck className="h-4 w-4 text-teal-600" strokeWidth={1.75} />
          Prefer to reach out another way? Call{" "}
          <a
            href={`tel:${site.phoneHref}`}
            className="font-semibold text-teal-700 hover:text-teal-900"
          >
            {site.phone}
          </a>{" "}
          or email{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold text-teal-700 hover:text-teal-900"
          >
            {site.email}
          </a>
          .
        </Reveal>
      </section>

      {/* LeadConnector embed resizer */}
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}
