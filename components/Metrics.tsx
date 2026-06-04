import { C } from "@/data/siteData";
import Reveal from "./Reveal";

export default function Metrics() {
  const data = [
    ["100%", "Treinamentos práticos"],
    ["8+", "Soluções corporativas"],
    ["1-2", "Dias de imersão"],
    ["RJ", "Atendimento empresarial"],
  ];

  return (
    <section
      className="metricsGrid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: 22,

        /* ESPAÇO ACIMA */
        padding: "70px 7% 80px",

        position: "relative",
        zIndex: 5,
      }}
    >
      {data.map(([n, t], i) => (
        <Reveal key={n} delay={i * 0.06}>
          <div
            style={{
              padding: "28px 24px",
              borderRadius: 26,
              background: "rgba(255,244,223,.075)",
              border: "1px solid rgba(255,216,120,.20)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 20px 50px rgba(0,0,0,.18)",
              transition: ".3s",
              cursor: "default",
            }}
          >
            <strong
              style={{
                display: "block",
                color: C.gold2,
                fontSize: 42,
                lineHeight: 1,
                marginBottom: 8,
                fontWeight: 900,
              }}
            >
              {n}
            </strong>

            <span
              style={{
                color: C.muted,
                fontSize: 15,
                lineHeight: 1.4,
              }}
            >
              {t}
            </span>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
