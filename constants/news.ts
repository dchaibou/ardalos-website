export interface NewsArticle {
    id: string;
    title: string;
    slug: string;
    category: "Éducation" | "Santé" | "Solidarité" | "Leadership";
    date: string;
    excerpt: string;
    content: string;
    image: string;
}

export const ARDALOS_NEWS: NewsArticle[] = [
    {
        id: "1",
        title: "Soutien scolaire dans la région de Tillabéri",
        slug: "soutien-scolaire-tillaberi",
        category: "Éducation",
        date: "12 Mars 2026",
        excerpt: "Retour sur notre mission de distribution de manuels scolaires pour 300 élèves.",
        content: "...",
        image: "/child.jpeg"
    },
    {
        id: "2",
        title: "Campagne de sensibilisation à l'hygiène",
        slug: "sensibilisation-hygiene-niamey",
        category: "Santé",
        date: "05 Mars 2026",
        excerpt: "Une journée dédiée à la prévention et au don de kits d'hygiène à Niamey.",
        content: "...",
        image: "/action_humanitaire.jpeg"
    },
];