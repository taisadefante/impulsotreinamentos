"use client";

import { FormEvent, ReactNode, useState } from "react";
import type { CSSProperties } from "react";
import { Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { C, whatsappLink, instagramLink } from "@/data/siteData";
import SectionHeader from "./SectionHeader";

type SendStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<SendStatus>("idle");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formElement = e.currentTarget;
    const form = new FormData(formElement);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      formElement.reset();

      window.setTimeout(() => {
        setStatus("idle");
      }, 6000);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contato"
      style={{
        padding: "96px 7%",
        overflow: "hidden",
      }}
    >
      <style>{contactAnimations}</style>

      <SectionHeader
        tag="Contato"
        title="Solicite uma proposta personalizada."
        centered
      />

      <div
        className="contactGrid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr .9fr",
          gap: 28,
          alignItems: "stretch",
        }}
      >
        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            padding: 30,
            borderRadius: 34,
            background: "linear-gradient(145deg, #fffaf0, #f4e2bf)",
            color: C.dark,
            display: "grid",
            gap: 14,
            boxShadow: "0 30px 90px rgba(0,0,0,.25)",
          }}
        >
          <Input name="nome" placeholder="Nome" />
          <Input name="empresa" placeholder="Empresa" />
          <Input name="telefone" placeholder="Telefone/WhatsApp" />
          <Input name="email" placeholder="E-mail" type="email" />

          <select name="treinamento" required style={input}>
            <option value="">Selecione o treinamento</option>
            <option>Impulso Essencial</option>
            <option>Impulso Cuidar</option>
            <option>Impulso Experience</option>
            <option>Lei Lucas</option>
            <option>Saúde Mental</option>
            <option>Saúde da Mulher</option>
            <option>Saúde da Segurança Masculina</option>
            <option>Saúde e Segurança</option>
          </select>

          <textarea
            name="mensagem"
            placeholder="Mensagem"
            rows={5}
            style={{
              ...input,
              resize: "vertical",
              minHeight: 120,
            }}
          />

          <motion.button
            type="submit"
            disabled={status === "sending"}
            whileHover={{
              scale: status === "sending" ? 1 : 1.03,
              y: status === "sending" ? 0 : -2,
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              border: 0,
              cursor: status === "sending" ? "not-allowed" : "pointer",
              padding: "16px 20px",
              borderRadius: 999,
              background:
                "linear-gradient(135deg, " + C.gold + ", " + C.gold2 + ")",
              color: C.dark,
              fontWeight: 900,
              fontSize: 15,
              boxShadow: "0 18px 40px rgba(130, 74, 0, .22)",
              opacity: status === "sending" ? 0.7 : 1,
            }}
          >
            {status === "sending" ? "Enviando..." : "Enviar solicitação"}
          </motion.button>

          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10 }}
                style={successBox}
              >
                Solicitação enviada com sucesso! Em breve entraremos em contato.
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10 }}
                style={errorBox}
              >
                Não foi possível enviar agora. Chame pelo WhatsApp.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "grid",
            gap: 16,
          }}
        >
          <ContactCard
            icon={<WhatsappOfficialIcon />}
            title="WhatsApp"
            text="21 97479-6718"
            href={whatsappLink}
            iconColor={C.gold2}
          />

          <ContactCard
            icon={<InstagramOfficialIcon />}
            title="Instagram"
            text="@contato.impulsotreinamentos"
            href={instagramLink}
            iconColor={C.gold2}
          />

          <ContactCard
            icon={<Mail size={30} />}
            title="E-mail"
            text="informacoes@impulsotreinamentos.com.br"
            href="mailto:informacoes@impulsotreinamentos.com.br"
            iconColor={C.gold2}
          />

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{
              padding: 26,
              borderRadius: 30,
              background:
                "linear-gradient(145deg, rgba(255,244,223,.10), rgba(255,255,255,.04))",
              border: "1px solid rgba(255,216,120,.18)",
              color: C.cream,
            }}
          >
            <strong
              style={{
                display: "block",
                fontSize: 22,
                marginBottom: 10,
                color: C.text,
              }}
            >
              Atendimento personalizado
            </strong>

            <p
              style={{
                margin: 0,
                color: C.muted,
                lineHeight: 1.7,
              }}
            >
              Informe sua necessidade e montamos uma proposta sob medida para
              sua empresa, escola ou equipe.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Input({
  name,
  placeholder,
  type = "text",
}: {
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      name={name}
      placeholder={placeholder}
      type={type}
      required
      style={input}
    />
  );
}

function ContactCard({
  icon,
  title,
  text,
  href,
  iconColor,
}: {
  icon: ReactNode;
  title: string;
  text: string;
  href: string;
  iconColor: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        y: -6,
        scale: 1.015,
      }}
      whileTap={{ scale: 0.98 }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 18,
        padding: 24,
        borderRadius: 30,
        background:
          "linear-gradient(145deg, rgba(255,244,223,.10), rgba(255,255,255,.04))",
        border: "1px solid rgba(255,216,120,.18)",
        color: C.cream,
        textDecoration: "none",
        boxShadow: "0 24px 70px rgba(0,0,0,.22)",
        transition: ".25s ease",
      }}
    >
      <div
        style={{
          width: 58,
          height: 58,
          borderRadius: 18,
          display: "grid",
          placeItems: "center",
          color: iconColor,
          background: "rgba(255,216,120,.12)",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>

      <div style={{ minWidth: 0 }}>
        <strong
          style={{
            display: "block",
            color: C.text,
            fontSize: 18,
            marginBottom: 4,
          }}
        >
          {title}
        </strong>

        <span
          style={{
            color: C.muted,
            fontSize: 15,
            wordBreak: "break-word",
          }}
        >
          {text}
        </span>
      </div>
    </motion.a>
  );
}

function WhatsappOfficialIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.04 3C8.86 3 3.02 8.83 3.02 16c0 2.29.6 4.53 1.74 6.5L3 29l6.67-1.72A12.95 12.95 0 0 0 16.04 29c7.17 0 13-5.83 13-13S23.21 3 16.04 3Zm0 23.8c-2.05 0-4.05-.55-5.79-1.59l-.41-.24-3.96 1.02 1.06-3.85-.27-.43A10.72 10.72 0 0 1 5.24 16c0-5.95 4.84-10.8 10.8-10.8 5.95 0 10.79 4.85 10.79 10.8 0 5.96-4.84 10.8-10.79 10.8Zm5.92-8.09c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.5-.16-.72.16-.21.32-.83 1.05-1.02 1.26-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.15-.15.32-.38.49-.56.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.52-.54-.72-.55h-.62c-.21 0-.56.08-.86.4-.29.32-1.13 1.1-1.13 2.69s1.16 3.13 1.32 3.35c.16.21 2.29 3.5 5.55 4.9.78.34 1.38.54 1.85.69.78.25 1.49.21 2.05.13.63-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

function InstagramOfficialIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5ZM12 7.1A4.9 4.9 0 1 1 7.1 12 4.9 4.9 0 0 1 12 7.1Zm0 1.8A3.1 3.1 0 1 0 15.1 12 3.1 3.1 0 0 0 12 8.9Zm5.25-2.35a1.15 1.15 0 1 1-1.15 1.15 1.15 1.15 0 0 1 1.15-1.15Z" />
    </svg>
  );
}

const input: CSSProperties = {
  width: "100%",
  padding: "15px 16px",
  borderRadius: 16,
  border: "1px solid rgba(91,7,7,.18)",
  outline: "none",
  fontSize: 15,
  background: "#fff",
  color: "#260000",
  boxSizing: "border-box",
};

const successBox: CSSProperties = {
  padding: "14px 16px",
  borderRadius: 16,
  background: "rgba(27,128,62,.12)",
  border: "1px solid rgba(27,128,62,.25)",
  color: "#12642f",
  fontWeight: 800,
  lineHeight: 1.5,
};

const errorBox: CSSProperties = {
  padding: "14px 16px",
  borderRadius: 16,
  background: "rgba(150,0,0,.10)",
  border: "1px solid rgba(150,0,0,.25)",
  color: "#7a0000",
  fontWeight: 800,
  lineHeight: 1.5,
};

const contactAnimations = `
@media (max-width: 900px) {
  .contactGrid {
    grid-template-columns: 1fr !important;
  }
}

@media (max-width: 520px) {
  #contato {
    padding: 72px 5% !important;
  }

  .contactGrid form {
    padding: 22px !important;
    border-radius: 26px !important;
  }

  .contactGrid a {
    padding: 20px !important;
    border-radius: 24px !important;
  }

  .contactGrid a > div:first-child {
    width: 50px !important;
    height: 50px !important;
  }
}
`;
