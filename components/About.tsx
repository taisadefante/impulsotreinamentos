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
          maxWidth: 1120,
          margin: "0 auto 62px",
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
            fontSize: "clamp(34px, 4vw, 60px)",
            lineHeight: 1.06,
            fontWeight: 900,
            letterSpacing: "-1px",
          }}
        >
          Cuidado, prevenção e conhecimento para transformar ambientes.
        </motion.h2>
      </div>

      <div className="aboutPremiumGrid">
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "relative",
            padding: 38,
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
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              marginBottom: 28,
            }}
          >
            <Badge icon={<HeartPulse size={18} />} text="Cuidado" />
            <Badge icon={<ShieldCheck size={18} />} text="Prevenção" />
            <Badge icon={<Award size={18} />} text="Conhecimento" />
          </div>

          <p style={p}>
            A Impulso Treinamentos nasceu com o propósito de transformar
            conhecimento em ação, promovendo treinamentos que unem teoria,
            prática e experiências reais.
          </p>

          <p style={p}>
            Somos uma equipe comprometida com educação, prevenção e
            desenvolvimento de pessoas preparadas para agir com segurança e
            confiança diante de situações do cotidiano e emergências.
          </p>

          <div
            style={{
              marginTop: 28,
              padding: 22,
              borderRadius: 26,
              background:
                "linear-gradient(135deg, rgba(91,7,7,.10), rgba(217,164,65,.16))",
              border: "1px solid rgba(91,7,7,.10)",
            }}
          >
            <strong
              style={{
                display: "block",
                color: C.wine,
                fontSize: 21,
                lineHeight: 1.35,
              }}
            >
              Capacitar pessoas é gerar impacto, promover segurança e salvar
              vidas.
            </strong>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "relative",
            padding: 34,
            borderRadius: 36,
            background:
              "linear-gradient(145deg, rgba(255,244,223,.10), rgba(255,255,255,.04))",
            border: "1px solid rgba(255,216,120,.22)",
            boxShadow: "0 30px 90px rgba(0,0,0,.22)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "auto -120px -120px auto",
              width: 260,
              height: 260,
              borderRadius: "50%",
              background: "rgba(255,216,120,.08)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              textAlign: "center",
              marginBottom: 30,
            }}
          >
            <p
              style={{
                color: C.gold2,
                fontWeight: 900,
                letterSpacing: 4,
                textTransform: "uppercase",
                fontSize: 12,
                margin: "0 0 10px",
              }}
            >
              Responsáveis técnicas
            </p>

            <h3
              style={{
                margin: 0,
                color: C.text,
                fontSize: "clamp(28px, 3vw, 42px)",
                lineHeight: 1.05,
              }}
            >
              Profissionais preparadas para cuidar da sua equipe.
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
        gap: 8,
        padding: "10px 14px",
        borderRadius: 999,
        background: "rgba(91,7,7,.08)",
        color: C.wine,
        fontWeight: 900,
        fontSize: 13,
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
      style={{
        position: "relative",
        padding: "28px 22px",
        borderRadius: 30,
        background:
          "linear-gradient(145deg, rgba(255,244,223,.10), rgba(255,255,255,.045))",
        border: "1px solid rgba(255,216,120,.20)",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -45,
          right: -45,
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "rgba(255,216,120,.08)",
        }}
      />

      <div
        style={{
          width: 168,
          height: 168,
          borderRadius: "50%",
          overflow: "hidden",
          margin: "0 auto 20px",
          background: C.cream,
          border: `4px solid ${C.gold}`,
          boxShadow: "0 22px 55px rgba(0,0,0,.32)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Image
          src={img}
          alt={name}
          width={168}
          height={168}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <strong
        style={{
          display: "block",
          color: C.text,
          fontSize: 22,
          marginBottom: 6,
          position: "relative",
          zIndex: 2,
        }}
      >
        {name}
      </strong>

      <span
        style={{
          display: "block",
          color: C.muted,
          fontSize: 14,
          marginBottom: 12,
          position: "relative",
          zIndex: 2,
        }}
      >
        {role}
      </span>

      <span
        style={{
          display: "inline-flex",
          padding: "9px 13px",
          borderRadius: 999,
          background: "rgba(255,216,120,.14)",
          color: C.gold2,
          fontWeight: 900,
          fontSize: 13,
          position: "relative",
          zIndex: 2,
        }}
      >
        {coren}
      </span>
    </motion.div>
  );
}

const p = {
  fontSize: 18,
  lineHeight: 1.8,
  color: "#4a1616",
  margin: "0 0 18px",
};

const styles = `
.aboutPremiumGrid {
  display: grid;
  grid-template-columns: .95fr 1.05fr;
  gap: 28px;
  align-items: stretch;
}

.peoplePremiumGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
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
}
`;
