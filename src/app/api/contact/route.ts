import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  // Server-side validation
  const errors: string[] = [];
  if (name.length < 2) errors.push("A valid name is required.");
  if (!isEmail(email)) errors.push("A valid email is required.");
  if (message.length < 10)
    errors.push("Please include a message of at least 10 characters.");

  if (errors.length > 0) {
    return NextResponse.json(
      { ok: false, message: errors.join(" ") },
      { status: 422 }
    );
  }

  // TODO: webhook — forward this lead to a CRM/email/Slack/webhook integration.
  // For now we simply log the inquiry to the server console so it's easy to
  // verify locally and wire up later without changing the client.
  console.log("[MAT Digital] New contact inquiry:", {
    name,
    email,
    phone: phone || "(not provided)",
    message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json(
    { ok: true, message: "Inquiry received. We'll be in touch within 24 hours." },
    { status: 200 }
  );
}
