import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import StatStrip from "@/components/StatStrip";
import CTASection from "@/components/CTASection";
import { differentiators, processSteps, services, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full bg-teal-200/40 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-32 h-[28rem] w-[28rem] rounded-full bg-gold-100/50 blur-3xl"
        />

        <div className="container-page relative grid items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-teal-500/50" />
                {site.location}
              </span>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance text-teal-950 sm:text-5xl lg:text-6xl">
                Marketing that scales.{" "}
                <span className="relative whitespace-nowrap text-teal-700">
                  Strategy
                  <svg
                    aria-hidden
                    viewBox="0 0 200 12"
                    className="absolute -bottom-1 left-0 h-2.5 w-full text-gold-400"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 9C50 3 150 3 198 7"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                that lasts.
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft text-pretty">
                MAT Digital is a boutique performance-marketing agency. We build
                the ads, funnels, CRMs, and lead systems that turn ad spend into
                predictable revenue — and we run them with founders, not account
                managers.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href={site.bookingPath} className="btn-primary group">
                  Book a Free Strategy Call
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={2}
                  />
                </Link>
                <Link href="/services" className="btn-ghost">
                  Explore our services
                </Link>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-soft">
                <li className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-teal-600" strokeWidth={1.75} />
                  24-hour response
                </li>
                <li className="inline-flex items-center gap-2">
                  <ShieldCheck
                    className="h-4 w-4 text-teal-600"
                    strokeWidth={1.75}
                  />
                  No long-term lock-in pitch
                </li>
                <li className="inline-flex items-center gap-2">
                  <CheckCircle2
                    className="h-4 w-4 text-teal-600"
                    strokeWidth={1.75}
                  />
                  Founder-led service
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Hero visual card */}
          <Reveal delay={160} className="lg:justify-self-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-3 rounded-4xl bg-gradient-to-br from-teal-200/50 to-gold-100/40 blur-2xl" />
              <div className="relative rounded-4xl border border-teal-900/10 bg-white/80 p-6 shadow-lift backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                      Client growth
                    </p>
                    <p className="mt-1 font-display text-2xl font-bold text-teal-950">
                      Last 90 days
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-teal-700/10 px-3 py-1 text-xs font-semibold text-teal-700">
                    <TrendingUp className="h-3.5 w-3.5" strokeWidth={2} />
                    Trending up
                  </span>
                </div>

                {/* Faux bar chart */}
                <div className="mt-7 flex h-40 items-end gap-2.5">
                  {[34, 46, 41, 58, 67, 72, 88, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-teal-700 to-teal-400"
                      style={{ height: `${h}%`, opacity: 0.55 + i * 0.055 }}
                    />
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-cream-100 p-4">
                    <p className="font-display text-2xl font-extrabold text-teal-800">
                      $1.2M+
                    </p>
                    <p className="mt-0.5 text-xs text-ink-muted">
                      Monthly ad spend managed
                    </p>
                  </div>
                  <div className="rounded-2xl bg-cream-100 p-4">
                    <p className="font-display text-2xl font-extrabold text-teal-800">
                      $10M+
                    </p>
                    <p className="mt-0.5 text-xs text-ink-muted">
                      Client revenue generated
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="container-page pb-4">
        <StatStrip />
      </section>

      {/* Services */}
      <section className="container-page py-20 lg:py-28">
        <SectionHeading
          eyebrow="What we do"
          title="Everything you need to turn attention into revenue"
          intro="Six core services that work together as one growth system — from the first ad impression to a closed, tracked sale."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 80}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 font-semibold text-teal-700 transition-colors hover:text-teal-900"
          >
            See how each service works
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </Reveal>
      </section>

      {/* Differentiators */}
      <section className="bg-teal-950 py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why MAT Digital"
            title="A boutique agency that operates like a partner"
            intro="We left one of the region's largest performance agencies to build something different — high-touch, transparent, and built to last."
            light
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {differentiators.map((item, i) => (
              <Reveal
                key={item.title}
                delay={(i % 2) * 80}
                className="rounded-3xl border border-cream-50/10 bg-cream-50/[0.04] p-7 transition-colors hover:bg-cream-50/[0.07]"
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

      {/* Process */}
      <section className="container-page py-20 lg:py-28">
        <SectionHeading
          eyebrow="How it works"
          title="A simple path from first call to scaled results"
          intro="No bloated onboarding decks. Just a clear, proven sequence that gets you to results faster."
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={(i % 4) * 70}>
              <li className="relative flex h-full flex-col rounded-3xl border border-teal-900/10 bg-white p-7 shadow-soft">
                <span className="font-display text-4xl font-extrabold text-teal-200">
                  {step.step}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-teal-950">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <CTASection />
    </>
  );
}
