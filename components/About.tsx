"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, HeartPulse, ShieldCheck } from "lucide-react";
import { C } from "@/data/siteData";

export default function About() {
  return (
    <section
      id="sobre"
      style={{
        padding: "96px 7%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{styles}</style>

      <div
        style={{
          textAlign: "center",
          maxWidth: 980,
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
            fontWeight: 800,
            letterSpacing: 4,
            textTransform: "uppercase",
            margin: "0 0 14px",
            fontSize: 12,
          }}
        >
          Quem somos
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          style={{
            margin: 0,
            color: C.text,
            fontSize: "clamp(30px, 3.4vw, 48px)",
            lineHeight: 1.14,
            fontWeight: 800,
            letterSpacing: "-0.8px",
          }}
        >
          Cuidado e conhecimento para equipes mais seguras.
        </motion.h2>
      </div>

      <div className="aboutPremiumGrid">
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="aboutCardLight"
        >
          <div className="aboutCircleLight" />

          <div className="aboutBadges">
            <Badge icon={<HeartPulse size={16} />} text="Cuidado" />
            <Badge icon={<ShieldCheck size={16} />} text="Prevenção" />
            <Badge icon={<Award size={16} />} text="Conhecimento" />
          </div>

          <p style={p}>
            A Impulso Treinamentos nasceu para tornar o conhecimento mais
            acessível, prático e aplicável no dia a dia.
          </p>

          <p style={p}>
            Unimos teoria, prática e experiências reais para preparar pessoas,
            empresas e instituições a agirem com mais segurança em situações
            importantes.
          </p>

          <div className="aboutHighlight">
            <strong>
              Mais do que ensinar, nosso propósito é preparar pessoas para
              cuidar, prevenir e agir com confiança.
            </strong>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="aboutCardDark"
        >
          <div className="aboutCircleDark" />

          <div
            style={{
              textAlign: "center",
              marginBottom: 30,
            }}
          >
            <p
              style={{
                color: C.gold2,
                fontWeight: 800,
                letterSpacing: 3.5,
                textTransform: "uppercase",
                fontSize: 11,
                margin: "0 0 10px",
              }}
            >
              Responsáveis técnicas
            </p>

            <h3
              style={{
                margin: 0,
                color: C.text,
                fontSize: "clamp(25px, 2.5vw, 34px)",
                lineHeight: 1.15,
                fontWeight: 800,
                letterSpacing: "-0.5px",
              }}
            >
              Especialistas preparadas para orientar sua equipe.
            </h3>
          </div>

          <div className="peoplePremiumGrid">
            <Person
              name="Annik Leite"
              role="Enfermeira Responsável Técnica"
              coren="COREN RJ: 361.734"
              img="/images/aniki.png"
            />

            <Person
              name="Juliana Amorim"
              role="Enfermeira Responsável Técnica"
              coren="COREN RJ: 681.007"
              img="/images/juliana.png"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        padding: "9px 13px",
        borderRadius: 999,
        background: "rgba(91,7,7,.08)",
        color: C.wine,
        fontWeight: 800,
        fontSize: 12,
      }}
    >
      {icon}
      {text}
    </span>
  );
}

function Person({
  name,
  role,
  coren,
  img,
}: {
  name: string;
  role: string;
  coren: string;
  img: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="personCard"
    >
      <div className="personGlow" />

      <div className="personImageWrap">
        <Image
          src={img}
          alt={name}
          width={156}
          height={156}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <strong className="personName">{name}</strong>

      <span className="personRole">{role}</span>

      <span className="personCoren">{coren}</span>
    </motion.div>
  );
}

const p = {
  fontSize: 16.5,
  lineHeight: 1.8,
  color: "#4a1616",
  margin: "0 0 16px",
};

const styles = `
.aboutPremiumGrid {
  display: grid;
  grid-template-columns: .95fr 1.05fr;
  gap: 28px;
  align-items: stretch;
}

.aboutCardLight {
  position: relative;
  padding: 36px;
  border-radius: 34px;
  background: linear-gradient(145deg, rgba(255,244,223,.98), rgba(244,226,191,.95));
  color: ${C.dark};
  box-shadow: 0 28px 80px rgba(0,0,0,.22);
  overflow: hidden;
}

.aboutCircleLight {
  position: absolute;
  top: -80px;
  right: -80px;
  width: 190px;
  height: 190px;
  border-radius: 50%;
  background: rgba(91,7,7,.08);
}

.aboutBadges {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 26px;
}

.aboutHighlight {
  margin-top: 26px;
  padding: 20px;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(91,7,7,.09), rgba(217,164,65,.14));
  border: 1px solid rgba(91,7,7,.10);
}

.aboutHighlight strong {
  display: block;
  color: ${C.wine};
  font-size: 18px;
  line-height: 1.45;
  font-weight: 800;
}

.aboutCardDark {
  position: relative;
  padding: 32px;
  border-radius: 34px;
  background: linear-gradient(145deg, rgba(255,244,223,.10), rgba(255,255,255,.04));
  border: 1px solid rgba(255,216,120,.22);
  box-shadow: 0 28px 80px rgba(0,0,0,.22);
  overflow: hidden;
}

.aboutCircleDark {
  position: absolute;
  inset: auto -120px -120px auto;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: rgba(255,216,120,.08);
  pointer-events: none;
}

.peoplePremiumGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
}

.personCard {
  position: relative;
  padding: 26px 20px;
  border-radius: 28px;
  background: linear-gradient(145deg, rgba(255,244,223,.10), rgba(255,255,255,.045));
  border: 1px solid rgba(255,216,120,.20);
  text-align: center;
  overflow: hidden;
}

.personGlow {
  position: absolute;
  top: -45px;
  right: -45px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: rgba(255,216,120,.08);
}

.personImageWrap {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 18px;
  background: ${C.cream};
  border: 4px solid ${C.gold};
  box-shadow: 0 20px 50px rgba(0,0,0,.30);
  position: relative;
  z-index: 2;
}

.personName {
  display: block;
  color: ${C.text};
  font-size: 20px;
  margin-bottom: 6px;
  position: relative;
  z-index: 2;
}

.personRole {
  display: block;
  color: ${C.muted};
  font-size: 14px;
  margin-bottom: 12px;
  position: relative;
  z-index: 2;
}

.personCoren {
  display: inline-flex;
  padding: 9px 13px;
  border-radius: 999px;
  background: rgba(255,216,120,.14);
  color: ${C.gold2};
  font-weight: 800;
  font-size: 13px;
  position: relative;
  z-index: 2;
}

@media (max-width: 1050px) {
  .aboutPremiumGrid {
    grid-template-columns: 1fr !important;
  }
}

@media (max-width: 700px) {
  .peoplePremiumGrid {
    grid-template-columns: 1fr !important;
  }
}

@media (max-width: 520px) {
  #sobre {
    padding: 72px 5% !important;
  }

  .aboutCardLight,
  .aboutCardDark {
    padding: 26px 20px;
    border-radius: 28px;
  }

  .aboutBadges {
    gap: 8px;
  }

  .personImageWrap {
    width: 138px;
    height: 138px;
  }
}
`;
