import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const SITE_URL = "https://www.impulsotreinamentos.com.br";
const GOOGLE_ANALYTICS_ID = "G-7H7E3LGWDJ";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "Impulso Treinamentos | Primeiros Socorros, Lei Lucas e Treinamentos Corporativos RJ",
    template: "%s | Impulso Treinamentos",
  },

  description:
    "Treinamentos corporativos presenciais em primeiros socorros, Lei Lucas, saúde ocupacional, saúde mental, segurança do trabalho e bem-estar para empresas, escolas e equipes no Rio de Janeiro.",

  applicationName: "Impulso Treinamentos",

  keywords: [
    "Impulso Treinamentos",
    "treinamentos corporativos",
    "treinamento corporativo RJ",
    "treinamento para empresas",
    "treinamento para escolas",
    "treinamento primeiros socorros",
    "curso de primeiros socorros",
    "primeiros socorros para empresas",
    "primeiros socorros para escolas",
    "primeiros socorros RJ",
    "Lei Lucas",
    "curso Lei Lucas",
    "treinamento Lei Lucas",
    "treinamento Lei Lucas RJ",
    "saúde ocupacional",
    "saúde mental nas empresas",
    "segurança do trabalho",
    "treinamento segurança do trabalho",
    "bem-estar corporativo",
    "capacitação de equipes",
    "treinamento presencial Rio de Janeiro",
  ],

  authors: [
    {
      name: "Impulso Treinamentos",
      url: SITE_URL,
    },
  ],

  creator: "Impulso Treinamentos",
  publisher: "Impulso Treinamentos",
  category: "Treinamentos Corporativos",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      "x-default": "/",
    },
  },

  openGraph: {
    title:
      "Impulso Treinamentos | Conhecimento que prepara. Atitude que salva.",
    description:
      "Treinamentos corporativos em primeiros socorros, Lei Lucas, saúde ocupacional, saúde mental, segurança do trabalho e bem-estar para empresas e escolas no Rio de Janeiro.",
    url: SITE_URL,
    siteName: "Impulso Treinamentos",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        secureUrl: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Impulso Treinamentos — treinamentos corporativos em saúde e segurança",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Impulso Treinamentos | Primeiros Socorros, Lei Lucas e Segurança RJ",
    description:
      "Capacitações práticas para empresas, escolas e equipes em primeiros socorros, Lei Lucas, saúde ocupacional e segurança do trabalho.",
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

  /*
   * Preencha somente depois de cadastrar o site no Google Search Console.
   * Não coloque aqui o ID G-7H7E3LGWDJ.
   *
   * Exemplo:
   * verification: {
   *   google: "codigo-fornecido-pelo-search-console",
   * },
   */

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  other: {
    "geo.region": "BR-RJ",
    "geo.placename": "Rio de Janeiro",
    language: "pt-BR",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#170000",
  colorScheme: "dark",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Impulso Treinamentos",
  alternateName: "Impulso Treinamentos Corporativos",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
    width: 512,
    height: 512,
  },
  image: `${SITE_URL}/og-image.jpg`,
  description:
    "Treinamentos corporativos presenciais em primeiros socorros, Lei Lucas, saúde ocupacional, saúde mental, segurança do trabalho e bem-estar.",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Rio de Janeiro",
  },
  knowsAbout: [
    "Primeiros socorros",
    "Lei Lucas",
    "Saúde ocupacional",
    "Saúde mental",
    "Segurança do trabalho",
    "Bem-estar corporativo",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Impulso Treinamentos",
  description:
    "Treinamentos corporativos em saúde, segurança, primeiros socorros e Lei Lucas no Rio de Janeiro.",
  inLanguage: "pt-BR",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${inter.variable} ${jakarta.variable}`}
    >
      <head>
        {/* Dados estruturados da organização */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />

        {/* Dados estruturados do site */}
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>

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

        {/* Google Analytics 4 */}
        <Script
          id="google-analytics-script"
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];

              function gtag() {
                window.dataLayer.push(arguments);
              }

              gtag('js', new Date());
              gtag('config', '${GOOGLE_ANALYTICS_ID}', {
                page_path: window.location.pathname,
                send_page_view: true
              });
            `,
          }}
        />
      </body>
    </html>
  );
}