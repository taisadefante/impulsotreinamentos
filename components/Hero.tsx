"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
  return (
    <section id="inicio" className="heroGrid">
      <style>{styles}</style>

      <div className="heroGlow heroGlowLeft" />
      <div className="heroGlow heroGlowRight" />
      <div className="heroOverlay" />

      <div className="heroContent">
        <Reveal>
          <div className="heroBadge">
            <Sparkles size={17} />
            Treinamentos corporativos em saúde e segurança
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="heroTitle">
            Conhecimento que prepara. <span>Atitude que salva.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="heroText">
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

      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="heroCard"
      >
        <div className="heroCardGlow" />
        <div className="heroCardTag">100% prático</div>

        <motion.div
          whileHover={{ scale: 1.04, rotate: 1 }}
          className="heroLogoBox"
        >
          <Image
            src="/logo.png"
            alt="Logo Impulso Treinamentos"
            width={230}
            height={230}
            priority
            className="heroLogo"
          />
        </motion.div>

        <h2 className="heroCardTitle">Impulso Treinamentos</h2>

        <p className="heroCardText">
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
    <motion.div whileHover={{ y: -5, scale: 1.03 }} className="heroMini">
      <div className="heroMiniIcon">{icon}</div>
      <strong>{title}</strong>
      <span>{text}</span>
    </motion.div>
  );
}

function TrustItem({ icon, text }: { icon: ReactNode; text: string }) {
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
.heroGrid {
  min-height: 88vh;
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(360px, .92fr);
  gap: clamp(30px, 4vw, 54px);
  align-items: center;
  padding: clamp(76px, 8vw, 104px) 7%;
  position: relative;
  overflow: hidden;
}

.heroContent,
.heroCard {
  position: relative;
  z-index: 2;
}

.heroGlow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.heroGlowLeft {
  width: 420px;
  height: 420px;
  background: rgba(255,216,120,.12);
  filter: blur(70px);
  top: 30px;
  left: -120px;
}

.heroGlowRight {
  width: 520px;
  height: 520px;
  background: rgba(161,15,18,.24);
  filter: blur(90px);
  right: -160px;
  bottom: 20px;
}

.heroOverlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(23,0,0,.94), rgba(23,0,0,.62), rgba(23,0,0,.9));
  pointer-events: none;
}

.heroBadge {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  max-width: 100%;
  padding: 10px 16px;
  border-radius: 999px;
  background: rgba(255,244,223,.08);
  border: 1px solid rgba(255,216,120,.3);
  color: ${C.gold2};
  font-weight: 900;
  box-shadow: 0 16px 45px rgba(0,0,0,.18);
}

.heroTitle {
  margin: 24px 0 0;
  font-size: clamp(38px, 5.7vw, 78px);
  line-height: 1.02;
  letter-spacing: -2.4px;
  text-transform: uppercase;
  color: ${C.text};
  max-width: 920px;
}

.heroTitle span {
  color: ${C.gold2};
  display: inline-block;
}

.heroText {
  color: ${C.muted};
  font-size: clamp(16px, 1.45vw, 20px);
  line-height: 1.65;
  max-width: 720px;
  margin: 24px 0 0;
}

.heroButtons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 32px;
}

.heroPrimaryBtn,
.heroSecondaryBtn {
  min-height: 54px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 24px;
  border-radius: 999px;
  font-weight: 900;
  text-decoration: none;
  white-space: nowrap;
}

.heroPrimaryBtn {
  background: linear-gradient(135deg, ${C.gold}, ${C.gold2});
  color: ${C.dark};
  box-shadow: 0 18px 60px rgba(216,163,63,.30);
}

.heroSecondaryBtn {
  border: 1px solid rgba(255,216,120,.25);
  color: ${C.cream};
  background: rgba(255,244,223,.045);
}

.heroTrust {
  display: flex;
  align-items: center;
  gap: 22px;
  flex-wrap: wrap;
  margin-top: 28px;
}

.heroTrustItem {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${C.muted};
  font-weight: 800;
  font-size: 14px;
}

.heroTrustItem span {
  color: ${C.gold2};
}

.heroCard {
  width: 100%;
  min-height: 500px;
  border-radius: 42px;
  padding: 92px 34px 34px;
  background: linear-gradient(145deg, rgba(255,244,223,.14), rgba(255,255,255,.045));
  border: 1px solid rgba(255,216,120,.32);
  box-shadow: 0 34px 120px rgba(0,0,0,.42);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  animation: floatPulse 7s ease-in-out infinite;
  overflow: hidden;
}

.heroCardGlow {
  position: absolute;
  top: -100px;
  right: -100px;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background: rgba(255,216,120,.10);
}

.heroCardTag {
  position: absolute;
  left: 26px;
  top: 26px;
  padding: 9px 13px;
  border-radius: 999px;
  background: rgba(255,244,223,.08);
  border: 1px solid rgba(255,216,120,.22);
  color: ${C.gold2};
  font-weight: 900;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.heroLogoBox {
  width: clamp(150px, 15vw, 210px);
  height: clamp(150px, 15vw, 210px);
  border-radius: clamp(28px, 3vw, 46px);
  overflow: hidden;
  background: ${C.cream};
  display: grid;
  place-items: center;
  border: 2px solid ${C.gold};
  box-shadow: 0 0 95px rgba(216,163,63,.38);
  position: relative;
  z-index: 2;
}

.heroLogo {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

.heroCardTitle {
  font-size: clamp(25px, 3vw, 36px);
  margin: 26px 0 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${C.text};
  position: relative;
  z-index: 2;
}

.heroCardText {
  color: ${C.muted};
  font-size: clamp(15px, 1.4vw, 17px);
  max-width: 430px;
  line-height: 1.55;
  margin: 0;
  position: relative;
  z-index: 2;
}

.heroMiniGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;
  margin-top: 45px;
  position: relative;
  z-index: 2;
}

.heroMini {
  padding: 22px 20px;
  border-radius: 24px;
  background: rgba(255,244,223,.08);
  border: 1px solid rgba(255,216,120,.18);
  color: ${C.cream};
  text-align: left;
  min-height: 112px;
}

.heroMiniIcon {
  color: ${C.gold2};
}

.heroMini strong {
  display: block;
  margin-top: 10px;
  font-size: 16px;
}

.heroMini span {
  display: block;
  color: ${C.muted};
  font-size: 13px;
  margin-top: 4px;
}

@keyframes floatPulse {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@media (max-width: 1180px) {
  .heroGrid {
    grid-template-columns: minmax(0, 1fr) minmax(330px, .85fr);
    gap: 34px;
  }

  .heroTitle {
    font-size: clamp(38px, 5.3vw, 68px);
  }

  .heroCard {
    padding: 88px 26px 30px;
  }
}

@media (max-width: 1080px) {
  .heroGrid {
    grid-template-columns: 1fr;
    min-height: auto;
    padding-top: 76px;
  }

  .heroContent {
    text-align: center;
  }

  .heroTitle,
  .heroText {
    margin-left: auto;
    margin-right: auto;
  }

  .heroButtons,
  .heroTrust {
    justify-content: center;
  }

  .heroCard {
    max-width: 620px;
    min-height: auto;
    margin: 0 auto;
  }
}

@media (max-width: 760px) {
  .heroGrid {
    padding: 66px 6% 72px;
  }

  .heroTitle {
    font-size: clamp(36px, 9vw, 56px);
    letter-spacing: -1.7px;
  }

  .heroButtons {
    justify-content: center;
  }

  .heroCard {
    border-radius: 34px;
    padding: 88px 24px 30px;
  }
}

@media (max-width: 620px) {
  .heroGrid {
    padding: 58px 5% 64px;
    gap: 34px;
  }

  .heroBadge {
    width: 100%;
    justify-content: center;
    text-align: center;
    font-size: 12px;
    padding: 10px 12px;
    line-height: 1.35;
  }

  .heroTitle {
    font-size: clamp(33px, 10.4vw, 45px);
    line-height: 1.05;
    letter-spacing: -1.4px;
  }

  .heroText {
    font-size: 16px;
    line-height: 1.55;
  }

  .heroButtons {
    flex-direction: column;
    gap: 12px;
  }

  .heroButtons a {
    width: 100%;
    white-space: normal;
    text-align: center;
  }

  .heroTrust {
    gap: 12px;
    justify-content: center;
  }

  .heroTrustItem {
    font-size: 13px;
  }

  .heroCard {
    border-radius: 30px;
    padding: 86px 18px 26px;
  }

  .heroCardTag {
    left: 18px;
    top: 18px;
    font-size: 11px;
  }

  .heroLogoBox {
    width: 150px;
    height: 150px;
  }

  .heroCardTitle {
    margin-top: 22px;
    font-size: 25px;
    line-height: 1.15;
  }

  .heroCardText {
    font-size: 15px;
  }

  .heroMiniGrid {
    margin-top: 34px;
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .heroMini {
    min-height: auto;
    padding: 18px;
  }
}

@media (max-width: 380px) {
  .heroTitle {
    font-size: 31px;
  }

  .heroPrimaryBtn,
  .heroSecondaryBtn {
    padding: 14px 18px;
    font-size: 14px;
  }

  .heroCard {
    padding: 82px 14px 22px;
  }
}
`;
