import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // In production, integrate with Resend or Formspree:
    // const res = await fetch('https://api.resend.com/emails', { ... });
    // For now, log and return success for demo
    console.log("[Contact API]", body.type, body);

    // Validate basic fields
    if (!body.email || !body.name) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
