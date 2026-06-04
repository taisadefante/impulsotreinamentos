import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  nome?: string;
  empresa?: string;
  telefone?: string;
  email?: string;
  treinamento?: string;
  participantes?: string;
  mensagem?: string;
};

function safe(value?: string) {
  return String(value || "-")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;

    if (!body.nome || !body.telefone) {
      return NextResponse.json(
        { error: "Nome e telefone são obrigatórios." },
        { status: 400 },
      );
    }

    const host = process.env.SMTP_HOST || "smtp.kinghost.net";
    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to =
      process.env.CONTACT_TO || "informacoes@impulsotreinamentos.com.br";

    if (!user || !pass) {
      console.log("Novo contato recebido:", body);
      return NextResponse.json({ ok: true, mode: "log" });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: `"Site Impulso Treinamentos" <${user}>`,
      replyTo: body.email || user,
      to,
      subject: `Nova solicitação de orçamento - ${safe(body.nome)}`,
      html: `
        <div style="font-family:Arial,sans-serif;background:#fff4df;padding:28px;color:#260000">
          <div style="max-width:680px;margin:0 auto;background:#ffffff;border-radius:18px;padding:28px;border:1px solid #e4c989">
            <h2 style="color:#5b0707;margin:0 0 18px">
              Nova solicitação pelo site
            </h2>

            <p><strong>Nome:</strong> ${safe(body.nome)}</p>
            <p><strong>Empresa:</strong> ${safe(body.empresa)}</p>
            <p><strong>Telefone:</strong> ${safe(body.telefone)}</p>
            <p><strong>E-mail:</strong> ${safe(body.email)}</p>
            <p><strong>Treinamento:</strong> ${safe(body.treinamento)}</p>
            <p><strong>Participantes:</strong> ${safe(body.participantes)}</p>

            <div style="margin-top:20px;padding:18px;border-radius:14px;background:#fff4df">
              <strong>Mensagem:</strong>
              <p style="white-space:pre-line;line-height:1.6;margin-bottom:0">
                ${safe(body.mensagem)}
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Erro ao enviar contato:", error);

    return NextResponse.json(
      { error: "Erro ao enviar contato." },
      { status: 500 },
    );
  }
}
