import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

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
    "Lei Lucas",
    "treinamento Lei Lucas",
    "saúde ocupacional",
    "treinamento corporativo RJ",
    "primeiros socorros RJ",
    "treinamento para empresas Rio de Janeiro",
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
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${inter.variable} ${jakarta.variable}`}
    >
      <body
        suppressHydrationWarning
        style={{
          margin: 0,
          background: "#170000",
          color: "#fff7e8",
          minHeight: "100vh",
          overflowX: "hidden",
          fontFamily: "var(--font-body)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
