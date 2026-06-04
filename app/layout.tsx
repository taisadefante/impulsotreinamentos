import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://impulsotreinamentos.com.br"),

  title: {
    default:
      "Impulso Treinamentos | Treinamentos Corporativos em Primeiros Socorros e Lei Lucas RJ",
    template: "%s | Impulso Treinamentos",
  },

  description:
    "Treinamentos corporativos presenciais em primeiros socorros, Lei Lucas, saúde ocupacional, saúde mental, segurança no trabalho e bem-estar para empresas, escolas e equipes no Rio de Janeiro.",

  keywords: [
    "Impulso Treinamentos",
    "treinamento primeiros socorros",
    "curso primeiros socorros",
    "treinamento primeiros socorros empresas",
    "treinamento primeiros socorros corporativo",
    "primeiros socorros para empresas",
    "primeiros socorros para escolas",
    "capacitação primeiros socorros",
    "treinamento de emergência para empresas",
    "treinamento de emergência para escolas",
    "Lei Lucas",
    "treinamento Lei Lucas",
    "curso Lei Lucas",
    "capacitação Lei Lucas",
    "Lei Lucas para escolas",
    "treinamento Lei Lucas para professores",
    "treinamento Lei Lucas para creches",
    "saúde ocupacional",
    "treinamento saúde ocupacional",
    "saúde ocupacional para empresas",
    "bem estar corporativo",
    "saúde mental corporativa",
    "treinamento saúde mental empresas",
    "palestra saúde mental corporativa",
    "segurança no trabalho",
    "treinamento segurança do trabalho",
    "capacitação segurança empresarial",
    "treinamento prevenção de acidentes",
    "treinamento cultura de segurança",
    "treinamento empresarial",
    "treinamento corporativo",
    "capacitação corporativa",
    "treinamento para empresas",
    "treinamento para colaboradores",
    "treinamento para equipes",
    "primeiros socorros RJ",
    "curso primeiros socorros RJ",
    "treinamento primeiros socorros RJ",
    "Lei Lucas RJ",
    "curso Lei Lucas RJ",
    "treinamento Lei Lucas RJ",
    "treinamento empresarial RJ",
    "treinamento corporativo RJ",
    "saúde ocupacional RJ",
    "saúde mental corporativa RJ",
    "segurança do trabalho RJ",
    "primeiros socorros Rio de Janeiro",
    "Lei Lucas Rio de Janeiro",
    "treinamento para empresas Rio de Janeiro",
    "treinamento corporativo Rio de Janeiro",
    "curso de primeiros socorros Rio de Janeiro",
    "treinamento para escolas",
    "treinamento para professores",
    "treinamento para creches",
    "capacitação para escolas",
    "treinamento para instituições de ensino",
    "empresa de treinamento corporativo",
    "empresa de primeiros socorros",
    "empresa Lei Lucas",
    "empresa de capacitação corporativa RJ",
    "empresa de treinamento em saúde e segurança",
  ],

  authors: [{ name: "Impulso Treinamentos" }],
  creator: "Impulso Treinamentos",
  publisher: "Impulso Treinamentos",
  category: "Treinamentos Corporativos",

  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
    },
  },

  openGraph: {
    title:
      "Impulso Treinamentos | Conhecimento que prepara. Atitude que salva.",
    description:
      "Treinamentos corporativos em primeiros socorros, Lei Lucas, saúde ocupacional, saúde mental e segurança para empresas e escolas no Rio de Janeiro.",
    url: "https://impulsotreinamentos.com.br",
    siteName: "Impulso Treinamentos",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Impulso Treinamentos - Treinamentos Corporativos em Saúde e Segurança",
      },
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Logo Impulso Treinamentos",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Impulso Treinamentos | Primeiros Socorros, Lei Lucas e Segurança RJ",
    description:
      "Capacitações práticas para empresas, escolas e equipes em primeiros socorros, Lei Lucas, saúde ocupacional e segurança no trabalho.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  verification: {
    google: "",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#170000",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        style={{
          margin: 0,
          background: "#170000",
          color: "#fff7e8",
          minHeight: "100vh",
          overflowX: "hidden",
          fontFamily:
            "Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
