"use client";
import { X, CheckCircle2, MessageCircle } from "lucide-react";
import type { Training } from "@/data/siteData";
import { C, whatsappLink } from "@/data/siteData";
export default function TrainingModal({ training, onClose }: { training: Training | null; onClose: () => void }) {
  if (!training) return null;
  return <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(0,0,0,.72)", backdropFilter: "blur(10px)", display: "grid", placeItems: "center", padding: 16 }}>
    <div className="modalCard" onClick={(e) => e.stopPropagation()} style={{ width: "min(860px, 94vw)", maxHeight: "84vh", overflow: "auto", borderRadius: 34, padding: 36, background: `linear-gradient(145deg, ${C.cream}, ${C.cream2})`, color: C.dark, boxShadow: "0 30px 120px rgba(0,0,0,.55)", border: `1px solid ${C.gold}` }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 18, alignItems: "flex-start" }}>
        <div><span style={{ display: "inline-block", padding: "8px 12px", borderRadius: 999, background: C.wine, color: C.gold2, fontWeight: 900, fontSize: 12 }}>{training.label} • {training.duration}</span><h2 style={{ margin: "16px 0 10px", fontSize: "clamp(30px,5vw,48px)", lineHeight: 1 }}>{training.title}</h2><p style={{ fontSize: 18, lineHeight: 1.7, color: "#5d2727" }}>{training.description}</p></div>
        <button onClick={onClose} style={{ border: 0, background: C.wine, color: C.cream, width: 44, height: 44, borderRadius: 14, cursor: "pointer" }}><X /></button>
      </div>
      <h3 style={{ marginTop: 22 }}>Conteúdo abordado</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 12 }}>{training.topics.map((t) => <div key={t} style={{ display: "flex", gap: 10, alignItems: "center", padding: 12, borderRadius: 16, background: "rgba(91,7,7,.08)", fontWeight: 800 }}><CheckCircle2 size={18} color={C.wine}/>{t}</div>)}</div>
      <a href={whatsappLink} target="_blank" style={{ marginTop: 26, display: "inline-flex", alignItems: "center", gap: 10, padding: "15px 22px", borderRadius: 999, background: `linear-gradient(135deg, ${C.gold}, ${C.gold2})`, color: C.dark, fontWeight: 900 }}><MessageCircle size={20}/> Pedir orçamento desse treinamento</a>
    </div>
  </div>;
}
