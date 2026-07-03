"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { C, whatsappLink } from "@/data/siteData";
import Reveal from "./Reveal";

const heroImage = "/images/hero-impulso-treinamento.png";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <style>{styles}</style>

      <div className="heroBg" />
      <div className="heroOverlay" />
      <div className="heroGlow" />

      <div className="heroContent">
        <Reveal>
          <div className="heroBadge">
            <Sparkles size={17} />
            Treinamentos em saúde, segurança e prevenção
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="heroTitle">
            Capacitando pessoas
            <br />
            para agir com segurança.
            <br />
            <span>Preparando vidas para salvar vidas.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="heroText">
            Treinamentos práticos, palestras educativas e programas de
            prevenção para empresas, escolas e instituições que valorizam
            cuidado, segurança e responsabilidade.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="heroButtons">
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="heroPrimaryBtn"
            >
              <WhatsappOfficialIcon />
              Solicitar proposta
            </motion.a>

            <motion.a
              href="#treinamentos"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="heroSecondaryBtn"
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
      </div>
    </section>
  );
}

function TrustItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="heroTrustItem">
      <span>{icon}</span>
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
.hero {
  min-height: 94vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: clamp(92px, 9vw, 130px) 7%;
  background: ${C.bg};
}

.heroBg {
  position: absolute;
  inset: 0;
  background-image: url("${heroImage}");
  background-size: cover;
  background-position: center right;
  transform: scale(1.02);
}

.heroOverlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      90deg,
      rgba(23,0,0,.98) 0%,
      rgba(23,0,0,.93) 27%,
      rgba(23,0,0,.74) 48%,
      rgba(23,0,0,.38) 73%,
      rgba(23,0,0,.20) 100%
    ),
    linear-gradient(
      180deg,
      rgba(23,0,0,.38) 0%,
      rgba(23,0,0,.10) 45%,
      rgba(23,0,0,.90) 100%
    );
}

.heroGlow {
  position: absolute;
  width: 540px;
  height: 540px;
  left: -180px;
  top: 80px;
  border-radius: 50%;
  background: rgba(255,216,120,.16);
  filter: blur(90px);
  pointer-events: none;
}

.heroContent {
  position: relative;
  z-index: 2;
  max-width: 760px;
}

.heroBadge {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 10px 16px;
  border-radius: 999px;
  background: rgba(255,244,223,.09);
  border: 1px solid rgba(255,216,120,.32);
  color: ${C.gold2};
  font-weight: 900;
  font-size: 15px;
  box-shadow: 0 16px 45px rgba(0,0,0,.20);
}

.heroTitle {
  margin: 26px 0 0;
  font-size: clamp(38px, 5vw, 72px);
  line-height: 1.03;
  letter-spacing: -1.8px;
  color: ${C.text};
  font-weight: 950;
}

.heroTitle span {
  color: ${C.gold2};
}

.heroText {
  color: ${C.muted};
  font-size: clamp(16px, 1.3vw, 20px);
  line-height: 1.65;
  max-width: 650px;
  margin: 26px 0 0;
}

.heroButtons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 34px;
}

.heroPrimaryBtn,
.heroSecondaryBtn {
  min-height: 56px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 25px;
  border-radius: 999px;
  font-weight: 950;
  text-decoration: none;
  white-space: nowrap;
}

.heroPrimaryBtn {
  background: linear-gradient(135deg, ${C.gold}, ${C.gold2});
  color: ${C.dark};
  box-shadow: 0 18px 60px rgba(216,163,63,.34);
}

.heroSecondaryBtn {
  border: 1px solid rgba(255,216,120,.30);
  color: ${C.cream};
  background: rgba(255,244,223,.055);
  backdrop-filter: blur(10px);
}

.heroTrust {
  display: flex;
  align-items: center;
  gap: 22px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.heroTrustItem {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${C.muted};
  font-weight: 850;
  font-size: 14px;
}

.heroTrustItem span {
  color: ${C.gold2};
}

@media (max-width: 980px) {
  .hero {
    min-height: auto;
    padding: 86px 6% 90px;
  }

  .heroBg {
    background-position: center right;
  }

  .heroOverlay {
    background:
      linear-gradient(
        90deg,
        rgba(23,0,0,.98) 0%,
        rgba(23,0,0,.90) 48%,
        rgba(23,0,0,.58) 100%
      ),
      linear-gradient(
        180deg,
        rgba(23,0,0,.28) 0%,
        rgba(23,0,0,.88) 100%
      );
  }

  .heroContent {
    max-width: 720px;
  }
}

@media (max-width: 700px) {
  .hero {
    padding: 76px 5% 78px;
    text-align: center;
  }

  .heroBg {
    background-position: 68% center;
  }

  .heroOverlay {
    background:
      linear-gradient(
        180deg,
        rgba(23,0,0,.94) 0%,
        rgba(23,0,0,.84) 42%,
        rgba(23,0,0,.96) 100%
      );
  }

  .heroBadge {
    width: 100%;
    justify-content: center;
    font-size: 12px;
    line-height: 1.35;
  }

  .heroTitle {
    font-size: clamp(34px, 9vw, 46px);
    letter-spacing: -1px;
  }

  .heroText {
    font-size: 16px;
    line-height: 1.55;
  }

  .heroButtons {
    flex-direction: column;
  }

  .heroButtons a {
    width: 100%;
    white-space: normal;
  }

  .heroTrust {
    justify-content: center;
    gap: 12px;
  }

  .heroTrustItem {
    font-size: 13px;
  }
}
`;