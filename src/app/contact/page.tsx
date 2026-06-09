import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, CalendarCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free 30-minute strategy call with MAT Digital. No pitch — just an honest look at your marketing. We reply to every inquiry within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact — ${site.name}`,
    description:
      "Get in touch with MAT Digital in West Palm Beach. We respond within 24 hours.",
    url: `${site.url}/contact`,
  },
};

const details = [
  {
    icon: Phone,
    label: "Call us",
    value: site.phone,
    href: `tel:${site.phoneHref}`,
  },
  {
    icon: Mail,
    label: "Email us",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: MapPin,
    label: "Based in",
    value: site.location,
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 24 hours",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-teal-900/10 bg-cream-50">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-teal-200/40 blur-3xl"
        />
        <div className="container-page relative py-20 lg:py-24">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-teal-500/50" />
              Get in touch
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-balance text-teal-950 sm:text-5xl">
              Let&apos;s talk about growing your business
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty">
              Book a free 30-minute strategy call. It&apos;s a real
              conversation — no sales pitch. We&apos;ll assess your current
              marketing and give you a customized action plan you can use with
              us or on your own.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left: details */}
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <h2 className="font-display text-2xl font-bold text-teal-950">
                Contact details
              </h2>
              <p className="mt-3 text-ink-soft">
                Prefer to reach out directly? Use whatever&apos;s easiest — we
                read everything ourselves.
              </p>

              <ul className="mt-8 space-y-4">
                {details.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4 rounded-2xl border border-teal-900/10 bg-white p-4 shadow-soft transition-colors hover:border-teal-700/30">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-700/10 text-teal-700">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                          {item.label}
                        </p>
                        <p className="mt-0.5 font-medium text-teal-950">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a href={item.href} className="block">
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 rounded-2xl bg-teal-700/[0.07] p-5">
                <div className="flex items-start gap-3">
                  <CalendarCheck
                    className="mt-0.5 h-5 w-5 shrink-0 text-teal-700"
                    strokeWidth={1.75}
                  />
                  <p className="text-sm leading-relaxed text-ink-soft">
                    <span className="font-semibold text-teal-950">
                      Prefer to grab a time now?
                    </span>{" "}
                    Book a free 30-minute strategy call — an honest assessment of
                    your marketing plus a customized action plan. No pitch, no
                    obligation.
                  </p>
                </div>
                <Link
                  href={site.bookingPath}
                  className="btn-primary mt-4 w-full"
                >
                  Book a Free Strategy Call
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
