"use client";

import { X, CheckCircle2, Clock, Users, Target, Award } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import type { Training } from "@/data/siteData";
import { C, whatsappLink } from "@/data/siteData";

export default function TrainingModal({
  training,
  onClose,
}: {
  training: Training | null;
  onClose: () => void;
}) {
  if (!training) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modalCard" onClick={(event) => event.stopPropagation()}>
        <button className="closeButton" onClick={onClose} aria-label="Fechar modal">
          <X />
        </button>

        <div className="modalImage" style={{ backgroundImage: `url(${training.image})` }}>
          <div className="modalImageContent">
            <span>{training.category}</span>
            <h2>{training.title}</h2>
            {training.subtitle && <p>{training.subtitle}</p>}
          </div>
        </div>

        <div className="modalBody">
          <div className="infoGrid">
            <div><Clock size={18} /><strong>Duração</strong><span>{training.duration}</span></div>
            <div><Users size={18} /><strong>Público</strong><span>{training.audience}</span></div>
            <div><Award size={18} /><strong>Formato</strong><span>Palestra ou treinamento personalizado</span></div>
          </div>

          <p className="description">{training.description}</p>

          {training.objective && (
            <div className="objective">
              <Target size={22} />
              <div>
                <h3>Objetivo</h3>
                <p>{training.objective}</p>
              </div>
            </div>
          )}

          <h3 className="sectionTitle">Conteúdo abordado</h3>
          <div className="topicsGrid">
            {training.topics.map((topic) => (
              <div key={topic}>
                <CheckCircle2 size={18} />
                {topic}
              </div>
            ))}
          </div>

          {training.benefits && training.benefits.length > 0 && (
            <>
              <h3 className="sectionTitle">Benefícios</h3>
              <div className="benefitsList">
                {training.benefits.map((benefit) => (
                  <span key={benefit}>{benefit}</span>
                ))}
              </div>
            </>
          )}

          <a className="whatsappButton" href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={20} /> Pedir orçamento desse treinamento
          </a>
        </div>
      </div>

      <style jsx>{`
        .overlay {
          position: fixed;
          inset: 0;
          z-index: 100;
          background: rgba(0,0,0,.74);
          backdrop-filter: blur(10px);
          display: grid;
          place-items: center;
          padding: 16px;
        }

        .modalCard {
          width: min(980px, 94vw);
          max-height: 88vh;
          overflow: auto;
          border-radius: 34px;
          background: linear-gradient(145deg, ${C.cream}, ${C.cream2});
          color: ${C.dark};
          box-shadow: 0 30px 120px rgba(0,0,0,.55);
          border: 1px solid ${C.gold};
          position: relative;
        }

        .closeButton {
          position: absolute;
          top: 18px;
          right: 18px;
          z-index: 5;
          border: 0;
          background: ${C.wine};
          color: ${C.cream};
          width: 46px;
          height: 46px;
          border-radius: 16px;
          cursor: pointer;
          display: grid;
          place-items: center;
        }

        .modalImage {
          min-height: 330px;
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .modalImage::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,.1), rgba(38,0,0,.92));
        }

        .modalImageContent {
          position: absolute;
          left: 34px;
          right: 80px;
          bottom: 30px;
          color: white;
        }

        .modalImageContent span {
          display: inline-flex;
          padding: 8px 13px;
          border-radius: 999px;
          background: ${C.gold2};
          color: ${C.dark};
          font-weight: 950;
          font-size: 12px;
          text-transform: uppercase;
        }

        .modalImageContent h2 {
          margin: 14px 0 8px;
          font-size: clamp(34px, 5vw, 62px);
          line-height: .95;
          letter-spacing: -1.5px;
        }

        .modalImageContent p {
          margin: 0;
          color: rgba(255,255,255,.82);
          font-size: 18px;
          font-weight: 800;
        }

        .modalBody {
          padding: 34px;
        }

        .infoGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 24px;
        }

        .infoGrid div {
          padding: 16px;
          border-radius: 20px;
          background: rgba(91,7,7,.08);
          display: grid;
          gap: 6px;
        }

        .infoGrid svg {
          color: ${C.wine};
        }

        .infoGrid strong {
          color: ${C.dark};
          font-size: 13px;
          text-transform: uppercase;
        }

        .infoGrid span {
          color: #5d2727;
          font-weight: 750;
          line-height: 1.35;
        }

        .description {
          font-size: 18px;
          line-height: 1.75;
          color: #5d2727;
          margin: 0 0 22px;
        }

        .objective {
          display: flex;
          gap: 14px;
          padding: 20px;
          border-radius: 22px;
          background: rgba(216,163,63,.22);
          border: 1px solid rgba(91,7,7,.12);
          margin-bottom: 24px;
        }

        .objective svg {
          flex: 0 0 auto;
          color: ${C.wine};
        }

        .objective h3,
        .sectionTitle {
          margin: 0 0 8px;
          color: ${C.dark};
        }

        .objective p {
          margin: 0;
          color: #5d2727;
          line-height: 1.6;
          font-weight: 650;
        }

        .sectionTitle {
          margin-top: 24px;
        }

        .topicsGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 12px;
        }

        .topicsGrid div {
          display: flex;
          gap: 10px;
          align-items: center;
          padding: 13px;
          border-radius: 16px;
          background: rgba(91,7,7,.08);
          font-weight: 800;
          color: ${C.dark};
        }

        .topicsGrid svg {
          color: ${C.wine};
          flex: 0 0 auto;
        }

        .benefitsList {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .benefitsList span {
          padding: 10px 13px;
          border-radius: 999px;
          background: ${C.wine};
          color: ${C.cream};
          font-weight: 850;
        }

        .whatsappButton {
          margin-top: 28px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 22px;
          border-radius: 999px;
          background: linear-gradient(135deg, ${C.gold}, ${C.gold2});
          color: ${C.dark};
          font-weight: 950;
          text-decoration: none;
        }

        @media (max-width: 780px) {
          .modalImage {
            min-height: 260px;
          }

          .modalImageContent {
            left: 22px;
            right: 22px;
          }

          .modalBody {
            padding: 22px;
          }

          .infoGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
