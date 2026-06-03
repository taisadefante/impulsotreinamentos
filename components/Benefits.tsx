import { C, benefits } from "@/data/siteData";
import Section from "./Section";
import Reveal from "./Reveal";
export default function Benefits() { return <Section id="empresas" tag="Para empresas" title="Empresas fortes não esperam emergências acontecerem."><div className="benefitGrid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>{benefits.map((b, i) => <Reveal key={b.title} delay={i*.06}><div style={{ minHeight: 210, padding: 26, borderRadius: 28, background: C.cream, color: C.dark }}><div style={{ color: C.red }}>{b.icon}</div><h3 style={{ fontSize: 21 }}>{b.title}</h3><p style={{ color: "#5c2a2a", lineHeight: 1.6 }}>{b.text}</p></div></Reveal>)}</div></Section>; }
