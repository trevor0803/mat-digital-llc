import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { nav, services, site } from "@/lib/site";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="mt-24 bg-teal-950 text-cream-100">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link
            href="/"
            className="font-display text-xl font-extrabold tracking-tight text-cream-50"
          >
            MAT Digital
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-200/70">
            {site.tagline} A boutique performance-marketing agency built on
            founder-led service and systems that last.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
            Navigate
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-cream-200/80 transition-colors hover:text-cream-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
            Services
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link
                  href="/services"
                  className="text-cream-200/80 transition-colors hover:text-cream-50"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={`tel:${site.phoneHref}`}
                className="inline-flex items-center gap-2.5 text-cream-200/80 transition-colors hover:text-cream-50"
              >
                <Phone className="h-4 w-4 text-gold-300" strokeWidth={1.75} />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2.5 text-cream-200/80 transition-colors hover:text-cream-50"
              >
                <Mail className="h-4 w-4 text-gold-300" strokeWidth={1.75} />
                {site.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2.5 text-cream-200/80">
              <MapPin className="h-4 w-4 text-gold-300" strokeWidth={1.75} />
              {site.location}
            </li>
          </ul>
          <Link href={site.bookingPath} className="btn-accent mt-6">
            Book a Free Strategy Call
          </Link>
        </div>
      </div>

      <div className="border-t border-cream-50/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream-200/60 sm:flex-row">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>{site.serviceArea}</p>
        </div>
      </div>
    </footer>
  );
}
