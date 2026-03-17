import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, type, budget, description } = await req.json();

    // Validate required fields
    if (!name || !email || !description) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    // Create transporter from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Nexivo Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `[Nexivo] Nouvelle demande de ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #060918; color: #e2e8f0; border-radius: 16px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #6366f1, #a855f7); padding: 32px; text-align: center;">
            <h1 style="margin: 0; color: white; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">Nexivo</h1>
            <p style="margin: 8px 0 0; color: rgba(255,255,255,0.8); font-size: 14px;">Nouvelle demande reçue</p>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #a5b4fc; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; width: 140px;">Nom / Société</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #a5b4fc; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06);"><a href="mailto:${email}" style="color: #818cf8; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #a5b4fc; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Besoin</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06);">${type || "—"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #a5b4fc; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Budget</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06);">${budget || "—"}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; background: rgba(99,102,241,0.08); border: 1px solid rgba(99,102,241,0.2); border-radius: 12px; padding: 20px;">
              <p style="margin: 0 0 8px; color: #a5b4fc; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Détails du projet</p>
              <p style="margin: 0; line-height: 1.7; color: #e2e8f0;">${description.replace(/\n/g, "<br>")}</p>
            </div>
            <div style="margin-top: 24px; text-align: center;">
              <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #6366f1, #a855f7); color: white; padding: 14px 28px; border-radius: 10px; font-weight: 700; text-decoration: none; font-size: 15px;">
                Répondre à ${name.split(" ")[0]}
              </a>
            </div>
          </div>
          <div style="padding: 20px 32px; border-top: 1px solid rgba(255,255,255,0.06); text-align: center; color: #4b5563; font-size: 12px;">
            © 2026 Nexivo — Excellence Numérique au Gabon
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
