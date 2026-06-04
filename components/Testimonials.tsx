"use client";

import { motion } from "framer-motion";
import { Quote, Star, UserRoundCheck } from "lucide-react";
import { C } from "@/data/siteData";

const testimonials = [
  {
    name: "Mariana Souza",
    role: "Coordenadora de RH",
    company: "Empresa de Serviços",
    text: "O treinamento foi muito além da teoria. A equipe saiu mais confiante, sabendo como agir em situações de emergência.",
  },
  {
    name: "Renata Almeida",
    role: "Gestora Administrativa",
    company: "Clínica Corporativa",
    text: "As instrutoras conduziram tudo com muita clareza, prática e cuidado. Foi um treinamento leve, profissional e extremamente necessário.",
  },
  {
    name: "Carlos Henrique",
    role: "Supervisor Operacional",
    company: "Área Logística",
    text: "A dinâmica prática fez toda diferença. Nossa equipe entendeu a importância da prevenção e do atendimento correto.",
  },
  {
    name: "Fernanda Lima",
    role: "Diretora Escolar",
    company: "Escola Particular",
    text: "Contratamos o treinamento Lei Lucas e ficamos muito satisfeitos. Conteúdo objetivo, humanizado e bem aplicado.",
  },
  {
    name: "Patrícia Gomes",
    role: "Analista de Pessoas",
    company: "Empresa Administrativa",
    text: "Foi uma experiência muito positiva. O conteúdo trouxe segurança para a equipe e despertou mais consciência sobre prevenção.",
  },
  {
    name: "Eduardo Martins",
    role: "Gerente Operacional",
    company: "Setor Industrial",
    text: "A abordagem prática ajudou muito. Os colaboradores participaram bastante e saíram com mais preparo para agir corretamente.",
  },
  {
    name: "Juliana Ferreira",
    role: "Coordenadora Pedagógica",
    company: "Instituição de Ensino",
    text: "O treinamento foi conduzido com profissionalismo, acolhimento e muita responsabilidade. Recomendo para outras escolas.",
  },
  {
    name: "André Ribeiro",
    role: "Gestor de Segurança",
    company: "Empresa Corporativa",
    text: "A capacitação agregou valor para nossa cultura interna. Foi clara, organizada e com exemplos reais do ambiente de trabalho.",
  },
  {
    name: "Camila Torres",
    role: "Business Partner",
    company: "Empresa de Tecnologia",
    text: "A equipe da Impulso trouxe uma condução segura, didática e muito próxima da realidade das empresas. Foi excelente.",
  },
  {
    name: "Marcelo Azevedo",
    role: "Coordenador de Operações",
    company: "Centro de Distribuição",
    text: "O formato prático ajudou nossos colaboradores a entenderem como agir com rapidez, cuidado e responsabilidade.",
  },
];

const duplicated = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      style={{
        padding: "88px 0",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, rgba(255,244,223,.03), rgba(80,0,0,.18))",
      }}
    >
      <style>{styles}</style>

      <div
        style={{
          padding: "0 7%",
          textAlign: "center",
          maxWidth: 1350,
          margin: "0 auto 56px",
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            color: C.gold2,
            fontWeight: 900,
            letterSpacing: 5,
            textTransform: "uppercase",
            marginBottom: 16,
            fontSize: 13,
          }}
        >
          Depoimentos
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{
            margin: 0,
            color: C.text,
            fontSize: "clamp(32px, 3vw, 54px)",
            lineHeight: 1.12,
            fontWeight: 900,
            maxWidth: 1150,
            marginInline: "auto",
            letterSpacing: "-1px",
          }}
        >
          Treinamentos que transformam equipes, fortalecem empresas e salvam
          vidas.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
          style={{
            maxWidth: 850,
            margin: "22px auto 0",
            color: C.muted,
            fontSize: 17,
            lineHeight: 1.75,
          }}
        >
          Experiências reais de empresas que confiaram na Impulso Treinamentos
          para desenvolver equipes mais preparadas, seguras e confiantes.
        </motion.p>
      </div>

      <div
        className="testimonialCarousel"
        style={{
          width: "100%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          className="testimonialTrack"
          style={{
            display: "flex",
            gap: 22,
            width: "max-content",
            animation: "testimonialScroll 46s linear infinite",
          }}
        >
          {duplicated.map((item, index) => (
            <motion.article
              key={`${item.name}-${index}`}
              whileHover={{
                y: -8,
                scale: 1.015,
              }}
              style={{
                width: 430,
                minHeight: 280,
                position: "relative",
                overflow: "hidden",
                padding: 30,
                borderRadius: 32,
                background:
                  "linear-gradient(145deg, rgba(255,244,223,.11), rgba(255,255,255,.045))",
                border: "1px solid rgba(255,216,120,.20)",
                boxShadow: "0 24px 70px rgba(0,0,0,.25)",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -70,
                  right: -70,
                  width: 155,
                  height: 155,
                  borderRadius: "50%",
                  background: "rgba(255,216,120,.09)",
                }}
              />

              <Quote
                size={44}
                color={C.gold2}
                style={{
                  position: "absolute",
                  right: 24,
                  bottom: 22,
                  opacity: 0.22,
                }}
              />

              <div
                style={{
                  display: "flex",
                  gap: 4,
                  marginBottom: 18,
                }}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} color={C.gold2} fill={C.gold2} />
                ))}
              </div>

              <p
                style={{
                  color: C.cream,
                  lineHeight: 1.75,
                  fontSize: 15,
                  margin: "0 0 30px",
                }}
              >
                “{item.text}”
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginTop: "auto",
                }}
              >
                <div
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    background:
                      "linear-gradient(135deg, rgba(255,216,120,.18), rgba(255,244,223,.06))",
                    border: "1px solid rgba(255,216,120,.28)",
                    color: C.gold2,
                    flexShrink: 0,
                  }}
                >
                  <UserRoundCheck size={27} />
                </div>

                <div>
                  <strong
                    style={{
                      display: "block",
                      color: C.text,
                      fontSize: 16,
                    }}
                  >
                    {item.name}
                  </strong>

                  <span
                    style={{
                      display: "block",
                      color: C.muted,
                      fontSize: 13,
                      lineHeight: 1.4,
                    }}
                  >
                    {item.role} • {item.company}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = `
.testimonialCarousel:hover .testimonialTrack {
  animation-play-state: paused;
}

@keyframes testimonialScroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

@media (max-width: 900px) {
  .testimonialTrack article {
    width: 350px !important;
  }
}

@media (max-width: 650px) {
  #depoimentos h2 {
    font-size: 34px !important;
    letter-spacing: -1px !important;
  }

  #depoimentos p {
    font-size: 16px !important;
  }
}

@media (max-width: 520px) {
  #depoimentos {
    padding: 72px 0 !important;
  }

  .testimonialTrack {
    gap: 16px !important;
  }

  .testimonialTrack article {
    width: 300px !important;
    padding: 22px !important;
  }
}
`;
