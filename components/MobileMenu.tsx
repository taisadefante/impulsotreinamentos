"use client";
import { C, whatsappLink } from "@/data/siteData";
export default function MobileMenu({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  if (!open) return null;
  const nav = [ ["Início", "#inicio"], ["Sobre", "#sobre"], ["Treinamentos", "#treinamentos"], ["Empresas", "#empresas"], ["Contato", "#contato"] ];
  return <div style={{ position: "fixed", inset: "78px 14px auto", zIndex: 79, padding: 18, borderRadius: 26, background: "rgba(38,0,0,.98)", border: "1px solid rgba(255,216,120,.25)", boxShadow: "0 28px 80px rgba(0,0,0,.45)" }}>
    {nav.map(([label, href]) => <a key={href} onClick={() => setOpen(false)} href={href} style={{ display: "block", padding: "16px 14px", color: C.cream, fontWeight: 900, borderBottom: "1px solid rgba(255,216,120,.1)" }}>{label}</a>)}
    <a href={whatsappLink} target="_blank" style={{ display: "block", marginTop: 14, padding: 16, borderRadius: 18, textAlign: "center", background: `linear-gradient(135deg, ${C.gold}, ${C.gold2})`, color: C.dark, fontWeight: 900 }}>Solicitar proposta</a>
  </div>;
}
