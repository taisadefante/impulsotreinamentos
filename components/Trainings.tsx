"use client";

import { useMemo, useState } from "react";
import { Search, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { trainings, benefits, type Training, type TrainingCategory, C, whatsappLink } from "@/data/siteData";
import SectionHeader from "./SectionHeader";
import TrainingCard from "./TrainingCard";
import TrainingModal from "./TrainingModal";

const filters: Array<"Todos" | TrainingCategory> = [
  "Todos",
  "Empresas",
  "Escolas",
  "Kids",
  "Teen",
  "Impulso 365",
];

export default function Trainings() {
  const [selected, setSelected] = useState<Training | null>(null);
  const [activeFilter, setActiveFilter] = useState<"Todos" | TrainingCategory>("Todos");
  const [search, setSearch] = useState("");

  const featured = trainings.find((item) => item.slug === "impulso-365") ?? trainings[0];

  const filteredTrainings = useMemo(() => {
    const term = search.trim().toLowerCase();

    return trainings.filter((item) => {
      const matchesFilter = activeFilter === "Todos" || item.category === activeFilter;
      const matchesSearch =
        !term ||
        item.title.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        item.label.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term) ||
        item.topics.some((topic) => topic.toLowerCase().includes(term));

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <section
      id="treinamentos"
      className="sectionPad"
      style={{
        padding: "96px 7%",
        background:
          "radial-gradient(circle at 12% 8%, rgba(216,163,63,.15), transparent 28%), radial-gradient(circle at 88% 12%, rgba(161,15,18,.22), transparent 30%), linear-gradient(180deg, rgba(255,244,223,.055), rgba(255,244,223,.025))",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative", zIndex: 2 }}>
        <SectionHeader
          tag="Treinamentos e Programas"
          title="Soluções em prevenção, segurança e desenvolvimento para empresas, escolas e instituições."
          centered
        />

        <div className="trainingHero">
          <div className="trainingHeroText">
            <span className="premiumBadge">
              <Sparkles size={16} /> Programa estratégico
            </span>

            <h3>Impulso Kids, Teen e 365</h3>

            <p>
              Um portfólio completo com primeiros socorros, Lei Lucas, saúde mental,
              prevenção, desenvolvimento socioemocional e programas contínuos para
              fortalecer a cultura de cuidado durante todo o ano.
            </p>

            <div className="heroBullets">
              {["Empresas", "Escolas", "Crianças", "Adolescentes", "Certificado", "Programa anual"].map((item) => (
                <span key={item}>
                  <CheckCircle2 size={16} /> {item}
                </span>
              ))}
            </div>

            <div className="heroActions">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Solicitar proposta <ArrowRight size={18} />
              </a>
              <button type="button" onClick={() => setSelected(featured)}>
                Ver programa destaque
              </button>
            </div>
          </div>

          <div
            className="trainingHeroImage"
            style={{ backgroundImage: `url(${featured.image})` }}
          >
            <div>
              <strong>{featured.title}</strong>
              <span>{featured.subtitle}</span>
            </div>
          </div>
        </div>

        <div className="trainingControls">
          <div className="filters">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={activeFilter === filter ? "active" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <label className="searchBox">
            <Search size={18} />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar palestra ou treinamento..."
            />
          </label>
        </div>

        <div className="counterLine">
          <strong>{filteredTrainings.length}</strong> soluções encontradas
        </div>

        <div className="trainingGrid">
          {filteredTrainings.map((item, i) => (
            <TrainingCard key={item.slug} item={item} index={i} onDetails={setSelected} />
          ))}
        </div>

        {filteredTrainings.length === 0 && (
          <div className="emptyState">
            Nenhum treinamento encontrado. Tente outra categoria ou termo de busca.
          </div>
        )}

        <div className="benefitsBlock">
          <div>
            <span>Por que escolher a Impulso?</span>
            <h3>Treinamentos com conteúdo prático, linguagem acessível e foco em resultado.</h3>
          </div>

          <div className="benefitsGrid">
            {benefits.map((item) => (
              <article key={item.title}>
                <div>{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="finalCta">
          <h3>Quer levar uma palestra ou treinamento para sua empresa ou escola?</h3>
          <p>Solicite uma proposta personalizada de acordo com o público, objetivo, carga horária e formato desejado.</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Falar com a Impulso agora <ArrowRight size={18} />
          </a>
        </div>
      </div>

      <TrainingModal training={selected} onClose={() => setSelected(null)} />

      <style jsx>{`
        .trainingHero {
          margin: 42px 0 32px;
          display: grid;
          grid-template-columns: 1.12fr 0.88fr;
          gap: 26px;
          padding: 28px;
          border-radius: 34px;
          background: linear-gradient(135deg, rgba(91, 7, 7, 0.92), rgba(23, 0, 0, 0.94));
          border: 1px solid rgba(255, 216, 120, 0.24);
          box-shadow: 0 30px 95px rgba(0, 0, 0, 0.32);
          overflow: hidden;
        }

        .trainingHeroText h3 {
          margin: 18px 0 16px;
          color: ${C.text};
          font-size: clamp(36px, 5vw, 68px);
          line-height: 0.95;
          letter-spacing: -1.8px;
          text-transform: uppercase;
        }

        .trainingHeroText p {
          margin: 0;
          max-width: 780px;
          color: ${C.muted};
          font-size: 18px;
          line-height: 1.75;
        }

        .premiumBadge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 14px;
          border-radius: 999px;
          color: ${C.gold2};
          background: rgba(255, 216, 120, 0.1);
          border: 1px solid rgba(255, 216, 120, 0.2);
          font-weight: 900;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }

        .heroBullets {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 24px 0;
        }

        .heroBullets span {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 10px 13px;
          border-radius: 999px;
          background: rgba(255, 244, 223, 0.09);
          color: ${C.cream};
          border: 1px solid rgba(255, 244, 223, 0.12);
          font-size: 14px;
          font-weight: 800;
        }

        .heroActions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .heroActions a,
        .heroActions button,
        .finalCta a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: 0;
          cursor: pointer;
          padding: 14px 20px;
          border-radius: 999px;
          font-weight: 900;
          text-decoration: none;
        }

        .heroActions a,
        .finalCta a {
          background: linear-gradient(135deg, ${C.gold}, ${C.gold2});
          color: ${C.dark};
          box-shadow: 0 16px 34px rgba(216, 163, 63, 0.24);
        }

        .heroActions button {
          background: rgba(255, 244, 223, 0.1);
          color: ${C.cream};
          border: 1px solid rgba(255, 244, 223, 0.16);
        }

        .trainingHeroImage {
          min-height: 420px;
          border-radius: 28px;
          background-size: cover;
          background-position: center;
          border: 1px solid rgba(255, 255, 255, 0.18);
          position: relative;
          overflow: hidden;
        }

        .trainingHeroImage::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 35%, rgba(0, 0, 0, 0.82));
        }

        .trainingHeroImage div {
          position: absolute;
          left: 22px;
          right: 22px;
          bottom: 22px;
          color: white;
        }

        .trainingHeroImage strong {
          display: block;
          font-size: 26px;
          line-height: 1.1;
        }

        .trainingHeroImage span {
          display: block;
          margin-top: 7px;
          color: rgba(255, 255, 255, 0.78);
          font-weight: 700;
        }

        .trainingControls {
          display: grid;
          grid-template-columns: 1fr minmax(260px, 360px);
          gap: 16px;
          align-items: center;
          margin: 22px 0 14px;
        }

        .filters {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .filters button {
          border: 1px solid rgba(255, 216, 120, 0.18);
          background: rgba(255, 244, 223, 0.07);
          color: ${C.cream};
          padding: 11px 16px;
          border-radius: 999px;
          font-weight: 900;
          cursor: pointer;
        }

        .filters button.active {
          background: linear-gradient(135deg, ${C.gold}, ${C.gold2});
          color: ${C.dark};
          border-color: transparent;
        }

        .searchBox {
          height: 48px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 14px;
          border-radius: 999px;
          border: 1px solid rgba(255, 216, 120, 0.22);
          background: rgba(255, 244, 223, 0.08);
          color: ${C.gold2};
        }

        .searchBox input {
          width: 100%;
          border: 0;
          outline: 0;
          background: transparent;
          color: ${C.cream};
          font-weight: 700;
        }

        .searchBox input::placeholder {
          color: rgba(255, 244, 223, 0.58);
        }

        .counterLine {
          margin: 8px 0 18px;
          color: ${C.muted};
          font-weight: 700;
        }

        .counterLine strong {
          color: ${C.gold2};
        }

        .trainingGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 22px;
          margin-top: 8px;
        }

        .emptyState {
          margin-top: 24px;
          padding: 22px;
          border-radius: 22px;
          text-align: center;
          background: rgba(255, 244, 223, 0.08);
          color: ${C.cream};
          font-weight: 800;
        }

        .benefitsBlock {
          margin-top: 54px;
          padding: 30px;
          border-radius: 34px;
          background: rgba(255, 244, 223, 0.075);
          border: 1px solid rgba(255, 216, 120, 0.18);
        }

        .benefitsBlock > div:first-child span {
          color: ${C.gold2};
          text-transform: uppercase;
          font-weight: 900;
          font-size: 13px;
          letter-spacing: 0.9px;
        }

        .benefitsBlock h3 {
          color: ${C.text};
          font-size: clamp(26px, 3vw, 42px);
          max-width: 850px;
          line-height: 1.08;
          margin: 10px 0 24px;
        }

        .benefitsGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .benefitsGrid article {
          padding: 20px;
          border-radius: 24px;
          background: rgba(91, 7, 7, 0.35);
          border: 1px solid rgba(255, 216, 120, 0.14);
        }

        .benefitsGrid article div {
          color: ${C.gold2};
        }

        .benefitsGrid h4 {
          color: ${C.text};
          margin: 12px 0 8px;
          font-size: 18px;
        }

        .benefitsGrid p {
          color: ${C.muted};
          margin: 0;
          line-height: 1.55;
        }

        .finalCta {
          margin-top: 34px;
          padding: 34px;
          border-radius: 34px;
          text-align: center;
          background: linear-gradient(135deg, rgba(216, 163, 63, 0.22), rgba(91, 7, 7, 0.66));
          border: 1px solid rgba(255, 216, 120, 0.24);
        }

        .finalCta h3 {
          margin: 0 0 10px;
          color: ${C.text};
          font-size: clamp(26px, 3.5vw, 44px);
          line-height: 1.05;
        }

        .finalCta p {
          margin: 0 auto 22px;
          max-width: 760px;
          color: ${C.muted};
          line-height: 1.7;
          font-size: 17px;
        }

        @media (max-width: 1180px) {
          .trainingGrid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 980px) {
          .trainingHero,
          .trainingControls {
            grid-template-columns: 1fr;
          }

          .trainingHeroImage {
            min-height: 320px;
          }

          .trainingGrid,
          .benefitsGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          section {
            padding: 72px 5% !important;
          }

          .trainingHero,
          .benefitsBlock,
          .finalCta {
            padding: 20px;
            border-radius: 26px;
          }

          .trainingHeroImage {
            min-height: 260px;
          }

          .trainingGrid,
          .benefitsGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
