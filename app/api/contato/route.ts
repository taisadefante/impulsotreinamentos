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

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;
    if (!body.nome || !body.telefone) {
      return NextResponse.json({ error: "Nome e telefone são obrigatórios." }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO || "informacoes@impulsotreinamentos.com.br";

    if (!host || !user || !pass) {
      console.log("Novo contato recebido:", body);
      return NextResponse.json({ ok: true, mode: "log" });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `Site Impulso Treinamentos <${user}>`,
      to,
      subject: `Nova solicitação de orçamento - ${body.nome}`,
      html: `
        <div style="font-family:Arial,sans-serif;background:#fff4df;padding:24px;color:#260000">
          <h2 style="color:#5b0707">Nova solicitação pelo site</h2>
          <p><strong>Nome:</strong> ${body.nome || "-"}</p>
          <p><strong>Empresa:</strong> ${body.empresa || "-"}</p>
          <p><strong>Telefone:</strong> ${body.telefone || "-"}</p>
          <p><strong>E-mail:</strong> ${body.email || "-"}</p>
          <p><strong>Treinamento:</strong> ${body.treinamento || "-"}</p>
          <p><strong>Participantes:</strong> ${body.participantes || "-"}</p>
          <p><strong>Mensagem:</strong><br/>${body.mensagem || "-"}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao enviar contato." }, { status: 500 });
  }
}
