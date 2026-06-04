"use client";

import { ReactNode } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { C, whatsappLink, instagramLink } from "@/data/siteData";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  return (
    <section
      id="contato"
      style={{
        padding: "96px 7%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <style>{contactAnimations}</style>

      <div
        style={{
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "rgba(255,216,120,.08)",
          filter: "blur(80px)",
          right: -160,
          top: 80,
          pointerEvents: "none",
        }}
      />

      <SectionHeader
        tag="Contato"
        title="Fale com a Impulso Treinamentos."
        centered
      />

      <motion.p
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: 820,
          margin: "-28px auto 48px",
          textAlign: "center",
          color: C.muted,
          fontSize: 18,
          lineHeight: 1.8,
        }}
      >
        Escolha o melhor canal de atendimento e fale com a nossa equipe para
        solicitar uma proposta personalizada para sua empresa, escola ou equipe.
      </motion.p>

      <div className="contactCardsGrid">
        <ContactCard
          icon={<WhatsappOfficialIcon />}
          title="WhatsApp"
          text="21 97479-6718"
          description="Atendimento rápido para tirar dúvidas e solicitar orçamento."
          href={whatsappLink}
          delay={0}
        />

        <ContactCard
          icon={<InstagramOfficialIcon />}
          title="Instagram"
          text="@contato.impulsotreinamentos"
          description="Acompanhe conteúdos, novidades, treinamentos e bastidores."
          href={instagramLink}
          delay={0.1}
        />

        <ContactCard
          icon={<Mail size={31} />}
          title="E-mail"
          text="informacoes@impulsotreinamentos.com.br"
          description="Envie sua solicitação formal para propostas e parcerias."
          href="mailto:informacoes@impulsotreinamentos.com.br"
          delay={0.2}
        />
      </div>

      <motion.div
        className="conversionText"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, delay: 0.25 }}
      >
        <span>Desenvolvemos pessoas. Potencializamos resultados.</span>

        <h3>
          Transforme sua equipe em um time mais preparado, produtivo e
          confiante.
        </h3>

        <p>
          Criamos treinamentos sob medida para fortalecer liderança,
          comunicação, atendimento, vendas e performance, sempre alinhados aos
          objetivos da sua empresa.
        </p>

        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04, y: -3 }}
          whileTap={{ scale: 0.97 }}
          className="conversionButton"
        >
          Solicitar proposta personalizada
          <ArrowRight size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  text,
  description,
  href,
  delay,
}: {
  icon: ReactNode;
  title: string;
  text: string;
  description: string;
  href: string;
  delay: number;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 48, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -10,
        scale: 1.018,
      }}
      whileTap={{ scale: 0.98 }}
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: 250,
        padding: 30,
        borderRadius: 34,
        background:
          "linear-gradient(145deg, rgba(255,244,223,.11), rgba(255,255,255,.045))",
        border: "1px solid rgba(255,216,120,.20)",
        color: C.cream,
        textDecoration: "none",
        boxShadow: "0 28px 90px rgba(0,0,0,.25)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -70,
          right: -70,
          width: 160,
          height: 160,
          borderRadius: "50%",
          background: "rgba(255,216,120,.09)",
        }}
      />

      <div
        style={{
          width: 68,
          height: 68,
          borderRadius: 22,
          display: "grid",
          placeItems: "center",
          color: C.gold2,
          background:
            "linear-gradient(135deg, rgba(255,216,120,.18), rgba(255,244,223,.06))",
          border: "1px solid rgba(255,216,120,.22)",
          marginBottom: 24,
          position: "relative",
          zIndex: 2,
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          position: "relative",
          zIndex: 2,
          margin: "0 0 8px",
          color: C.text,
          fontSize: 27,
          lineHeight: 1.1,
        }}
      >
        {title}
      </h3>

      <strong
        style={{
          position: "relative",
          zIndex: 2,
          display: "block",
          color: C.gold2,
          fontSize: 16,
          marginBottom: 14,
          wordBreak: "break-word",
        }}
      >
        {text}
      </strong>

      <p
        style={{
          position: "relative",
          zIndex: 2,
          color: C.muted,
          lineHeight: 1.7,
          fontSize: 15,
          margin: 0,
        }}
      >
        {description}
      </p>
    </motion.a>
  );
}

function WhatsappOfficialIcon() {
  return (
    <svg
      width="31"
      height="31"
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
      width="31"
      height="31"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5ZM12 7.1A4.9 4.9 0 1 1 7.1 12 4.9 4.9 0 0 1 12 7.1Zm0 1.8A3.1 3.1 0 1 0 15.1 12 3.1 3.1 0 0 0 12 8.9Zm5.25-2.35a1.15 1.15 0 1 1-1.15 1.15 1.15 1.15 0 0 1 1.15-1.15Z" />
    </svg>
  );
}

const contactAnimations = `
.contactCardsGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.conversionText {
  max-width: 980px;
  margin: 58px auto 0;
  text-align: center;
  position: relative;
}

.conversionText::before {
  content: "";
  display: block;
  width: 92px;
  height: 1px;
  margin: 0 auto 30px;
  background: linear-gradient(90deg, transparent, rgba(255,216,120,.85), transparent);
}

.conversionText span {
  display: inline-block;
  margin-bottom: 16px;
  color: ${C.gold2};
  font-size: 14px;
  font-weight: 900;
  letter-spacing: .18em;
  text-transform: uppercase;
}

.conversionText h3 {
  max-width: 920px;
  margin: 0 auto 18px;
  color: ${C.text};
  font-size: clamp(32px, 5vw, 58px);
  line-height: 1.02;
  letter-spacing: -0.05em;
}

.conversionText p {
  max-width: 760px;
  margin: 0 auto 30px;
  color: ${C.muted};
  font-size: 19px;
  line-height: 1.85;
}

.conversionButton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 56px;
  padding: 0 28px;
  border-radius: 999px;
  background: linear-gradient(135deg, ${C.gold2}, #fff1b8);
  color: #2a0806;
  text-decoration: none;
  font-weight: 900;
  font-size: 16px;
  box-shadow: 0 20px 55px rgba(255,216,120,.18);
}

@media (max-width: 1000px) {
  .contactCardsGrid {
    grid-template-columns: 1fr !important;
  }
}

@media (max-width: 520px) {
  #contato {
    padding: 72px 5% !important;
  }

  .conversionText {
    margin-top: 44px;
  }

  .conversionText h3 {
    font-size: 34px;
  }

  .conversionText p {
    font-size: 16px;
  }

  .conversionButton {
    width: 100%;
    padding: 0 20px;
    font-size: 15px;
  }
}
`;
