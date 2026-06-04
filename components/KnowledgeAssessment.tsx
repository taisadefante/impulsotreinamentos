"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  GraduationCap,
  TrendingUp,
} from "lucide-react";
import { C } from "@/data/siteData";

const steps = [
  {
    icon: <ClipboardCheck size={30} />,
    title: "Pré-prova",
    text: "Identifica o nível inicial de conhecimento da equipe antes do treinamento.",
  },
  {
    icon: <GraduationCap size={30} />,
    title: "Treinamento",
    text: "A capacitação é conduzida de forma mais assertiva, prática e direcionada.",
  },
  {
    icon: <FileCheck2 size={30} />,
    title: "Pós-prova",
    text: "Mensura a assimilação dos conteúdos e evidencia a evolução dos participantes.",
  },
];

const benefits = [
  "Avalia a evolução do conhecimento",
  "Gera indicadores de desempenho",
  "Comprova a eficácia da capacitação",
  "Fortalece a formação contínua",
];

export default function KnowledgeAssessment() {
  return (
    <section
      id="avaliacao-conhecimento"
      style={{
        padding: "96px 7%",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, rgba(255,244,223,.025), rgba(255,216,120,.045))",
      }}
    >
      <style>{styles}</style>

      <div
        style={{
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "rgba(255,216,120,.08)",
          filter: "blur(80px)",
          left: -160,
          top: 80,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          textAlign: "center",
          maxWidth: 1080,
          margin: "0 auto 60px",
          position: "relative",
          zIndex: 2,
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
            margin: "0 0 16px",
            fontSize: 13,
          }}
        >
          Avaliação de conhecimento
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          style={{
            margin: 0,
            color: C.text,
            fontSize: "clamp(34px, 4vw, 60px)",
            lineHeight: 1.06,
            fontWeight: 900,
            letterSpacing: "-1px",
          }}
        >
          Pré e pós-prova em todos os nossos planos.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.12 }}
          style={{
            maxWidth: 900,
            margin: "24px auto 0",
            color: C.muted,
            fontSize: 18,
            lineHeight: 1.8,
          }}
        >
          Na Impulso Treinamentos, capacitar vai além de transmitir informações.
          Por isso, todos os planos incluem pré e pós-prova para avaliar a
          evolução do conhecimento dos participantes antes e após o treinamento.
        </motion.p>
      </div>

      <div className="assessmentGrid">
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "relative",
            padding: 34,
            borderRadius: 36,
            background:
              "linear-gradient(145deg, rgba(255,244,223,.98), rgba(244,226,191,.95))",
            color: C.dark,
            boxShadow: "0 30px 90px rgba(0,0,0,.25)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -80,
              right: -80,
              width: 190,
              height: 190,
              borderRadius: "50%",
              background: "rgba(91,7,7,.08)",
            }}
          />

          <div
            style={{
              width: 74,
              height: 74,
              borderRadius: 24,
              display: "grid",
              placeItems: "center",
              color: C.wine,
              background:
                "linear-gradient(135deg, rgba(91,7,7,.12), rgba(217,164,65,.18))",
              border: "1px solid rgba(91,7,7,.12)",
              marginBottom: 24,
              position: "relative",
              zIndex: 2,
            }}
          >
            <BarChart3 size={34} />
          </div>

          <h3
            style={{
              margin: "0 0 18px",
              color: C.wine,
              fontSize: "clamp(26px, 3vw, 38px)",
              lineHeight: 1.08,
              position: "relative",
              zIndex: 2,
            }}
          >
            Metodologia que gera dados, evolução e mais qualidade.
          </h3>

          <p style={p}>
            A pré-prova identifica o nível inicial de conhecimento da equipe,
            auxiliando na condução do treinamento de forma mais assertiva.
          </p>

          <p style={p}>
            Já a pós-prova permite mensurar a assimilação dos conteúdos
            apresentados, evidenciando o aprendizado adquirido e a eficácia da
            capacitação.
          </p>

          <strong
            style={{
              display: "block",
              marginTop: 22,
              color: C.wine,
              fontSize: 18,
              lineHeight: 1.45,
              position: "relative",
              zIndex: 2,
            }}
          >
            Mais do que ensinar, a Impulso entrega indicadores que reforçam o
            compromisso da empresa com a formação contínua dos colaboradores.
          </strong>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "grid",
            gap: 18,
          }}
        >
          <div className="stepsGrid">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -7,
                  scale: 1.015,
                }}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  padding: 24,
                  borderRadius: 30,
                  background:
                    "linear-gradient(145deg, rgba(255,244,223,.11), rgba(255,255,255,.045))",
                  border: "1px solid rgba(255,216,120,.20)",
                  boxShadow: "0 24px 70px rgba(0,0,0,.20)",
                }}
              >
                <div
                  style={{
                    width: 58,
                    height: 58,
                    borderRadius: 20,
                    display: "grid",
                    placeItems: "center",
                    color: C.gold2,
                    background: "rgba(255,216,120,.12)",
                    border: "1px solid rgba(255,216,120,.20)",
                    marginBottom: 16,
                  }}
                >
                  {step.icon}
                </div>

                <h4
                  style={{
                    margin: "0 0 8px",
                    color: C.text,
                    fontSize: 22,
                  }}
                >
                  {step.title}
                </h4>

                <p
                  style={{
                    margin: 0,
                    color: C.muted,
                    lineHeight: 1.65,
                    fontSize: 15,
                  }}
                >
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div
            style={{
              padding: 26,
              borderRadius: 32,
              background:
                "linear-gradient(145deg, rgba(255,244,223,.10), rgba(255,255,255,.04))",
              border: "1px solid rgba(255,216,120,.18)",
              boxShadow: "0 24px 70px rgba(0,0,0,.18)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 18,
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 18,
                  display: "grid",
                  placeItems: "center",
                  color: C.gold2,
                  background: "rgba(255,216,120,.12)",
                }}
              >
                <TrendingUp size={26} />
              </div>

              <strong
                style={{
                  color: C.text,
                  fontSize: 22,
                  lineHeight: 1.2,
                }}
              >
                O que essa avaliação entrega?
              </strong>
            </div>

            <div className="assessmentBenefits">
              {benefits.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    color: C.cream,
                    fontWeight: 800,
                    lineHeight: 1.45,
                  }}
                >
                  <CheckCircle2 size={18} color={C.gold2} />
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const p = {
  position: "relative",
  zIndex: 2,
  fontSize: 17,
  lineHeight: 1.8,
  color: "#4a1616",
  margin: "0 0 18px",
};

const styles = `
.assessmentGrid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: .95fr 1.05fr;
  gap: 28px;
  align-items: stretch;
}

.stepsGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.assessmentBenefits {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

@media (max-width: 1150px) {
  .assessmentGrid {
    grid-template-columns: 1fr !important;
  }
}

@media (max-width: 850px) {
  .stepsGrid,
  .assessmentBenefits {
    grid-template-columns: 1fr !important;
  }
}

@media (max-width: 520px) {
  #avaliacao-conhecimento {
    padding: 72px 5% !important;
  }
}
`;
