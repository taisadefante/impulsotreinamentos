"use client";

import { CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Training } from "@/data/siteData";
import { C } from "@/data/siteData";

const shineAnimation = `
@keyframes cardShine {
  0% { left: -90%; opacity: 0; }
  15% { opacity: 1; }
  45% { left: 130%; opacity: 1; }
  100% { left: 130%; opacity: 0; }
}
`;

type TrainingCardProps = {
  item: Training;
  index: number;
  onDetails: (training: Training) => void;
};

export default function TrainingCard({
  item,
  index,
  onDetails,
}: TrainingCardProps) {
  return (
    <>
      <style>{shineAnimation}</style>

      <motion.article
        initial={{
          opacity: 0,
          y: 70,
          rotateX: -18,
          scale: 0.94,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
        }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          delay: index * 0.18,
          duration: 1.35,
          ease: [0.16, 1, 0.3, 1],
        }}
        whileHover={{
          y: -12,
          scale: 1.018,
          rotateZ: -0.5,
        }}
        style={{
          position: "relative",
          overflow: "hidden",
          padding: 30,
          borderRadius: 34,
          minHeight: 390,
          background:
            "linear-gradient(145deg, rgba(255,244,223,.14), rgba(88,15,15,.55))",
          border: "1px solid rgba(255,216,120,.28)",
          boxShadow: "0 28px 90px rgba(0,0,0,.30)",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top left, rgba(255,216,120,.18), transparent 38%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: "-90%",
            width: "70%",
            height: "100%",
            background:
              "linear-gradient(90deg, transparent, rgba(255,216,120,.18), transparent)",
            animation: "cardShine 5.5s infinite",
            animationDelay: `${index * 0.4}s`,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <motion.div
            whileHover={{ rotate: 8, scale: 1.08 }}
            style={{
              width: 68,
              height: 68,
              borderRadius: 22,
              display: "grid",
              placeItems: "center",
              background:
                "linear-gradient(135deg, rgba(255,216,120,.22), rgba(255,255,255,.05))",
              color: C.gold2,
              border: "1px solid rgba(255,216,120,.22)",
            }}
          >
            {item.icon}
          </motion.div>

          <span
            style={{
              color: C.gold2,
              fontWeight: 900,
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: 0.5,
            }}
          >
            {item.label}
          </span>
        </div>

        <div style={{ position: "relative", zIndex: 2 }}>
          <h3
            style={{
              margin: "24px 0 10px",
              fontSize: 28,
              color: C.text,
              lineHeight: 1.1,
            }}
          >
            {item.title}
          </h3>

          <p
            style={{
              color: C.muted,
              lineHeight: 1.65,
              minHeight: 78,
              margin: 0,
            }}
          >
            {item.description}
          </p>

          <div
            style={{
              display: "grid",
              gap: 10,
              margin: "24px 0",
            }}
          >
            {item.topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                  color: C.cream,
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                <CheckCircle2 size={16} color={C.gold2} />
                {topic}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={() => onDetails(item)}
            style={{
              cursor: "pointer",
              border: 0,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "13px 20px",
              borderRadius: 999,
              background: C.cream,
              color: C.wine,
              fontWeight: 900,
              boxShadow: "0 12px 30px rgba(0,0,0,.18)",
            }}
          >
            Ver detalhes <ChevronRight size={17} />
          </button>
        </div>
      </motion.article>
    </>
  );
}
