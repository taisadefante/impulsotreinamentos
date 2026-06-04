"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { C, whatsappLink } from "@/data/siteData";

const questions = [
  {
    question: "Os treinamentos são realizados presencialmente?",
    answer:
      "Sim. Os treinamentos da Impulso Treinamentos são presenciais, práticos e conduzidos de forma dinâmica, com foco em situações reais do ambiente corporativo, escolar ou operacional.",
  },
  {
    question: "A empresa recebe certificado?",
    answer:
      "Sim. Os participantes recebem certificado de participação, e a empresa pode utilizar a capacitação como registro interno de treinamento e fortalecimento da cultura de prevenção.",
  },
  {
    question: "O conteúdo pode ser adaptado para a necessidade da empresa?",
    answer:
      "Sim. A proposta pode ser personalizada conforme o perfil da equipe, número de participantes, segmento da empresa e principais riscos ou necessidades do ambiente.",
  },
  {
    question: "Vocês realizam treinamento da Lei Lucas?",
    answer:
      "Sim. A Impulso Treinamentos oferece capacitação voltada para escolas e espaços infantis, com conteúdo sobre primeiros socorros, engasgo, RCP pediátrica, quedas, convulsão e acionamento correto do socorro.",
  },
  {
    question: "Qual a duração dos treinamentos?",
    answer:
      "A duração depende do plano escolhido. Existem formatos de palestra, prática rápida, treinamentos de 1 dia e experiências mais completas com imersão de 2 dias.",
  },
  {
    question: "O treinamento é indicado apenas para profissionais da saúde?",
    answer:
      "Não. Os treinamentos são pensados para colaboradores, equipes administrativas, operacionais, escolas, empresas e instituições que desejam estar preparadas para agir com segurança.",
  },
  {
    question: "Como solicitar uma proposta?",
    answer:
      "Você pode preencher o formulário de contato no site ou chamar diretamente pelo WhatsApp. A equipe da Impulso irá entender sua necessidade e montar uma proposta personalizada.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="perguntas"
      style={{
        padding: "96px 7%",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, rgba(255,244,223,.02), rgba(255,216,120,.035))",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "rgba(255,216,120,.07)",
          filter: "blur(80px)",
          right: -160,
          top: 80,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: ".85fr 1.15fr",
          gap: 44,
          alignItems: "start",
          position: "relative",
          zIndex: 2,
        }}
        className="faqGrid"
      >
        <motion.div
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "sticky",
            top: 110,
          }}
          className="faqIntro"
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 24,
              display: "grid",
              placeItems: "center",
              color: C.gold2,
              background:
                "linear-gradient(135deg, rgba(255,216,120,.18), rgba(255,244,223,.06))",
              border: "1px solid rgba(255,216,120,.22)",
              marginBottom: 24,
            }}
          >
            <HelpCircle size={34} />
          </div>

          <p
            style={{
              color: C.gold2,
              fontWeight: 900,
              letterSpacing: 4,
              textTransform: "uppercase",
              margin: "0 0 14px",
              fontSize: 13,
            }}
          >
            Perguntas frequentes
          </p>

          <h2
            style={{
              margin: 0,
              color: C.text,
              fontSize: "clamp(34px, 4vw, 58px)",
              lineHeight: 1.05,
              letterSpacing: "-1px",
            }}
          >
            Tire suas dúvidas antes de solicitar sua proposta.
          </h2>

          <p
            style={{
              color: C.muted,
              fontSize: 17,
              lineHeight: 1.8,
              margin: "22px 0 30px",
              maxWidth: 520,
            }}
          >
            Reunimos as principais informações sobre formatos, certificados,
            personalização e contratação dos treinamentos.
          </p>

          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "15px 22px",
              borderRadius: 999,
              background:
                "linear-gradient(135deg, " + C.gold + ", " + C.gold2 + ")",
              color: C.dark,
              textDecoration: "none",
              fontWeight: 900,
              boxShadow: "0 18px 45px rgba(255,216,120,.20)",
            }}
          >
            <WhatsappOfficialIcon />
            Falar no WhatsApp
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "grid",
            gap: 14,
          }}
        >
          {questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  overflow: "hidden",
                  borderRadius: 26,
                  background: isOpen
                    ? "linear-gradient(145deg, rgba(255,244,223,.13), rgba(255,255,255,.045))"
                    : "linear-gradient(145deg, rgba(255,244,223,.08), rgba(255,255,255,.03))",
                  border: isOpen
                    ? "1px solid rgba(255,216,120,.35)"
                    : "1px solid rgba(255,216,120,.16)",
                  boxShadow: isOpen
                    ? "0 24px 80px rgba(0,0,0,.28)"
                    : "0 16px 45px rgba(0,0,0,.16)",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  style={{
                    width: "100%",
                    border: 0,
                    cursor: "pointer",
                    background: "transparent",
                    color: C.text,
                    padding: "22px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 18,
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontSize: 18,
                      fontWeight: 900,
                      lineHeight: 1.35,
                    }}
                  >
                    {item.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      display: "grid",
                      placeItems: "center",
                      flexShrink: 0,
                      color: C.gold2,
                      background: "rgba(255,216,120,.12)",
                      border: "1px solid rgba(255,216,120,.20)",
                    }}
                  >
                    <ChevronDown size={22} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: "easeInOut" }}
                      style={{
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          padding: "0 24px 24px",
                          color: C.muted,
                          fontSize: 16,
                          lineHeight: 1.8,
                        }}
                      >
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 950px) {
          .faqGrid {
            grid-template-columns: 1fr !important;
          }

          .faqIntro {
            position: relative !important;
            top: auto !important;
            text-align: center;
          }

          .faqIntro > div {
            margin-left: auto !important;
            margin-right: auto !important;
          }

          .faqIntro p,
          .faqIntro h2 {
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }

        @media (max-width: 520px) {
          #perguntas {
            padding: 72px 5% !important;
          }

          #perguntas button {
            padding: 18px 18px !important;
          }

          #perguntas button span:first-child {
            font-size: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}

function WhatsappOfficialIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.04 3C8.86 3 3.02 8.83 3.02 16c0 2.29.6 4.53 1.74 6.5L3 29l6.67-1.72A12.95 12.95 0 0 0 16.04 29c7.17 0 13-5.83 13-13S23.21 3 16.04 3Zm0 23.8c-2.05 0-4.05-.55-5.79-1.59l-.41-.24-3.96 1.02 1.06-3.85-.27-.43A10.72 10.72 0 0 1 5.24 16c0-5.95 4.84-10.8 10.8-10.8 5.95 0 10.79 4.85 10.79 10.8 0 5.96-4.84 10.8-10.79 10.8Zm5.92-8.09c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.5-.16-.72.16-.21.32-.83 1.05-1.02 1.26-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.15-.15.32-.38.49-.56.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.52-.54-.72-.55h-.62c-.21 0-.56.08-.86.4-.29.32-1.13 1.1-1.13 2.69s1.16 3.13 1.32 3.35c.16.21 2.29 3.5 5.55 4.9.78.34 1.38.54 1.85.69.78.25 1.49.21 2.05.13.63-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}
