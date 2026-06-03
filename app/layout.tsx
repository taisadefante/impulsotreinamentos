import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://impulsotreinamentos.com.br"),

  title: {
    default:
      "Impulso Treinamentos | Conhecimento que prepara. Atitude que salva.",
    template: "%s | Impulso Treinamentos",
  },

  description:
    "Treinamentos corporativos de primeiros socorros, Lei Lucas, saúde ocupacional, saúde mental, segurança no trabalho e bem-estar para empresas.",

  keywords: [
    "Impulso Treinamentos",
    "primeiros socorros RJ",
    "Lei Lucas RJ",
    "treinamento corporativo",
    "saúde mental corporativa",
    "saúde ocupacional",
    "segurança no trabalho",
  ],

  openGraph: {
    title: "Impulso Treinamentos",
    description: "Conhecimento que prepara. Atitude que salva.",
    url: "https://impulsotreinamentos.com.br",
    siteName: "Impulso Treinamentos",
    locale: "pt_BR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
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
