import { Check } from "lucide-react";
import type { Service } from "@/lib/site";

export default function ServiceCard({
  service,
  detailed = false,
}: {
  service: Service;
  detailed?: boolean;
}) {
  const Icon = service.icon;
  return (
    <article
      id={service.slug}
      className="group relative flex h-full scroll-mt-28 flex-col rounded-3xl border border-teal-900/10 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-teal-700/30 hover:shadow-lift"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-700/10 text-teal-700 transition-colors duration-300 group-hover:bg-teal-700 group-hover:text-cream-50">
        <Icon className="h-6 w-6" strokeWidth={1.6} />
      </span>
      <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-teal-950">
        {service.title}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
        {detailed ? service.description : service.short}
      </p>

      {detailed && (
        <ul className="mt-6 space-y-2.5 border-t border-teal-900/10 pt-6">
          {service.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2.5 text-sm text-ink-soft"
            >
              <Check
                className="mt-0.5 h-4 w-4 shrink-0 text-gold-500"
                strokeWidth={2.25}
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
