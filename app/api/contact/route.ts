import { NextResponse } from "next/server";

/**
 * Contact form endpoint — currently a stub.
 *
 * To wire it to n8n later: set CONTACT_WEBHOOK_URL in your Vercel environment
 * variables (or .env.local) to your n8n webhook URL. Submissions will be
 * forwarded as JSON: { name, email, businessType, message, submittedAt }.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, businessType, message } = (body ?? {}) as Record<
    string,
    unknown
  >;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof businessType !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !/^\S+@\S+\.\S+$/.test(email) ||
    !message.trim()
  ) {
    return NextResponse.json(
      { ok: false, error: "Missing or invalid fields" },
      { status: 400 }
    );
  }

  const payload = {
    name: name.trim(),
    email: email.trim(),
    businessType,
    message: message.trim(),
    submittedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (error) {
      console.error("Contact webhook forwarding failed:", error);
      return NextResponse.json(
        { ok: false, error: "Failed to deliver message" },
        { status: 502 }
      );
    }
  } else {
    // Stub mode: no webhook configured yet — log so submissions are visible
    // in Vercel function logs during development.
    console.log("Contact form submission (no webhook configured):", payload);
  }

  return NextResponse.json({ ok: true });
}
