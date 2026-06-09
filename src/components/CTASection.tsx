import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

export default function CTASection({
  title = "Ready to build a marketing system that lasts?",
  body = "Book a free 30-minute strategy call. No pitch — just an honest look at your marketing and a clear plan for what's next.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="container-page">
      <Reveal className="relative overflow-hidden rounded-4xl bg-teal-900 px-6 py-16 text-center shadow-lift sm:px-12 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-700/40 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl"
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance text-cream-50 sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cream-100/80">
            {body}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={site.bookingPath}
              className="btn-accent group w-full sm:w-auto"
            >
              Book a Free Strategy Call
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </Link>
            <a
              href={`tel:${site.phoneHref}`}
              className="btn w-full border border-cream-50/25 text-cream-50 hover:bg-cream-50/10 sm:w-auto"
            >
              <Phone className="h-4 w-4" strokeWidth={1.75} />
              {site.phone}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
