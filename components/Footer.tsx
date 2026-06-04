import { FaWhatsapp } from "react-icons/fa";
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
        aria-label="WhatsApp"
        title="Fale conosco pelo WhatsApp"
        style={{
          position: "fixed",
          right: 24,
          bottom: 24,
          zIndex: 9999,
          width: 68,
          height: 68,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#25D366",
          color: "#fff",
          boxShadow: "0 12px 35px rgba(0,0,0,.35)",
          textDecoration: "none",
          transition: "all .3s ease",
        }}
      >
        <FaWhatsapp size={38} />
      </a>
    </>
  );
}
