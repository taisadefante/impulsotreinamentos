"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Award,
  BookOpenCheck,
  ChevronRight,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { whatsappLink } from "@/data/siteData";
import Reveal from "./Reveal";

const heroImage = "/images/hero-impulso-treinamento.png";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <style>{styles}</style>

      <div className="heroBg" />
      <div className="heroOverlay" />
      <div className="heroTexture" />
      <div className="heroGlow" />

      <div className="heroMain">
        <div className="heroContent">
          <Reveal>
            <div className="heroBadge">
              <Sparkles size={17} />
              Saúde, segurança, prevenção e cuidado
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="heroTitle">
              <span className="heroTitleWhite">TREINAMENTOS</span>
              <span className="heroTitleGold">CORPORATIVOS</span>
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="heroSlogan">
              Mais segurança, mais preparo,
              <br />
              <strong>mais vida.</strong>
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="heroText">
              Treinamentos práticos, palestras educativas e programas de
              prevenção para empresas, escolas e instituições que valorizam o
              cuidado, a segurança e a responsabilidade.
            </p>
          </Reveal>

          <Reveal delay={0.32}>
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
                Conhecer treinamentos
                <ChevronRight size={19} />
              </motion.a>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="heroTrust">
              <TrustItem
                icon={<ShieldCheck size={18} />}
                text="Prevenção"
              />

              <TrustItem
                icon={<Users size={18} />}
                text="Equipes preparadas"
              />

              <TrustItem
                icon={<HeartPulse size={18} />}
                text="Cuidado real"
              />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="heroCurve" aria-hidden="true">
        <svg
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="heroGoldGradient"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop offset="0%" stopColor="#ad6f0a" />
              <stop offset="22%" stopColor="#e9ad26" />
              <stop offset="48%" stopColor="#ffe083" />
              <stop offset="72%" stopColor="#f2c34b" />
              <stop offset="100%" stopColor="#b8750b" />
            </linearGradient>

            <linearGradient
              id="heroRedGradient"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop offset="0%" stopColor="#4c0000" />
              <stop offset="34%" stopColor="#860000" />
              <stop offset="70%" stopColor="#bd0707" />
              <stop offset="100%" stopColor="#650000" />
            </linearGradient>
          </defs>

          <path
            d="
              M 0 14
              C 300 96, 685 128, 1030 108
              C 1200 98, 1340 65, 1440 28
              L 1440 160
              L 0 160
              Z
            "
            fill="url(#heroGoldGradient)"
          />

          <path
            d="
              M 0 42
              C 300 117, 685 148, 1030 127
              C 1200 117, 1340 87, 1440 52
              L 1440 160
              L 0 160
              Z
            "
            fill="url(#heroRedGradient)"
          />
        </svg>
      </div>

      <div className="heroHighlights">
        <HighlightItem
          icon={<Users size={31} />}
          title="Para empresas,"
          description="escolas e equipes"
        />

        <HighlightItem
          icon={<BookOpenCheck size={31} />}
          title="Treinamentos"
          description="presenciais"
        />

        <HighlightItem
          icon={<Award size={31} />}
          title="Instrutores"
          description="qualificados"
        />

        <HighlightItem
          icon={<Target size={31} />}
          title="Foco em resultados"
          description="e conscientização"
        />
      </div>
    </section>
  );
}

function TrustItem({
  icon,
  text,
}: {
  icon: ReactNode;
  text: string;
}) {
  return (
    <div className="heroTrustItem">
      <span>{icon}</span>
      {text}
    </div>
  );
}

function HighlightItem({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="highlightItem">
      <div className="highlightIcon">{icon}</div>

      <div className="highlightText">
        <strong>{title}</strong>
        <span>{description}</span>
      </div>
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
  --hero-gold-light: #ffe58d;
  --hero-gold: #efbd45;
  --hero-gold-dark: #b8780c;
  --hero-red: #a00000;
  --hero-red-dark: #510000;
  --hero-cream: #fff7e8;

  position: relative;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #160000;
  isolation: isolate;
}

.heroMain {
  position: relative;
  z-index: 5;
  flex: 1;
  display: flex;
  align-items: center;
  width: 100%;
  padding:
    clamp(105px, 10vw, 145px)
    7%
    clamp(205px, 18vw, 270px);
}

.heroBg {
  position: absolute;
  inset: 0;
  z-index: -5;
  background-image: url("${heroImage}");
  background-size: cover;
  background-position: center right;
  background-repeat: no-repeat;
  transform: scale(1.015);
}

.heroOverlay {
  position: absolute;
  inset: 0;
  z-index: -4;
  background:
    linear-gradient(
      90deg,
      rgba(10, 4, 4, 0.99) 0%,
      rgba(16, 3, 3, 0.97) 24%,
      rgba(31, 4, 4, 0.87) 43%,
      rgba(50, 3, 3, 0.49) 68%,
      rgba(27, 0, 0, 0.18) 100%
    ),
    linear-gradient(
      180deg,
      rgba(8, 0, 0, 0.32) 0%,
      rgba(19, 0, 0, 0.1) 45%,
      rgba(15, 0, 0, 0.88) 100%
    );
}

.heroTexture {
  position: absolute;
  inset: 0;
  z-index: -3;
  opacity: 0.13;
  pointer-events: none;
  background-image:
    linear-gradient(
      30deg,
      rgba(255, 204, 88, 0.18) 12%,
      transparent 12.5%,
      transparent 87%,
      rgba(255, 204, 88, 0.18) 87.5%
    ),
    linear-gradient(
      150deg,
      rgba(255, 204, 88, 0.18) 12%,
      transparent 12.5%,
      transparent 87%,
      rgba(255, 204, 88, 0.18) 87.5%
    ),
    linear-gradient(
      30deg,
      rgba(255, 204, 88, 0.18) 12%,
      transparent 12.5%,
      transparent 87%,
      rgba(255, 204, 88, 0.18) 87.5%
    ),
    linear-gradient(
      150deg,
      rgba(255, 204, 88, 0.18) 12%,
      transparent 12.5%,
      transparent 87%,
      rgba(255, 204, 88, 0.18) 87.5%
    );
  background-size: 72px 126px;
  background-position:
    0 0,
    0 0,
    36px 63px,
    36px 63px;
  mask-image: linear-gradient(
    90deg,
    transparent 0%,
    transparent 42%,
    #000 72%,
    #000 100%
  );
}

.heroGlow {
  position: absolute;
  z-index: -2;
  width: 620px;
  height: 620px;
  left: -240px;
  top: 40px;
  border-radius: 50%;
  background: rgba(255, 203, 89, 0.15);
  filter: blur(105px);
  pointer-events: none;
}

.heroContent {
  position: relative;
  width: 100%;
  max-width: 720px;
}

.heroBadge {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 10px 17px;
  border-radius: 999px;
  background: rgba(255, 244, 223, 0.08);
  border: 1px solid rgba(255, 216, 120, 0.32);
  color: var(--hero-gold-light);
  font-size: 14px;
  font-weight: 850;
  letter-spacing: 0.15px;
  box-shadow: 0 16px 45px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
}

.heroTitle {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 27px 0 0;
  line-height: 0.94;
  text-transform: uppercase;
}

.heroTitleWhite {
  display: block;
  color: #ffffff;
  font-size: clamp(30px, 3.15vw, 52px);
  font-weight: 500;
  line-height: 1;
  letter-spacing: 1.5px;
  text-shadow: 0 7px 26px rgba(0, 0, 0, 0.45);
}

.heroTitleGold {
  display: block;
  margin-top: 7px;
  font-size: clamp(48px, 5.5vw, 88px);
  font-weight: 950;
  line-height: 0.94;
  letter-spacing: -2.5px;
  background:
    linear-gradient(
      180deg,
      #fff2aa 0%,
      #f9d466 24%,
      #e9ad2c 54%,
      #ffd971 76%,
      #b9750c 100%
    );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 7px 14px rgba(0, 0, 0, 0.4));
}

.heroSlogan {
  margin: 25px 0 0;
  color: rgba(255, 255, 255, 0.92);
  font-size: clamp(20px, 1.8vw, 28px);
  line-height: 1.28;
  font-weight: 500;
  letter-spacing: -0.2px;
}

.heroSlogan strong {
  color: var(--hero-gold-light);
  font-weight: 850;
}

.heroText {
  max-width: 635px;
  margin: 22px 0 0;
  color: rgba(255, 245, 234, 0.76);
  font-size: clamp(15px, 1.18vw, 18px);
  line-height: 1.7;
}

.heroButtons {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 31px;
}

.heroPrimaryBtn,
.heroSecondaryBtn {
  min-height: 55px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 24px;
  border-radius: 999px;
  font-weight: 900;
  font-size: 15px;
  text-decoration: none;
  white-space: nowrap;
  transition:
    border-color 0.25s ease,
    background 0.25s ease,
    color 0.25s ease,
    box-shadow 0.25s ease;
}

.heroPrimaryBtn {
  color: #281400;
  background:
    linear-gradient(
      135deg,
      #f3bd39 0%,
      #ffe18b 48%,
      #d89417 100%
    );
  border: 1px solid rgba(255, 232, 157, 0.55);
  box-shadow:
    0 18px 55px rgba(216, 163, 63, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

.heroPrimaryBtn:hover {
  box-shadow:
    0 22px 65px rgba(216, 163, 63, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.55);
}

.heroSecondaryBtn {
  color: var(--hero-cream);
  border: 1px solid rgba(255, 216, 120, 0.32);
  background: rgba(255, 244, 223, 0.06);
  backdrop-filter: blur(11px);
}

.heroSecondaryBtn:hover {
  border-color: rgba(255, 216, 120, 0.62);
  background: rgba(255, 244, 223, 0.11);
}

.heroTrust {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 27px;
}

.heroTrustItem {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 245, 234, 0.72);
  font-size: 13px;
  font-weight: 800;
}

.heroTrustItem span {
  display: inline-flex;
  color: var(--hero-gold-light);
}

.heroCurve {
  position: absolute;
  z-index: 7;
  left: 0;
  right: 0;
  bottom: 125px;
  width: 100%;
  height: 150px;
  overflow: hidden;
  pointer-events: none;
  line-height: 0;
}

.heroCurve svg {
  display: block;
  width: 100%;
  height: 100%;
}

.heroHighlights {
  position: absolute;
  z-index: 8;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 136px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  padding: 29px 7% 25px;
  background:
    linear-gradient(
      90deg,
      rgba(75, 0, 0, 0.99) 0%,
      rgba(136, 0, 0, 0.99) 45%,
      rgba(102, 0, 0, 0.99) 100%
    );
}

.highlightItem {
  min-height: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 0 25px;
  border-right: 1px solid rgba(255, 211, 105, 0.35);
}

.highlightItem:first-child {
  padding-left: 0;
}

.highlightItem:last-child {
  padding-right: 0;
  border-right: 0;
}

.highlightIcon {
  flex: 0 0 auto;
  display: inline-flex;
  color: var(--hero-gold-light);
  filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.22));
}

.highlightText {
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  color: #ffffff;
  line-height: 1.14;
}

.highlightText strong {
  font-size: clamp(13px, 1.05vw, 17px);
  font-weight: 850;
}

.highlightText span {
  margin-top: 3px;
  font-size: clamp(12px, 0.93vw, 15px);
  font-weight: 550;
  color: rgba(255, 255, 255, 0.82);
}

@media (max-width: 1100px) {
  .heroMain {
    padding-left: 6%;
    padding-right: 6%;
  }

  .heroContent {
    max-width: 650px;
  }

  .heroOverlay {
    background:
      linear-gradient(
        90deg,
        rgba(10, 3, 3, 0.99) 0%,
        rgba(18, 2, 2, 0.95) 38%,
        rgba(40, 2, 2, 0.66) 70%,
        rgba(30, 0, 0, 0.26) 100%
      ),
      linear-gradient(
        180deg,
        rgba(9, 0, 0, 0.25) 0%,
        rgba(18, 0, 0, 0.88) 100%
      );
  }

  .heroHighlights {
    padding-left: 4%;
    padding-right: 4%;
  }

  .highlightItem {
    padding-left: 15px;
    padding-right: 15px;
    gap: 11px;
  }
}

@media (max-width: 850px) {
  .hero {
    min-height: auto;
  }

  .heroMain {
    min-height: 820px;
    align-items: flex-start;
    padding:
      105px
      6%
      220px;
  }

  .heroContent {
    max-width: 620px;
  }

  .heroBg {
    background-position: 66% center;
  }

  .heroOverlay {
    background:
      linear-gradient(
        90deg,
        rgba(13, 2, 2, 0.98) 0%,
        rgba(18, 1, 1, 0.92) 50%,
        rgba(43, 2, 2, 0.57) 100%
      ),
      linear-gradient(
        180deg,
        rgba(12, 0, 0, 0.25) 0%,
        rgba(18, 0, 0, 0.94) 88%
      );
  }

  .heroCurve {
    bottom: 249px;
    height: 125px;
  }

  .heroHighlights {
    position: relative;
    grid-template-columns: repeat(2, 1fr);
    min-height: 250px;
    padding: 32px 6%;
  }

  .highlightItem {
    justify-content: flex-start;
    border-right: 0;
    padding: 18px 20px;
  }

  .highlightItem:nth-child(odd) {
    border-right: 1px solid rgba(255, 211, 105, 0.28);
  }

  .highlightItem:nth-child(-n + 2) {
    border-bottom: 1px solid rgba(255, 211, 105, 0.22);
  }
}

@media (max-width: 620px) {
  .heroMain {
    min-height: auto;
    padding:
      88px
      5%
      185px;
    text-align: center;
  }

  .heroBg {
    background-position: 69% center;
  }

  .heroOverlay {
    background:
      linear-gradient(
        180deg,
        rgba(13, 1, 1, 0.91) 0%,
        rgba(19, 1, 1, 0.86) 35%,
        rgba(18, 0, 0, 0.97) 100%
      );
  }

  .heroTexture {
    display: none;
  }

  .heroContent {
    max-width: 100%;
  }

  .heroBadge {
    width: 100%;
    justify-content: center;
    padding: 9px 13px;
    font-size: 12px;
    line-height: 1.35;
  }

  .heroTitle {
    align-items: center;
    margin-top: 24px;
  }

  .heroTitleWhite {
    font-size: clamp(27px, 8vw, 38px);
    letter-spacing: 1px;
  }

  .heroTitleGold {
    margin-top: 8px;
    font-size: clamp(43px, 13vw, 61px);
    letter-spacing: -1.8px;
  }

  .heroSlogan {
    margin-top: 22px;
    font-size: 20px;
  }

  .heroText {
    font-size: 15px;
    line-height: 1.6;
  }

  .heroButtons {
    flex-direction: column;
    gap: 12px;
    margin-top: 27px;
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
    font-size: 12px;
  }

  .heroCurve {
    bottom: 401px;
    height: 90px;
  }

  .heroCurve svg {
    width: 155%;
    margin-left: -27.5%;
  }

  .heroHighlights {
    grid-template-columns: 1fr;
    min-height: 402px;
    padding: 23px 6%;
  }

  .highlightItem,
  .highlightItem:first-child,
  .highlightItem:last-child {
    min-height: 80px;
    justify-content: flex-start;
    padding: 14px 12px;
    border-right: 0;
    border-bottom: 1px solid rgba(255, 211, 105, 0.22);
  }

  .highlightItem:last-child {
    border-bottom: 0;
  }

  .highlightIcon {
    width: 42px;
    justify-content: center;
  }

  .highlightText strong {
    font-size: 15px;
  }

  .highlightText span {
    font-size: 13px;
  }
}
`;