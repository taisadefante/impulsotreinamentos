"use client";

import Script from "next/script";
import { useState } from "react";
import { C } from "@/data/siteData";
import GlobalStyle from "@/components/GlobalStyle";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import About from "@/components/About";
import Trainings from "@/components/Trainings";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import KnowledgeAssessment from "@/components/KnowledgeAssessment";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://impulsotreinamentos.com.br/#organization",
      name: "Impulso Treinamentos",
      legalName: "Impulso Treinamentos",
      url: "https://impulsotreinamentos.com.br",
      logo: "https://impulsotreinamentos.com.br/logo.png",
      image: "https://impulsotreinamentos.com.br/og-image.jpg",
      description:
        "Treinamentos corporativos em primeiros socorros, Lei Lucas, saúde ocupacional, saúde mental e segurança no trabalho.",
      email: "informacoes@impulsotreinamentos.com.br",
      telephone: "+55 21 97479-6718",
      sameAs: ["https://instagram.com/contato.impulsotreinamentos"],
      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "Rio de Janeiro",
        },
        {
          "@type": "Country",
          name: "Brasil",
        },
      ],
      knowsAbout: [
        "Primeiros socorros",
        "Lei Lucas",
        "Saúde ocupacional",
        "Saúde mental corporativa",
        "Segurança no trabalho",
        "Treinamentos corporativos",
        "Prevenção de acidentes",
        "Capacitação de equipes",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://impulsotreinamentos.com.br/#localbusiness",
      name: "Impulso Treinamentos",
      image: "https://impulsotreinamentos.com.br/og-image.jpg",
      url: "https://impulsotreinamentos.com.br",
      telephone: "+55 21 97479-6718",
      email: "informacoes@impulsotreinamentos.com.br",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressRegion: "RJ",
        addressCountry: "BR",
      },
      description:
        "Empresa especializada em treinamentos presenciais para empresas, escolas e equipes nas áreas de primeiros socorros, Lei Lucas, saúde e segurança.",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://impulsotreinamentos.com.br/#website",
      url: "https://impulsotreinamentos.com.br",
      name: "Impulso Treinamentos",
      publisher: {
        "@id": "https://impulsotreinamentos.com.br/#organization",
      },
      inLanguage: "pt-BR",
    },
    {
      "@type": "WebPage",
      "@id": "https://impulsotreinamentos.com.br/#webpage",
      url: "https://impulsotreinamentos.com.br",
      name: "Impulso Treinamentos | Treinamentos Corporativos em Primeiros Socorros e Lei Lucas RJ",
      isPartOf: {
        "@id": "https://impulsotreinamentos.com.br/#website",
      },
      about: {
        "@id": "https://impulsotreinamentos.com.br/#organization",
      },
      description:
        "Página institucional da Impulso Treinamentos, especializada em capacitações corporativas de primeiros socorros, Lei Lucas, saúde ocupacional, saúde mental e segurança no trabalho.",
      inLanguage: "pt-BR",
    },
    {
      "@type": "Service",
      "@id": "https://impulsotreinamentos.com.br/#service-primeiros-socorros",
      name: "Treinamento de Primeiros Socorros para Empresas",
      provider: {
        "@id": "https://impulsotreinamentos.com.br/#organization",
      },
      areaServed: "Rio de Janeiro",
      serviceType: "Treinamento de primeiros socorros",
      description:
        "Capacitação prática para empresas, escolas e equipes aprenderem a agir com segurança em situações de emergência.",
    },
    {
      "@type": "Service",
      "@id": "https://impulsotreinamentos.com.br/#service-lei-lucas",
      name: "Treinamento Lei Lucas RJ",
      provider: {
        "@id": "https://impulsotreinamentos.com.br/#organization",
      },
      areaServed: "Rio de Janeiro",
      serviceType: "Treinamento Lei Lucas",
      description:
        "Treinamento voltado para escolas, creches, professores e equipes que atuam com crianças, com foco em primeiros socorros e prevenção.",
    },
    {
      "@type": "Service",
      "@id": "https://impulsotreinamentos.com.br/#service-saude-mental",
      name: "Treinamento e Palestra de Saúde Mental Corporativa",
      provider: {
        "@id": "https://impulsotreinamentos.com.br/#organization",
      },
      areaServed: "Rio de Janeiro",
      serviceType: "Saúde mental corporativa",
      description:
        "Treinamentos e palestras voltados para bem-estar, prevenção, acolhimento e saúde mental no ambiente corporativo.",
    },
    {
      "@type": "Course",
      "@id": "https://impulsotreinamentos.com.br/#course-primeiros-socorros",
      name: "Curso de Primeiros Socorros Corporativo",
      description:
        "Curso prático de primeiros socorros para empresas, escolas e equipes, com simulações, prevenção e orientação para situações reais.",
      provider: {
        "@type": "Organization",
        name: "Impulso Treinamentos",
        sameAs: "https://impulsotreinamentos.com.br",
      },
      educationalCredentialAwarded: "Certificado de participação",
      inLanguage: "pt-BR",
    },
    {
      "@type": "Course",
      "@id": "https://impulsotreinamentos.com.br/#course-lei-lucas",
      name: "Curso Lei Lucas",
      description:
        "Capacitação Lei Lucas para escolas, creches e espaços infantis, com foco em primeiros socorros, engasgo, RCP e acionamento do socorro.",
      provider: {
        "@type": "Organization",
        name: "Impulso Treinamentos",
        sameAs: "https://impulsotreinamentos.com.br",
      },
      educationalCredentialAwarded: "Certificado de participação",
      inLanguage: "pt-BR",
    },
    {
      "@type": "Person",
      "@id": "https://impulsotreinamentos.com.br/#anniki-leite",
      name: "Annik Leite",
      jobTitle: "Enfermeira Responsável Técnica",
      worksFor: {
        "@id": "https://impulsotreinamentos.com.br/#organization",
      },
    },
    {
      "@type": "Person",
      "@id": "https://impulsotreinamentos.com.br/#juliana-amorim",
      name: "Juliana Amorim",
      jobTitle: "Enfermeira Responsável Técnica",
      worksFor: {
        "@id": "https://impulsotreinamentos.com.br/#organization",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://impulsotreinamentos.com.br/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "A Impulso Treinamentos realiza treinamento de primeiros socorros?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. A Impulso Treinamentos realiza capacitações práticas em primeiros socorros para empresas, escolas e equipes.",
          },
        },
        {
          "@type": "Question",
          name: "Vocês oferecem treinamento da Lei Lucas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. A empresa oferece treinamento da Lei Lucas com foco em escolas, espaços infantis e equipes que lidam com crianças.",
          },
        },
        {
          "@type": "Question",
          name: "Os treinamentos podem ser personalizados?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. As propostas podem ser adaptadas conforme o perfil da empresa, quantidade de participantes e objetivo do treinamento.",
          },
        },
        {
          "@type": "Question",
          name: "Os treinamentos são indicados para empresas no Rio de Janeiro?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. A Impulso Treinamentos atende empresas, escolas e equipes no Rio de Janeiro com capacitações presenciais e personalizadas.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Script
        id="json-ld-impulso"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <main
        style={{
          minHeight: "100vh",
          fontFamily: "Inter, Arial, sans-serif",
          background: `radial-gradient(circle at top left, ${C.wine2} 0%, ${C.bg2} 34%, ${C.bg} 100%)`,
          color: C.text,
          overflowX: "hidden",
        }}
      >
        <GlobalStyle />
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu open={menuOpen} setOpen={setMenuOpen} />
        <Hero />
        <Metrics />
        <About />
        <Trainings />
        <KnowledgeAssessment />
        <Benefits />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
