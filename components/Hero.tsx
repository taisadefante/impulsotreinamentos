"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import {
  CalendarDays,
  ChevronRight,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { C, whatsappLink } from "@/data/siteData";
import Reveal from "./Reveal";

export default function Hero() {
  const { scrollYProgress } = useScroll();

  const yHero = useTransform(scrollYProgress, [0, 0.35], [0, -120]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.3], [1, 0.55]);

  return (
    <section
      id="inicio"
      className="heroGrid"
      style={{
        minHeight: "88vh",
        display: "grid",
        gridTemplateColumns: "1.08fr .92fr",
        gap: 46,
        alignItems: "center",
        padding: "82px 7% 96px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{styles}</style>

      <div
        style={{
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "rgba(255,216,120,.12)",
          filter: "blur(70px)",
          top: 30,
          left: -120,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "rgba(161,15,18,.24)",
          filter: "blur(90px)",
          right: -160,
          bottom: 20,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(23,0,0,.92), rgba(23,0,0,.55), rgba(23,0,0,.88))",
          pointerEvents: "none",
        }}
      />

      <motion.div
        style={{
          position: "relative",
          zIndex: 2,
          y: yHero,
          opacity: opacityHero,
        }}
      >
        <Reveal>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "10px 16px",
              borderRadius: 999,
              background: "rgba(255,244,223,.08)",
              border: "1px solid rgba(255,216,120,.3)",
              color: C.gold2,
              fontWeight: 900,
              boxShadow: "0 16px 45px rgba(0,0,0,.18)",
            }}
          >
            <Sparkles size={17} />
            Treinamentos corporativos em saúde e segurança
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1
            className="heroTitle"
            style={{
              margin: "24px 0 0",
              fontSize: "clamp(46px, 6.6vw, 88px)",
              lineHeight: 0.95,
              letterSpacing: -3,
              textTransform: "uppercase",
              color: C.text,
              maxWidth: 980,
            }}
          >
            Conhecimento que prepara.{" "}
            <span
              style={{
                color: C.gold2,
                display: "inline-block",
              }}
            >
              Atitude que salva.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            style={{
              color: C.muted,
              fontSize: 20,
              lineHeight: 1.75,
              maxWidth: 760,
              margin: "26px 0 0",
            }}
          >
            Capacitações práticas, humanizadas e atualizadas para empresas,
            escolas e equipes que desejam agir com confiança em situações reais.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="heroButtons">
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -3,
                scale: 1.03,
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "16px 24px",
                borderRadius: 999,
                background:
                  "linear-gradient(135deg, " + C.gold + ", " + C.gold2 + ")",
                color: C.dark,
                fontWeight: 900,
                textDecoration: "none",
                boxShadow: "0 18px 60px rgba(216,163,63,.30)",
              }}
            >
              <WhatsappOfficialIcon />
              Solicitar proposta
            </motion.a>

            <motion.a
              href="#treinamentos"
              whileHover={{
                y: -3,
                scale: 1.03,
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "16px 24px",
                borderRadius: 999,
                border: "1px solid rgba(255,216,120,.25)",
                color: C.cream,
                fontWeight: 900,
                textDecoration: "none",
                background: "rgba(255,244,223,.045)",
              }}
            >
              Conhecer treinamentos <ChevronRight size={18} />
            </motion.a>
          </div>
        </Reveal>

        <Reveal delay={0.38}>
          <div className="heroTrust">
            <TrustItem icon={<ShieldCheck size={18} />} text="Prevenção" />
            <TrustItem icon={<Users size={18} />} text="Equipes preparadas" />
            <TrustItem icon={<HeartPulse size={18} />} text="Cuidado real" />
          </div>
        </Reveal>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -3, y: 30 }}
        animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: 540,
          borderRadius: 42,
          padding: 34,
          background:
            "linear-gradient(145deg, rgba(255,244,223,.14), rgba(255,255,255,.045))",
          border: "1px solid rgba(255,216,120,.32)",
          boxShadow: "0 34px 120px rgba(0,0,0,.42)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          animation: "floatPulse 7s ease-in-out infinite",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 240,
            height: 240,
            borderRadius: "50%",
            background: "rgba(255,216,120,.10)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 26,
            top: 26,
            padding: "9px 13px",
            borderRadius: 999,
            background: "rgba(255,244,223,.08)",
            border: "1px solid rgba(255,216,120,.22)",
            color: C.gold2,
            fontWeight: 900,
            fontSize: 12,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          100% prático
        </div>

        <motion.div
          whileHover={{ scale: 1.04, rotate: 1 }}
          style={{
            width: 230,
            height: 230,
            borderRadius: 46,
            overflow: "hidden",
            background: C.cream,
            display: "grid",
            placeItems: "center",
            border: "2px solid " + C.gold,
            boxShadow: "0 0 95px rgba(216,163,63,.38)",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Image
            src="/logo.png"
            alt="Logo Impulso Treinamentos"
            width={230}
            height={230}
            priority
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
            }}
          />
        </motion.div>

        <h2
          style={{
            fontSize: 36,
            margin: "28px 0 8px",
            textTransform: "uppercase",
            letterSpacing: 1,
            color: C.text,
            position: "relative",
            zIndex: 2,
          }}
        >
          Impulso Treinamentos
        </h2>

        <p
          style={{
            color: C.muted,
            fontSize: 17,
            maxWidth: 430,
            lineHeight: 1.6,
            margin: 0,
            position: "relative",
            zIndex: 2,
          }}
        >
          Primeiros Socorros • Lei Lucas • Saúde Ocupacional • Bem-estar
        </p>

        <div className="heroMiniGrid">
          <Mini
            icon={<CalendarDays size={24} />}
            title="Formatos"
            text="1 ou 2 dias"
          />
          <Mini
            icon={<GraduationCap size={24} />}
            title="Inclui"
            text="Certificado"
          />
        </div>
      </motion.div>
    </section>
  );
}

function Mini({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.03 }}
      style={{
        padding: 18,
        borderRadius: 24,
        background: "rgba(255,244,223,.08)",
        border: "1px solid rgba(255,216,120,.18)",
        color: C.cream,
        textAlign: "left",
      }}
    >
      <div style={{ color: C.gold2 }}>{icon}</div>
      <strong style={{ display: "block", marginTop: 10 }}>{title}</strong>
      <span style={{ color: C.muted, fontSize: 13 }}>{text}</span>
    </motion.div>
  );
}

function TrustItem({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        color: C.muted,
        fontWeight: 800,
        fontSize: 14,
      }}
    >
      <span style={{ color: C.gold2 }}>{icon}</span>
      {text}
    </div>
  );
}

function WhatsappOfficialIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.04 3C8.86 3 3.02 8.83 3.02 16c0 2.29.6 4.53 1.74 6.5L3 29l6.67-1.72A12.95 12.95 0 0 0 16.04 29c7.17 0 13-5.83 13-13S23.21 3 16.04 3Zm0 23.8c-2.05 0-4.05-.55-5.79-1.59l-.41-.24-3.96 1.02 1.06-3.85-.27-.43A10.72 10.72 0 0 1 5.24 16c0-5.95 4.84-10.8 10.8-10.8 5.95 0 10.79 4.85 10.79 10.8 0 5.96-4.84 10.8-10.79 10.8Zm5.92-8.09c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.5-.16-.72.16-.21.32-.83 1.05-1.02 1.26-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.15-.15.32-.38.49-.56.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.52-.54-.72-.55h-.62c-.21 0-.56.08-.86.4-.29.32-1.13 1.1-1.13 2.69s1.16 3.13 1.32 3.35c.16.21 2.29 3.5 5.55 4.9.78.34 1.38.54 1.85.69.78.25 1.49.21 2.05.13.63-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

const styles = `
.heroButtons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 32px;
}

.heroTrust {
  display: flex;
  align-items: center;
  gap: 22px;
  flex-wrap: wrap;
  margin-top: 28px;
}

.heroMiniGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  width: 100%;
  margin-top: 28px;
  position: relative;
  z-index: 2;
}

@keyframes floatPulse {
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

@media (max-width: 1080px) {
  .heroGrid {
    grid-template-columns: 1fr !important;
    min-height: auto !important;
  }

  .heroTitle {
    font-size: clamp(42px, 9vw, 76px) !important;
  }
}

@media (max-width: 620px) {
  .heroGrid {
    padding: 64px 5% 72px !important;
  }

  .heroButtons {
    flex-direction: column !important;
  }

  .heroButtons a {
    width: 100% !important;
    justify-content: center !important;
  }

  .heroTrust {
    gap: 14px !important;
  }

  .heroMiniGrid {
    grid-template-columns: 1fr !important;
  }
}
`;
