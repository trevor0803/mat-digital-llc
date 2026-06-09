import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-7xl font-extrabold text-teal-200">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold text-teal-950">
        This page took a wrong turn
      </h1>
      <p className="mt-3 max-w-md text-ink-soft">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
        Let&apos;s get you back on track.
      </p>
      <Link href="/" className="btn-primary group mt-8">
        <ArrowLeft
          className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
          strokeWidth={2}
        />
        Back to home
      </Link>
    </section>
  );
}
