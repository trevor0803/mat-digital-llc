import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="relative inline-flex h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-white shadow-soft ring-1 ring-teal-900/5">
        <Image
          src="/assets/mat-digital-logo-300.png"
          alt="MAT Digital logo"
          fill
          sizes="36px"
          className="object-contain p-0.5"
          priority
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-base font-extrabold tracking-tight ${
            variant === "light" ? "text-cream-50" : "text-teal-900"
          }`}
        >
          MAT Digital
        </span>
        <span
          className={`mt-0.5 text-[10px] font-medium uppercase tracking-[0.22em] ${
            variant === "light" ? "text-cream-200/70" : "text-ink-muted"
          }`}
        >
          Performance Marketing
        </span>
      </span>
    </Link>
  );
}
