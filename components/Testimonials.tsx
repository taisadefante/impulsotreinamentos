"use client";

import { motion } from "framer-motion";
import { Quote, Star, UserRoundCheck } from "lucide-react";
import { C } from "@/data/siteData";

const testimonials = [
  {
    name: "Mariana Souza",
    role: "Coordenadora de RH",
    company: "Empresa de Serviços",
    text: "A equipe ficou mais segura e confiante para agir em situações de emergência. O treinamento foi claro, prático e muito bem conduzido.",
  },
  {
    name: "Renata Almeida",
    role: "Gestora Administrativa",
    company: "Clínica Corporativa",
    text: "As instrutoras explicaram tudo com cuidado e leveza. Foi uma capacitação profissional, necessária e muito bem aplicada.",
  },
  {
    name: "Carlos Henrique",
    role: "Supervisor Operacional",
    company: "Área Logística",
    text: "A parte prática fez muita diferença. Os colaboradores participaram, tiraram dúvidas e entenderam a importância da prevenção.",
  },
  {
    name: "Fernanda Lima",
    role: "Diretora Escolar",
    company: "Escola Particular",
    text: "O treinamento Lei Lucas foi objetivo, humanizado e muito importante para nossa equipe escolar.",
  },
  {
    name: "Patrícia Gomes",
    role: "Analista de Pessoas",
    company: "Empresa Administrativa",
    text: "Foi uma experiência muito positiva. O conteúdo trouxe mais consciência, segurança e preparo para a equipe.",
  },
  {
    name: "Eduardo Martins",
    role: "Gerente Operacional",
    company: "Setor Industrial",
    text: "A abordagem prática aproximou o conteúdo da rotina dos colaboradores. Todos saíram mais preparados.",
  },
  {
    name: "Juliana Ferreira",
    role: "Coordenadora Pedagógica",
    company: "Instituição de Ensino",
    text: "O treinamento foi conduzido com responsabilidade, acolhimento e excelente didática. Recomendo para outras escolas.",
  },
  {
    name: "André Ribeiro",
    role: "Gestor de Segurança",
    company: "Empresa Corporativa",
    text: "A capacitação contribuiu para fortalecer nossa cultura de segurança. Foi organizada, clara e muito relevante.",
  },
  {
    name: "Camila Torres",
    role: "Business Partner",
    company: "Empresa de Tecnologia",
    text: "A Impulso trouxe uma condução segura, didática e próxima da realidade das empresas.",
  },
  {
    name: "Marcelo Azevedo",
    role: "Coordenador de Operações",
    company: "Centro de Distribuição",
    text: "O formato prático ajudou os colaboradores a entenderem como agir com rapidez, cuidado e responsabilidade.",
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
          maxWidth: 1180,
          margin: "0 auto 54px",
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            color: C.gold2,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 14,
            fontSize: 12,
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
            fontSize: "clamp(28px, 3vw, 44px)",
            lineHeight: 1.16,
            fontWeight: 700,
            maxWidth: 900,
            marginInline: "auto",
            letterSpacing: "-0.5px",
          }}
        >
          Empresas que confiam em treinamentos práticos, humanos e seguros.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
          style={{
            maxWidth: 760,
            margin: "20px auto 0",
            color: C.muted,
            fontSize: 16,
            lineHeight: 1.7,
          }}
        >
          Relatos de equipes que participaram das capacitações da Impulso
          Treinamentos e passaram a atuar com mais preparo, prevenção e
          confiança.
        </motion.p>
      </div>

      <div className="testimonialCarousel">
        <div className="testimonialTrack">
          {duplicated.map((item, index) => (
            <motion.article
              key={`${item.name}-${index}`}
              whileHover={{
                y: -8,
                scale: 1.015,
              }}
              className="testimonialCard"
            >
              <div className="testimonialGlow" />

              <Quote className="testimonialQuote" size={40} />

              <div className="testimonialStars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} color={C.gold2} fill={C.gold2} />
                ))}
              </div>

              <p className="testimonialText">“{item.text}”</p>

              <div className="testimonialPerson">
                <div className="testimonialAvatar">
                  <UserRoundCheck size={25} />
                </div>

                <div>
                  <strong>{item.name}</strong>
                  <span>
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
.testimonialCarousel {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.testimonialCarousel:hover .testimonialTrack {
  animation-play-state: paused;
}

.testimonialTrack {
  display: flex;
  gap: 22px;
  width: max-content;
  animation: testimonialScroll 48s linear infinite;
}

.testimonialCard {
  width: 400px;
  min-height: 250px;
  position: relative;
  overflow: hidden;
  padding: 27px;
  border-radius: 30px;
  background: linear-gradient(145deg, rgba(255,244,223,.10), rgba(255,255,255,.04));
  border: 1px solid rgba(255,216,120,.18);
  box-shadow: 0 22px 60px rgba(0,0,0,.23);
  flex-shrink: 0;
}

.testimonialGlow {
  position: absolute;
  top: -70px;
  right: -70px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: rgba(255,216,120,.08);
}

.testimonialQuote {
  position: absolute;
  right: 24px;
  bottom: 22px;
  opacity: .16;
  color: ${C.gold2};
}

.testimonialStars {
  display: flex;
  gap: 4px;
  margin-bottom: 16px;
}

.testimonialText {
  color: ${C.cream};
  line-height: 1.7;
  font-size: 14.8px;
  margin: 0 0 28px;
}

.testimonialPerson {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: auto;
}

.testimonialAvatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, rgba(255,216,120,.18), rgba(255,244,223,.06));
  border: 1px solid rgba(255,216,120,.26);
  color: ${C.gold2};
  flex-shrink: 0;
}

.testimonialPerson strong {
  display: block;
  color: ${C.text};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.2px;
}

.testimonialPerson span {
  display: block;
  color: ${C.muted};
  font-size: 13px;
  line-height: 1.4;
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
    font-size: 31px !important;
    letter-spacing: -0.5px !important;
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
