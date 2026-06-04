"use client";

import { useState } from "react";
import { trainings, type Training } from "@/data/siteData";
import SectionHeader from "./SectionHeader";
import TrainingCard from "./TrainingCard";
import TrainingModal from "./TrainingModal";

export default function Trainings() {
  const [selected, setSelected] = useState<Training | null>(null);

  return (
    <section
      id="treinamentos"
      className="sectionPad"
      style={{
        padding: "96px 7%",
        background: "rgba(255,244,223,.045)",
      }}
    >
      <SectionHeader
        tag="Treinamentos"
        title="Planos e palestras para cada necessidade da sua empresa."
        centered
      />

      <div
        className="trainingGrid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 22,
          marginTop: 8,
        }}
      >
        {trainings.map((item, i) => (
          <TrainingCard
            key={item.slug}
            item={item}
            index={i}
            onDetails={setSelected}
          />
        ))}
      </div>

      <TrainingModal training={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
