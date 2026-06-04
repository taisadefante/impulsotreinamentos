"use client";

import { motion } from "framer-motion";
import { C, benefits } from "@/data/siteData";

export default function Benefits() {
  return (
    <section
      id="empresas"
      style={{
        padding: "96px 7%",
        background: "rgba(255,244,223,.025)",
      }}
    >
      <style>{styles}</style>

      <div
        style={{
          textAlign: "center",
          maxWidth: 980,
          margin: "0 auto 54px",
        }}
      >
        <p
          style={{
            color: C.gold2,
            fontWeight: 900,
            letterSpacing: 4,
            textTransform: "uppercase",
            margin: "0 0 14px",
            fontSize: 13,
          }}
        >
          Para empresas
        </p>

        <h2
          style={{
            margin: 0,
            color: C.text,
            fontSize: "clamp(28px, 3vw, 46px)",
            lineHeight: 1.15,
            fontWeight: 700,
            letterSpacing: "-0.5px",
            maxWidth: 900,
            marginInline: "auto",
          }}
        >
          Empresas fortes não esperam emergências acontecerem.
        </h2>
      </div>

      <div className="benefitGrid">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 45, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              delay: i * 0.08,
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            style={{
              position: "relative",
              overflow: "hidden",
              minHeight: 245,
              padding: 30,
              borderRadius: 34,
              background:
                "linear-gradient(145deg, rgba(255,244,223,.98), rgba(244,226,191,.95))",
              color: C.dark,
              boxShadow: "0 24px 70px rgba(0,0,0,.20)",
              border: "1px solid rgba(255,216,120,.35)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -55,
                right: -55,
                width: 130,
                height: 130,
                borderRadius: "50%",
                background: "rgba(91,7,7,.08)",
              }}
            />

            <div
              style={{
                width: 66,
                height: 66,
                borderRadius: 22,
                display: "grid",
                placeItems: "center",
                marginBottom: 22,
                background:
                  "linear-gradient(135deg, rgba(91,7,7,.12), rgba(217,164,65,.18))",
                color: C.red,
                border: "1px solid rgba(91,7,7,.12)",
              }}
            >
              {b.icon}
            </div>

            <h3
              style={{
                position: "relative",
                zIndex: 2,
                fontSize: 23,
                lineHeight: 1.2,
                margin: "0 0 12px",
                color: C.dark,
              }}
            >
              {b.title}
            </h3>

            <p
              style={{
                position: "relative",
                zIndex: 2,
                color: "#5c2a2a",
                lineHeight: 1.7,
                fontSize: 15,
                margin: 0,
              }}
            >
              {b.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const styles = `
.benefitGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}

@media (max-width: 1100px) {
  .benefitGrid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 620px) {
  .benefitGrid {
    grid-template-columns: 1fr !important;
  }
}
`;
