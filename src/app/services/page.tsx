import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { processSteps, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Meta ads, CRM buildouts, funnels, lead generation, marketing strategy, and Google Business Profile management — the full growth system from MAT Digital.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: `Services — ${site.name}`,
    description:
      "The full performance-marketing system: Meta ads, CRM automation, funnels, lead generation, strategy, and local search.",
    url: `${site.url}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden border-b border-teal-900/10 bg-cream-50">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-teal-200/40 blur-3xl"
        />
        <div className="container-page relative py-20 lg:py-24">
          <SectionHeading
            eyebrow="Our services"
            title="One connected growth system — not a menu of one-offs"
            intro="Each service is powerful on its own, but they're designed to work together: ads drive traffic, funnels convert it, CRMs nurture it, and strategy keeps it all pointed at revenue."
          />
        </div>
      </section>

      {/* Services grid */}
      <section className="container-page py-20 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 80}>
              <ServiceCard service={service} detailed />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-teal-950 py-20 lg:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Engagement model"
            title="How we work together"
            intro="A straightforward process designed to get to results without the bloated onboarding."
            light
          />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal
                key={step.step}
                delay={(i % 4) * 70}
                className="rounded-3xl border border-cream-50/10 bg-cream-50/[0.04] p-7"
              >
                <li>
                  <span className="font-display text-4xl font-extrabold text-teal-400/70">
                    {step.step}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-cream-50">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-cream-100/75">
                    {step.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <div className="py-20 lg:py-24">
        <CTASection
          title="Not sure which service you need?"
          body="That's exactly what the free strategy call is for. Tell us where you're stuck and we'll point you to the highest-leverage next move — even if it isn't with us."
        />
      </div>
    </>
  );
}
