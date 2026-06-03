import type { ReactNode } from "react";
import SectionHeader from "./SectionHeader";
export default function Section({ id, tag, title, children }: { id?: string; tag: string; title: string; children: ReactNode }) {
  return <section id={id} className="sectionPad" style={{ padding: "96px 7%" }}><SectionHeader tag={tag} title={title} /><>{children}</></section>;
}
