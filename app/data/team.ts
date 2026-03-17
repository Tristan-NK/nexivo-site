export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  shortBio: string;
  bio: string;
  skills: string[];
  email?: string;
  phone?: string;
  location?: string;
  socials?: {
    linkedin?: string;
    instagram?: string;
    x?: string;
    github?: string;
    website?: string;
  };
};

export const teamMembers: TeamMember[] = [
  {
    slug: "nom-1",
    name: "Nom 1",
    role: "Fondateur · Développeur full‑stack",
    shortBio:
      "Conçoit et développe les applications web et mobiles, de l’architecture au déploiement.",
    bio:
      "Je conçois des solutions web et applicatives orientées performance, sécurité et évolutivité. J'accompagne les clients de la phase de cadrage jusqu'à la mise en production, avec une attention particulière portée à l'expérience utilisateur.",
    skills: ["Next.js", "React", "API", "SEO", "Déploiement"],
    email: "contact@nexivo.fr",
    location: "France",
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    slug: "nom-2",
    name: "Nom 2",
    role: "Designer & Infographiste",
    shortBio:
      "Travaille sur l'identité visuelle, les interfaces et les supports de communication.",
    bio:
      "Je crée des identités visuelles fortes et des interfaces modernes. Mon objectif est de rendre chaque marque cohérente, reconnaissable et mémorable, tout en garantissant une expérience claire et agréable.",
    skills: ["Branding", "UI/UX", "Identité visuelle", "Print & digital"],
    email: "contact@nexivo.fr",
    location: "France",
    socials: {
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    slug: "nom-3",
    name: "Nom 3",
    role: "Spécialiste systèmes & réseaux",
    shortBio:
      "Gère l'infrastructure, la sécurité, la maintenance et l'accompagnement technique au quotidien.",
    bio:
      "Je sécurise et optimise les infrastructures (réseaux, postes, serveurs) pour garantir la continuité d’activité. Je mets en place des bonnes pratiques, des sauvegardes et des mécanismes de supervision adaptés.",
    skills: ["Réseaux", "Sécurité", "VPN", "Supervision", "Maintenance"],
    email: "contact@nexivo.fr",
    location: "France",
    socials: {
      linkedin: "#",
    },
  },
  {
    slug: "nom-4",
    name: "Nom 4",
    role: "Chef de projet · Relation client",
    shortBio:
      "Cadre le besoin, organise le planning et assure un suivi clair pour livrer vite et bien.",
    bio:
      "Je pilote les projets de bout en bout : cadrage, planning, priorisation, coordination et suivi. Mon rôle est de transformer vos objectifs en livrables concrets, avec de la transparence et de la réactivité.",
    skills: ["Cadrage", "Suivi projet", "Communication", "Qualité"],
    email: "contact@nexivo.fr",
    location: "France",
    socials: {
      linkedin: "#",
    },
  },
  {
    slug: "nom-5",
    name: "Nom 5",
    role: "Développeur · Intégration & automatisations",
    shortBio:
      "Automatise, intègre les outils et fiabilise les flux (API, paiements, CRM).",
    bio:
      "J'aide à connecter les outils entre eux et à automatiser les processus (API, paiements, CRM, emails). L’objectif : réduire les tâches manuelles, fiabiliser les données et accélérer vos opérations.",
    skills: ["Intégrations", "Automatisation", "API", "Paiements", "CRM"],
    email: "contact@nexivo.fr",
    location: "France",
    socials: {
      github: "#",
      linkedin: "#",
    },
  },
  {
    slug: "nom-6",
    name: "Nom 6",
    role: "Marketing digital · SEO & contenus",
    shortBio:
      "Optimise le référencement, la structure éditoriale et la performance des pages.",
    bio:
      "Je travaille sur la stratégie SEO, le contenu et l'optimisation des pages (structure, mots-clés, performance). Mon but est d'augmenter votre visibilité et de convertir davantage de visiteurs en clients.",
    skills: ["SEO", "Contenu", "Optimisation", "Analytics", "Conversion"],
    email: "contact@nexivo.fr",
    location: "France",
    socials: {
      linkedin: "#",
    },
  },
];

