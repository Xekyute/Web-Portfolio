import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const supabaseAdmin = getSupabaseAdmin();

    // 1) Store in Supabase
    const { error: dbError } = await supabaseAdmin
      .from("contact_messages")
      .insert({ name, email, message });

    if (dbError) {
      console.error("Supabase insert failed:", dbError);
      return NextResponse.json(
        { error: "Database insert failed" },
        { status: 500 },
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;
    const resendKey = process.env.RESEND_API_KEY;

    if (!to || !from || !resendKey) {
      return NextResponse.json(
        { error: "Email env vars missing" },
        { status: 500 },
      );
    }

    const resend = new Resend(resendKey);

    const subject = `Xekyute's Portfolio · Contact from ${name}`;

    const { error: emailError } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (emailError) {
      console.error("Resend failed:", emailError);
      return NextResponse.json(
        { error: "Saved, but failed to send email" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Invalid request" }, { status: 500 });
  }
}
