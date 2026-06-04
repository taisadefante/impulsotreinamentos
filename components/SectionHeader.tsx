import { C } from "@/data/siteData";

type Props = {
  tag: string;
  title: string;
  centered?: boolean;
};

export default function SectionHeader({ tag, title, centered = false }: Props) {
  return (
    <div
      style={{
        maxWidth: 920,
        margin: centered ? "0 auto 48px" : "0 0 42px",
        textAlign: centered ? "center" : "left",
      }}
    >
      <p
        style={{
          margin: "0 0 14px",
          color: C.gold2,
          fontWeight: 700,
          letterSpacing: 4,
          textTransform: "uppercase",
          fontSize: 12,
        }}
      >
        {tag}
      </p>

      <h2
        style={{
          margin: 0,
          color: C.text,
          fontSize: "clamp(28px, 3vw, 46px)",
          lineHeight: 1.15,
          fontWeight: 700,
          letterSpacing: "-0.5px",
        }}
      >
        {title}
      </h2>
    </div>
  );
}
