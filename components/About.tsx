import Image from "next/image";
import { C } from "@/data/siteData";
import Section from "./Section";
import Reveal from "./Reveal";
export default function About() {
  return (
    <Section
      id="sobre"
      tag="Quem somos"
      title="Cuidado, prevenção e conhecimento para transformar ambientes."
    >
      <div
        className="aboutGrid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26 }}
      >
        <Reveal>
          <div
            style={{
              padding: 34,
              borderRadius: 32,
              background: C.cream,
              color: C.dark,
              boxShadow: "0 28px 90px rgba(0,0,0,.25)",
            }}
          >
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
            <strong style={{ color: C.wine, fontSize: 18 }}>
              Capacitar pessoas é gerar impacto, promover segurança e salvar
              vidas.
            </strong>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div
            style={{
              padding: 30,
              borderRadius: 32,
              background: "rgba(255,244,223,.08)",
              border: "1px solid rgba(255,216,120,.22)",
            }}
          >
            <h3 style={{ margin: "0 0 20px", fontSize: 28 }}>
              Responsáveis técnicas
            </h3>
            <div
              className="peopleGrid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 18,
              }}
            >
              <Person
                name="Annik Leite"
                coren="COREN RJ: 361.734"
                img="/images/aniki.png"
              />
              <Person
                name="Juliana Amorim"
                coren="COREN RJ: 681.007"
                img="/images/juliana.png"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
function Person({
  name,
  coren,
  img,
}: {
  name: string;
  coren: string;
  img: string;
}) {
  return (
    <div
      style={{
        padding: 18,
        borderRadius: 24,
        background: "rgba(255,244,223,.08)",
        border: "1px solid rgba(255,216,120,.16)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: 118,
          height: 118,
          borderRadius: "50%",
          overflow: "hidden",
          margin: "0 auto 14px",
          background: C.cream,
          border: `2px solid ${C.gold}`,
        }}
      >
        <Image
          src={img}
          alt={name}
          width={118}
          height={118}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <strong style={{ color: C.text, fontSize: 18 }}>{name}</strong>
      <span
        style={{
          display: "block",
          marginTop: 5,
          color: C.gold2,
          fontWeight: 800,
          fontSize: 13,
        }}
      >
        {coren}
      </span>
    </div>
  );
}
const p = { fontSize: 18, lineHeight: 1.75, color: "#4a1616" };
