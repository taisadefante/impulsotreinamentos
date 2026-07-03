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
  GraduationCap,
  MessageCircleWarning,
  Smartphone,
  Target,
  Siren,
  HandHeart,
  Sparkles,
  BookOpenCheck,
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

export type TrainingCategory =
  | "Empresas"
  | "Escolas"
  | "Kids"
  | "Teen"
  | "Impulso 365";

export type Training = {
  slug: string;
  icon: ReactNode;
  label: string;
  category: TrainingCategory;
  title: string;
  subtitle?: string;
  duration: string;
  audience: string;
  image: string;
  description: string;
  objective?: string;
  topics: string[];
  benefits?: string[];
};

export const trainings: Training[] = [
  {
    slug: "impulso-essencial",
    icon: <ShieldCheck size={34} />,
    label: "Pacote",
    category: "Empresas",
    title: "Impulso Essencial",
    subtitle: "Primeiros Socorros Corporativo",
    duration: "1 dia",
    audience: "Empresas, equipes operacionais e instituições",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
    description:
      "O primeiro passo para uma equipe preparada e um ambiente mais seguro, com treinamento básico de primeiros socorros para situações reais do dia a dia.",
    objective:
      "Preparar colaboradores para reconhecer riscos, agir com segurança e acionar o socorro corretamente.",
    topics: [
      "Avaliação inicial da vítima",
      "Acionamento correto do socorro",
      "Engasgo",
      "RCP",
      "DEA",
      "Quedas",
      "Queimaduras",
      "Cortes e sangramentos",
    ],
    benefits: ["Equipe mais segura", "Resposta rápida", "Redução de riscos"],
  },
  {
    slug: "impulso-cuidar",
    icon: <HeartPulse size={34} />,
    label: "Plano",
    category: "Empresas",
    title: "Impulso Cuidar",
    subtitle: "Primeiros Socorros e Monitorização Básica",
    duration: "1 dia",
    audience: "Empresas, cuidadores, escolas e equipes de apoio",
    image:
      "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1200&q=80",
    description:
      "Primeiros socorros e monitorização básica para agir com segurança nas principais emergências do cotidiano.",
    objective:
      "Ensinar cuidados iniciais e sinais de alerta para tomada de decisão mais segura.",
    topics: [
      "RCP",
      "Engasgo em adultos e crianças",
      "Pressão arterial",
      "Oximetria",
      "Temperatura corporal",
      "Frequência cardíaca",
      "Glicemia capilar",
      "Sinais de alerta",
    ],
    benefits: ["Mais confiança", "Prática aplicada", "Cultura de cuidado"],
  },
  {
    slug: "impulso-experience",
    icon: <Star size={34} />,
    label: "Pacote",
    category: "Empresas",
    title: "Impulso Experience",
    subtitle: "Imersão Prática com Simulações",
    duration: "2 dias",
    audience: "Empresas que desejam capacitação completa",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    description:
      "Experiência prática completa, com imersão, simulações realistas e cenários de emergência corporativa.",
    objective:
      "Transformar conteúdo técnico em prática real, com participação ativa da equipe.",
    topics: [
      "Conteúdo teórico",
      "Simulações realistas",
      "Cenários corporativos",
      "Dinâmicas em equipe",
      "Casos práticos",
      "Dúvidas e reforço",
      "Equipe especializada",
      "Certificado",
    ],
    benefits: ["Alto engajamento", "Aprendizado prático", "Certificação"],
  },
  {
    slug: "lei-lucas",
    icon: <Baby size={34} />,
    label: "Plano",
    category: "Escolas",
    title: "Lei Lucas",
    subtitle: "Capacitação para Escolas e Espaços Infantis",
    duration: "2h a 8h",
    audience: "Escolas, creches, berçários e recreação infantil",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    description:
      "Capacitação conforme Lei nº 13.722/2018 para escolas e espaços recreativos infantis, com foco em prevenção e ação segura.",
    objective:
      "Preparar profissionais da educação para lidar com emergências envolvendo crianças.",
    topics: [
      "Engasgo em bebês e crianças",
      "RCP pediátrica",
      "Desmaios",
      "Convulsão",
      "Quedas e traumas",
      "Queimaduras",
      "Crises alérgicas",
      "Febre e mal súbito",
    ],
    benefits: ["Adequação à lei", "Equipe preparada", "Mais segurança escolar"],
  },
  {
    slug: "saude-da-mulher",
    icon: <Venus size={34} />,
    label: "Palestra",
    category: "Empresas",
    title: "Saúde da Mulher",
    subtitle: "Prevenção, Autocuidado e Bem-estar",
    duration: "60 a 90 min",
    audience: "Empresas, SIPATs e eventos corporativos",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    description:
      "Palestra corporativa para valorização, prevenção, autocuidado e bem-estar da mulher no ambiente de trabalho.",
    objective:
      "Promover informação, prevenção e valorização da saúde feminina no ambiente corporativo.",
    topics: [
      "Saúde física e emocional",
      "Sinais de atenção",
      "Equilíbrio vida e trabalho",
      "Saúde mental",
      "Autocuidado",
      "Ciclo menstrual",
      "Climatério",
      "Hábitos saudáveis",
    ],
    benefits: ["Mais consciência", "Valorização", "Prevenção"],
  },
  {
    slug: "saude-seguranca-masculina",
    icon: <Mars size={34} />,
    label: "Palestra",
    category: "Empresas",
    title: "Saúde e Segurança Masculina",
    subtitle: "Prevenção e Cuidado no Ambiente de Trabalho",
    duration: "60 a 90 min",
    audience: "Empresas, operações, equipes externas e SIPATs",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    description:
      "Conscientização sobre cuidado masculino, prevenção e segurança em ambientes operacionais e corporativos.",
    objective:
      "Incentivar a prevenção, o cuidado e a identificação precoce de sinais de risco.",
    topics: [
      "Infarto",
      "Pressão alta",
      "Cansaço extremo",
      "Estresse",
      "Burnout",
      "Alcoolismo",
      "Acidentes de trabalho",
      "Primeiros cuidados",
    ],
    benefits: ["Prevenção", "Segurança", "Cuidado ativo"],
  },
  {
    slug: "saude-mental",
    icon: <Brain size={34} />,
    label: "Conteúdo",
    category: "Empresas",
    title: "Saúde Mental Corporativa",
    subtitle: "Ambientes Emocionalmente Seguros",
    duration: "Personalizado",
    audience: "Empresas, lideranças e equipes",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    description:
      "Informação correta para promover escuta, acolhimento, cuidado e ambientes emocionalmente saudáveis.",
    objective:
      "Fortalecer a cultura de cuidado emocional e orientar equipes sobre sinais de atenção.",
    topics: [
      "Mitos e verdades",
      "Escuta ativa",
      "Acolhimento",
      "Prevenção",
      "Bem-estar emocional",
      "Cultura de cuidado",
      "Rotina saudável",
      "Ambientes seguros",
    ],
    benefits: ["Acolhimento", "Prevenção", "Clima saudável"],
  },
  {
    slug: "saude-e-seguranca",
    icon: <Building2 size={34} />,
    label: "Corporativo",
    category: "Empresas",
    title: "Saúde e Segurança",
    subtitle: "Prevenção, Ergonomia e Cultura Organizacional",
    duration: "1 dia",
    audience: "Empresas, RH, SESMT e lideranças",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    description:
      "Saúde ocupacional, bem-estar corporativo, ergonomia, prevenção de riscos e cultura organizacional.",
    objective:
      "Apoiar empresas na construção de uma cultura de prevenção, cuidado e responsabilidade.",
    topics: [
      "Saúde mental",
      "NR-1",
      "Esgotamento precoce",
      "Saúde da mulher",
      "Ergonomia",
      "Cultura do cuidado",
      "Prevenção",
      "Bem-estar",
    ],
    benefits: ["Cultura preventiva", "Bem-estar", "Organização mais segura"],
  },
  {
    slug: "pequenos-herois",
    icon: <Siren size={34} />,
    label: "Impulso Kids",
    category: "Kids",
    title: "Pequenos Heróis",
    subtitle: "Primeiros Socorros para Crianças",
    duration: "45 a 60 min",
    audience: "Crianças do Ensino Fundamental I",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    description:
      "Atividade lúdica para ensinar crianças a reconhecer situações de risco, pedir ajuda e agir de forma segura.",
    objective:
      "Desenvolver noções básicas de segurança e cuidado de forma leve, educativa e adequada à idade.",
    topics: [
      "Quando pedir ajuda",
      "Números de emergência",
      "Engasgo e quedas",
      "Como chamar um adulto",
      "Segurança em casa e na escola",
      "Cuidado com o colega",
    ],
    benefits: ["Linguagem infantil", "Atividade prática", "Prevenção desde cedo"],
  },
  {
    slug: "meu-corpo-minhas-regras",
    icon: <HandHeart size={34} />,
    label: "Impulso Kids",
    category: "Kids",
    title: "Meu Corpo, Minhas Regras",
    subtitle: "Autoproteção e Limites",
    duration: "45 a 60 min",
    audience: "Crianças em idade escolar",
    image:
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=80",
    description:
      "Palestra educativa para trabalhar limites, respeito ao corpo, segurança emocional e pedido de ajuda.",
    objective:
      "Ensinar proteção pessoal de forma cuidadosa, sem medo e com linguagem adequada para crianças.",
    topics: [
      "Respeito ao corpo",
      "Limites pessoais",
      "Toques permitidos e não permitidos",
      "Como dizer não",
      "Rede de confiança",
      "Pedido de ajuda",
    ],
    benefits: ["Autoproteção", "Linguagem acolhedora", "Consciência corporal"],
  },
  {
    slug: "mente-em-jogo",
    icon: <Brain size={34} />,
    label: "Impulso Teen",
    category: "Teen",
    title: "Mente em Jogo",
    subtitle: "Saúde Mental para Adolescentes",
    duration: "60 a 90 min",
    audience: "Adolescentes, escolas e projetos sociais",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    description:
      "Conversa direta e educativa sobre emoções, pressão, ansiedade, autocuidado e busca por ajuda.",
    objective:
      "Ajudar adolescentes a reconhecer sinais emocionais e construir estratégias saudáveis de cuidado.",
    topics: [
      "Emoções e pressão",
      "Ansiedade e estresse",
      "Autocuidado",
      "Como pedir ajuda",
      "Rede de apoio",
      "Hábitos saudáveis",
    ],
    benefits: ["Diálogo aberto", "Prevenção", "Acolhimento"],
  },
  {
    slug: "palavras-ferem",
    icon: <MessageCircleWarning size={34} />,
    label: "Impulso Teen",
    category: "Teen",
    title: "Palavras Ferem",
    subtitle: "Bullying, Respeito e Convivência",
    duration: "60 a 90 min",
    audience: "Adolescentes e comunidade escolar",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80",
    description:
      "Palestra para conscientizar sobre bullying, empatia, respeito, responsabilidade e convivência saudável.",
    objective:
      "Promover reflexão sobre o impacto das palavras e fortalecer relações mais respeitosas.",
    topics: [
      "Bullying e cyberbullying",
      "Empatia",
      "Impacto das palavras",
      "Responsabilidade digital",
      "Convivência escolar",
      "Como buscar ajuda",
    ],
    benefits: ["Convivência melhor", "Empatia", "Prevenção de conflitos"],
  },
  {
    slug: "sem-filtro",
    icon: <Smartphone size={34} />,
    label: "Impulso Teen",
    category: "Teen",
    title: "Sem Filtro",
    subtitle: "Redes Sociais, Imagem e Comparação",
    duration: "60 a 90 min",
    audience: "Adolescentes e escolas",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    description:
      "Reflexão sobre redes sociais, comparação, exposição, escolhas online e construção da autoestima.",
    objective:
      "Estimular o uso mais consciente das redes e reduzir impactos emocionais da comparação digital.",
    topics: [
      "Redes sociais",
      "Comparação e autoestima",
      "Exposição online",
      "Privacidade",
      "Escolhas digitais",
      "Imagem real x imagem editada",
    ],
    benefits: ["Consciência digital", "Autopercepção", "Uso saudável das redes"],
  },
  {
    slug: "seu-futuro-comeca-agora",
    icon: <Target size={34} />,
    label: "Impulso Teen",
    category: "Teen",
    title: "Seu Futuro Começa Agora",
    subtitle: "Projeto de Vida e Escolhas",
    duration: "60 a 90 min",
    audience: "Adolescentes, escolas e cursos",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80",
    description:
      "Palestra para inspirar adolescentes a pensar em escolhas, responsabilidade, carreira e construção de futuro.",
    objective:
      "Conectar escolhas do presente com oportunidades futuras de forma prática e motivadora.",
    topics: [
      "Projeto de vida",
      "Responsabilidade",
      "Escolhas e consequências",
      "Carreira",
      "Disciplina",
      "Metas possíveis",
    ],
    benefits: ["Motivação", "Clareza", "Direção"],
  },
  {
    slug: "entre-a-vida-e-a-acao",
    icon: <HeartPulse size={34} />,
    label: "Impulso Teen",
    category: "Teen",
    title: "Entre a Vida e a Ação",
    subtitle: "Primeiros Socorros para Adolescentes",
    duration: "60 a 90 min",
    audience: "Adolescentes e jovens",
    image:
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1200&q=80",
    description:
      "Treinamento educativo para adolescentes aprenderem noções de primeiros socorros e tomada de atitude segura.",
    objective:
      "Ensinar jovens a agir com responsabilidade em situações emergenciais, sem improvisos perigosos.",
    topics: [
      "Primeira atitude segura",
      "Acionamento de emergência",
      "Engasgo",
      "Desmaio",
      "Quedas",
      "RCP básica",
    ],
    benefits: ["Protagonismo", "Segurança", "Conhecimento prático"],
  },
  {
    slug: "alem-da-tela",
    icon: <Smartphone size={34} />,
    label: "Impulso Teen",
    category: "Teen",
    title: "Além da Tela",
    subtitle: "Tecnologia, Relações e Equilíbrio",
    duration: "60 a 90 min",
    audience: "Adolescentes, famílias e escolas",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Palestra sobre uso da tecnologia, equilíbrio, relações, foco, sono e impactos do excesso de telas.",
    objective:
      "Promover reflexão sobre hábitos digitais e estimular equilíbrio entre vida online e offline.",
    topics: [
      "Excesso de telas",
      "Sono e foco",
      "Relações presenciais",
      "Uso consciente",
      "Limites digitais",
      "Equilíbrio emocional",
    ],
    benefits: ["Rotina equilibrada", "Consciência", "Mais presença"],
  },
  {
    slug: "impulso-365",
    icon: <GraduationCap size={34} />,
    label: "Programa",
    category: "Impulso 365",
    title: "Programa Impulso 365",
    subtitle: "Programa Contínuo para Escolas e Empresas",
    duration: "Anual",
    audience: "Escolas, empresas e instituições",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    description:
      "Programa anual com calendário de palestras, treinamentos e ações educativas para manter prevenção, saúde e desenvolvimento em movimento o ano inteiro.",
    objective:
      "Criar uma jornada contínua de educação, prevenção, cuidado e engajamento durante todo o ano.",
    topics: [
      "Calendário anual",
      "Palestras temáticas",
      "Treinamentos práticos",
      "Campanhas educativas",
      "Ações para escolas",
      "Ações para empresas",
      "Relatórios e acompanhamento",
      "Personalização por público",
    ],
    benefits: ["Continuidade", "Planejamento", "Mais impacto"],
  },
];

export const benefits = [
  {
    icon: <ShieldCheck />,
    title: "Prevenção de acidentes",
    text: "Reduz riscos, fortalece a cultura de segurança e protege vidas.",
  },
  {
    icon: <Users />,
    title: "Equipe preparada",
    text: "Colaboradores, educadores e alunos mais seguros para agir.",
  },
  {
    icon: <HeartPulse />,
    title: "Cuidado que gera valor",
    text: "Demonstra compromisso real com saúde, prevenção e bem-estar.",
  },
  {
    icon: <Building2 />,
    title: "Ambientes mais seguros",
    text: "Mais tranquilidade, produtividade e responsabilidade institucional.",
  },
  {
    icon: <BookOpenCheck />,
    title: "Conteúdo aplicável",
    text: "Palestras claras, práticas e adaptadas para cada público.",
  },
  {
    icon: <Sparkles />,
    title: "Experiência memorável",
    text: "Ações com linguagem acessível, dinâmica e alto engajamento.",
  },
];
