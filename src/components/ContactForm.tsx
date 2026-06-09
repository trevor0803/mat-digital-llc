"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || "Something went wrong.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-teal-900/10 bg-white p-10 text-center shadow-soft">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-teal-700/10 text-teal-700">
          <CheckCircle2 className="h-7 w-7" strokeWidth={1.75} />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold text-teal-950">
          Thanks — we got it.
        </h3>
        <p className="mt-3 max-w-sm text-ink-soft">
          Your message is on its way to our team. We&apos;ll be in touch within
          24 hours to set up your free strategy call.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-ghost mt-7"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-teal-900/10 bg-white p-7 shadow-soft sm:p-9"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Jane Doe"
          required
        />
        <Field
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="jane@company.com"
          required
        />
      </div>
      <div className="mt-5">
        <Field
          label="Phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="(561) 555-0123"
          optional
        />
      </div>
      <div className="mt-5">
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-semibold text-teal-950"
        >
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your business and what you're trying to grow…"
          className="w-full rounded-2xl border border-teal-900/15 bg-cream-50 px-4 py-3 text-[15px] text-ink shadow-sm outline-none transition placeholder:text-ink-muted/70 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20"
        />
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary group mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
            Sending…
          </>
        ) : (
          <>
            Send message
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </>
        )}
      </button>
      <p className="mt-4 text-center text-xs text-ink-muted">
        By submitting, you agree to be contacted about your inquiry. We never
        share your information.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  autoComplete,
  required,
  optional,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  optional?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-semibold text-teal-950"
      >
        {label}
        {optional && (
          <span className="ml-1 font-normal text-ink-muted">(optional)</span>
        )}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-2xl border border-teal-900/15 bg-cream-50 px-4 py-3 text-[15px] text-ink shadow-sm outline-none transition placeholder:text-ink-muted/70 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20"
      />
    </div>
  );
}
