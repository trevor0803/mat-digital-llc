import Reveal from "./Reveal";
import { stats } from "@/lib/site";

export default function StatStrip() {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-teal-900/10 bg-teal-900/10 shadow-soft lg:grid-cols-4">
      {stats.map((stat, i) => (
        <Reveal
          key={stat.label}
          delay={i * 80}
          className="flex flex-col items-center justify-center bg-white px-4 py-8 text-center"
        >
          <dt className="order-2 mt-2 text-xs font-medium uppercase tracking-wider text-ink-muted sm:text-sm">
            {stat.label}
          </dt>
          <dd className="order-1 font-display text-3xl font-extrabold tracking-tight text-teal-800 sm:text-4xl">
            {stat.value}
          </dd>
        </Reveal>
      ))}
    </dl>
  );
}
