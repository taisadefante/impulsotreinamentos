import { C } from "@/data/siteData";
export default function SectionHeader({ tag, title, centered = false }: { tag: string; title: string; centered?: boolean }) {
  return <div style={{ maxWidth: 920, margin: centered ? "0 auto 48px" : "0 0 42px", textAlign: centered ? "center" : "left" }}><p style={{ margin: "0 0 12px", color: C.gold2, fontWeight: 900, letterSpacing: 3, textTransform: "uppercase" }}>{tag}</p><h2 style={{ margin: 0, color: C.text, fontSize: "clamp(34px,5vw,58px)", lineHeight: 1 }}>{title}</h2></div>;
}
