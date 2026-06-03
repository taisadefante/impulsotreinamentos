import {
  Baby,
  Brain,
  Building2,
  HeartPulse,
  Mars,
  ShieldCheck,
  Star,
  Users,
  Venus,
} from "lucide-react";
import type { ReactNode } from "react";

export const C = {
  bg: "#170000",
  bg2: "#2a0000",
  wine: "#5b0707",
  wine2: "#800c0c",
  red: "#a10f12",
  gold: "#d8a33f",
  gold2: "#ffd878",
  cream: "#fff4df",
  cream2: "#f8e8ca",
  text: "#fff7e8",
  muted: "#e7cda3",
  dark: "#260000",
};

export const whatsappNumber = "5521974796718";
export const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Olá! Vim pelo site da Impulso Treinamentos e gostaria de solicitar uma proposta."
)}`;
export const instagramLink = "https://instagram.com/contato.impulsotreinamentos";

export type Training = {
  slug: string;
  icon: ReactNode;
  label: string;
  title: string;
  duration: string;
  description: string;
  topics: string[];
};

export const trainings: Training[] = [
  { slug: "impulso-essencial", icon: <ShieldCheck size={34} />, label: "Pacote", title: "Impulso Essencial", duration: "1 dia", description: "O primeiro passo para uma equipe preparada e um ambiente seguro, com treinamento básico de primeiros socorros.", topics: ["Avaliação inicial da vítima", "Acionamento correto do socorro", "Engasgo", "RCP", "DEA", "Quedas", "Queimaduras", "Cortes e sangramentos"] },
  { slug: "impulso-cuidar", icon: <HeartPulse size={34} />, label: "Plano", title: "Impulso Cuidar", duration: "1 dia", description: "Primeiros socorros e monitorização básica para agir com segurança nas principais emergências do dia a dia.", topics: ["RCP", "Engasgo em adultos e crianças", "Pressão arterial", "Oximetria", "Temperatura corporal", "Frequência cardíaca", "Glicemia capilar", "Sinais de alerta"] },
  { slug: "impulso-experience", icon: <Star size={34} />, label: "Pacote", title: "Impulso Experience", duration: "2 dias", description: "Experiência prática completa, com imersão, simulações realistas e cenários de emergência corporativa.", topics: ["Conteúdo teórico", "Simulações realistas", "Cenários corporativos", "Dinâmicas em equipe", "Casos práticos", "Dúvidas e reforço", "Equipe especializada", "Certificado"] },
  { slug: "lei-lucas", icon: <Baby size={34} />, label: "Plano", title: "Lei Lucas", duration: "2h a 8h", description: "Capacitação conforme Lei nº 13.722/2018 para escolas e espaços recreativos infantis.", topics: ["Engasgo em bebês e crianças", "RCP pediátrica", "Desmaios", "Convulsão", "Quedas e traumas", "Queimaduras", "Crises alérgicas", "Febre e mal súbito"] },
  { slug: "saude-da-mulher", icon: <Venus size={34} />, label: "Palestra", title: "Saúde da Mulher", duration: "60 a 90 min", description: "Palestra corporativa para valorização, prevenção, autocuidado e bem-estar da mulher no ambiente de trabalho.", topics: ["Saúde física e emocional", "Sinais de atenção", "Equilíbrio vida e trabalho", "Saúde mental", "Autocuidado", "Ciclo menstrual", "Climatério", "Hábitos saudáveis"] },
  { slug: "saude-seguranca-masculina", icon: <Mars size={34} />, label: "Palestra", title: "Saúde e Segurança Masculina", duration: "60 a 90 min", description: "Conscientização sobre cuidado masculino, prevenção e segurança em ambientes operacionais e corporativos.", topics: ["Infarto", "Pressão alta", "Cansaço extremo", "Estresse", "Burnout", "Alcoolismo", "Acidentes de trabalho", "Primeiros cuidados"] },
  { slug: "saude-mental", icon: <Brain size={34} />, label: "Conteúdo", title: "Saúde Mental Corporativa", duration: "Personalizado", description: "Informação correta para promover escuta, acolhimento, cuidado e ambientes emocionalmente saudáveis.", topics: ["Mitos e verdades", "Escuta ativa", "Acolhimento", "Prevenção", "Bem-estar emocional", "Cultura de cuidado", "Rotina saudável", "Ambientes seguros"] },
  { slug: "saude-e-seguranca", icon: <Building2 size={34} />, label: "Corporativo", title: "Saúde e Segurança", duration: "1 dia", description: "Saúde ocupacional, bem-estar corporativo, ergonomia, prevenção de riscos e cultura organizacional.", topics: ["Saúde mental", "NR-1", "Esgotamento precoce", "Saúde da mulher", "Ergonomia", "Cultura do cuidado", "Prevenção", "Bem-estar"] },
];

export const benefits = [
  { icon: <ShieldCheck />, title: "Prevenção de acidentes", text: "Reduz riscos, fortalece a cultura de segurança e protege vidas." },
  { icon: <Users />, title: "Equipe preparada", text: "Colaboradores capacitados para agir com confiança em situações reais." },
  { icon: <HeartPulse />, title: "Cuidado que gera valor", text: "Demonstra que sua empresa se importa com saúde e bem-estar." },
  { icon: <Building2 />, title: "Ambientes mais seguros", text: "Mais tranquilidade, produtividade e responsabilidade corporativa." },
];
