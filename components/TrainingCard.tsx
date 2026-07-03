"use client";

import { CheckCircle2, ChevronRight, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import type { Training } from "@/data/siteData";
import { C } from "@/data/siteData";

type TrainingCardProps = {
  item: Training;
  index: number;
  onDetails: (training: Training) => void;
};

export default function TrainingCard({ item, index, onDetails }: TrainingCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 46, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: Math.min(index * 0.06, 0.45), duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      className="trainingCard"
    >
      <div className="imageArea" style={{ backgroundImage: `url(${item.image})` }}>
        <span>{item.category}</span>
      </div>

      <div className="contentArea">
        <div className="topLine">
          <div className="iconBox">{item.icon}</div>
          <span>{item.label}</span>
        </div>

        <h3>{item.title}</h3>
        {item.subtitle && <strong>{item.subtitle}</strong>}

        <p>{item.description}</p>

        <div className="metaGrid">
          <span><Clock size={15} /> {item.duration}</span>
          <span><Users size={15} /> {item.audience}</span>
        </div>

        <div className="topicsList">
          {item.topics.slice(0, 4).map((topic) => (
            <span key={topic}>
              <CheckCircle2 size={15} /> {topic}
            </span>
          ))}
        </div>

        <button type="button" onClick={() => onDetails(item)}>
          Ver detalhes <ChevronRight size={17} />
        </button>
      </div>

      <style jsx>{`
        .trainingCard {
          position: relative;
          overflow: hidden;
          border-radius: 30px;
          background: linear-gradient(145deg, rgba(255,244,223,.12), rgba(88,15,15,.56));
          border: 1px solid rgba(255,216,120,.22);
          box-shadow: 0 24px 75px rgba(0,0,0,.26);
          min-height: 560px;
        }

        .imageArea {
          height: 188px;
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .imageArea::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,.08), rgba(23,0,0,.82));
        }

        .imageArea span {
          position: absolute;
          left: 16px;
          bottom: 16px;
          display: inline-flex;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(255,216,120,.92);
          color: ${C.dark};
          font-weight: 950;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: .5px;
        }

        .contentArea {
          padding: 22px;
        }

        .topLine {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 16px;
        }

        .topLine > span {
          color: ${C.gold2};
          font-weight: 900;
          font-size: 11.5px;
          text-transform: uppercase;
          letter-spacing: .6px;
        }

        .iconBox {
          width: 56px;
          height: 56px;
          border-radius: 19px;
          display: grid;
          place-items: center;
          color: ${C.gold2};
          background: rgba(255,216,120,.12);
          border: 1px solid rgba(255,216,120,.18);
        }

        h3 {
          margin: 0 0 6px;
          color: ${C.text};
          font-size: 25px;
          line-height: 1.08;
          letter-spacing: -.5px;
        }

        strong {
          display: block;
          color: ${C.gold2};
          font-size: 13.5px;
          line-height: 1.35;
          margin-bottom: 12px;
        }

        p {
          color: ${C.muted};
          line-height: 1.58;
          margin: 0;
          font-size: 14.5px;
          min-height: 92px;
        }

        .metaGrid {
          display: grid;
          gap: 8px;
          margin: 18px 0;
        }

        .metaGrid span {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          color: ${C.cream};
          font-size: 13px;
          font-weight: 750;
          line-height: 1.35;
        }

        .topicsList {
          display: grid;
          gap: 9px;
          margin-bottom: 22px;
        }

        .topicsList span {
          display: flex;
          align-items: center;
          gap: 8px;
          color: ${C.cream};
          font-size: 13.4px;
          font-weight: 650;
        }

        button {
          width: 100%;
          border: 0;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 18px;
          border-radius: 999px;
          background: ${C.cream};
          color: ${C.wine};
          font-weight: 900;
          box-shadow: 0 12px 30px rgba(0,0,0,.18);
        }
      `}</style>
    </motion.article>
  );
}
