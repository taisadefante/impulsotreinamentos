"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { C, whatsappLink } from "@/data/siteData";

type HeaderProps = {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
};

export default function Header({ menuOpen, setMenuOpen }: HeaderProps) {
  const nav = [
    ["Início", "#inicio"],
    ["Sobre", "#sobre"],
    ["Treinamentos", "#treinamentos"],
    ["Empresas", "#empresas"],
    ["Contato", "#contato"],
  ];

  const goldGradient =
    "linear-gradient(135deg, " + C.gold + ", " + C.gold2 + ")";

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        height: 82,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 18,
        padding: "0 7%",
        background: "rgba(23,0,0,0.96)",
        borderBottom: "1px solid rgba(255,216,120,.14)",
      }}
    >
      <a href="#inicio" style={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/logo.png"
          alt="Impulso Treinamentos"
          width={150}
          height={60}
          priority
          style={{
            width: "150px",
            maxHeight: 62,
            objectFit: "contain",
            display: "block",
          }}
        />
      </a>

      <nav
        className="desktopNav"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          padding: 6,
          borderRadius: 999,
          background: "rgba(255,255,255,.03)",
          border: "1px solid rgba(255,216,120,.18)",
        }}
      >
        {nav.map(([label, href]) => (
          <a
            key={href}
            href={href}
            style={{
              color: C.cream,
              textDecoration: "none",
              padding: "9px 14px",
              borderRadius: 999,
              fontWeight: 700,
              fontSize: 13,
            }}
          >
            {label}
          </a>
        ))}
      </nav>

      <a
        className="desktopCta"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: "11px 18px",
          borderRadius: 999,
          textDecoration: "none",
          background: goldGradient,
          color: "#300000",
          fontWeight: 900,
          fontSize: 13,
          whiteSpace: "nowrap",
        }}
      >
        Solicitar Proposta
      </a>

      <button
        className="mobileMenuBtn"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none",
          width: 44,
          height: 44,
          borderRadius: 12,
          border: "1px solid rgba(255,216,120,.2)",
          background: "rgba(255,255,255,.04)",
          color: "#fff",
          cursor: "pointer",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: 82,
            left: 0,
            width: "100%",
            background: "#170000",
            borderBottom: "1px solid rgba(255,216,120,.15)",
            padding: "16px 7%",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "#fff7e8",
                textDecoration: "none",
                padding: "10px 0",
                fontWeight: 700,
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
