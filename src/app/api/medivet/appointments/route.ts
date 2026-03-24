import {
  parseInquiryJson,
  sendMedivetInquiryEmail,
} from "@/lib/medivet/send-inquiry-email";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const o = typeof body === "object" && body !== null ? body : {};
  const base = parseInquiryJson({ ...o, kind: "appointment" });
  if (!base) {
    return Response.json(
      { error: "Expected name, email, and message strings" },
      { status: 400 },
    );
  }

  const result = await sendMedivetInquiryEmail({
    ...base,
    kind: "appointment",
  });
  if (!result.ok) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json({ ok: true });
}
