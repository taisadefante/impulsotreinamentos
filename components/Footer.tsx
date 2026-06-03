import { MessageCircle } from "lucide-react";
import { C, whatsappLink } from "@/data/siteData";

export default function Footer() {
  return (
    <>
      <footer
        style={{
          padding: "34px 7%",
          borderTop: "1px solid rgba(255,216,120,.18)",
          textAlign: "center",
          color: C.muted,
          background: "#140000",
        }}
      >
        <strong
          style={{
            color: C.text,
            display: "block",
            marginBottom: 10,
            fontSize: 20,
          }}
        >
          Impulso Treinamentos
        </strong>

        <p
          style={{
            margin: 0,
            marginBottom: 20,
          }}
        >
          Conhecimento que prepara. Atitude que salva.
        </p>

        <div
          style={{
            width: 80,
            height: 1,
            background: "rgba(255,216,120,.3)",
            margin: "0 auto 20px",
          }}
        />

        <p
          style={{
            margin: 0,
            fontSize: 14,
            color: "#b8a88a",
          }}
        >
          Desenvolvido por{" "}
          <a
            href="https://defan.com.br"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#FFD878",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Defan Soluções Digitais
          </a>
        </p>
      </footer>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          right: 20,
          bottom: 20,
          zIndex: 90,
          width: 62,
          height: 62,
          borderRadius: "50%",
          display: "grid",
          placeItems: "center",
          background: "#25D366",
          color: "#fff",
          boxShadow: "0 20px 60px rgba(0,0,0,.42)",
        }}
      >
        <MessageCircle size={28} />
      </a>
    </>
  );
}
