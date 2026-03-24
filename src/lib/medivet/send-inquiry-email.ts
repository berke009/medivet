type InquiryKind = "contact" | "appointment";

export type InquiryPayload = {
  kind: InquiryKind;
  name: string;
  email: string;
  message: string;
};

function validatePayload(body: unknown): InquiryPayload | null {
  if (!body || typeof body !== "object") return null;
  const o = body as Record<string, unknown>;
  const kind = o.kind === "appointment" ? "appointment" : "contact";
  if (typeof o.name !== "string" || typeof o.email !== "string") return null;
  if (typeof o.message !== "string") return null;
  const name = o.name.trim();
  const email = o.email.trim();
  const message = o.message.trim();
  if (!name || !email || !message) return null;
  if (email.length > 320 || name.length > 200 || message.length > 8000)
    return null;
  return { kind, name, email, message };
}

export function parseInquiryJson(body: unknown): InquiryPayload | null {
  return validatePayload(body);
}

export async function sendMedivetInquiryEmail(
  payload: InquiryPayload,
): Promise<{ ok: true } | { ok: false; status: number; error: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.MEDIVET_RESEND_FROM;
  const to =
    payload.kind === "appointment"
      ? process.env.MEDIVET_APPOINTMENTS_TO
      : process.env.MEDIVET_CONTACT_TO;

  if (!apiKey || !from || !to) {
    return {
      ok: false,
      status: 503,
      error: "Email is not configured (missing Resend or destination env).",
    };
  }

  const subjectPrefix =
    payload.kind === "appointment"
      ? "[Medivet] Appointment request"
      : "[Medivet] Consultation request";

  const text = [
    `${subjectPrefix}`,
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    "",
    payload.message,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: payload.email,
      subject: `${subjectPrefix}: ${payload.name}`,
      text,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    return {
      ok: false,
      status: 502,
      error: `Resend error (${res.status}): ${errText.slice(0, 200)}`,
    };
  }

  return { ok: true };
}
