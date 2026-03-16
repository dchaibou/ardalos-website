import Image from "next/image";
import Link from "next/link";

const newsItems = [
    {
        id: 1,
        title: "Distribution de kits scolaires à Tillabéri",
        date: "12 Mars 2026",
        excerpt: "Plus de 200 enfants ont bénéficié de fournitures pour cette rentrée, grâce à vos dons.",
        category: "Éducation",
        image: "/1.jpeg"
    },
    {
        id: 2,
        title: "Forum sur le leadership féminin à Niamey",
        date: "05 Mars 2026",
        excerpt: "Une journée d'échanges inspirants pour encourager l'engagement des jeunes filles.",
        category: "Leadership",
        image: "/2.jpeg"
    }
];

const LatestNews = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="font-title text-3xl font-black text-ardalos-dark uppercase">
                            Actualités <span className="text-ardalos-green">&</span> Événements
                        </h2>
                        <div className="h-1.5 w-16 bg-ardalos-leaf mt-2 rounded-full"></div>
                    </div>
                    <Link href="/actualites" className="text-ardalos-gray hover:text-ardalos-green font-bold text-sm uppercase tracking-wider transition-colors">
                        Voir tout →
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {newsItems.map((item) => (
                        <article key={item.id} className="group flex flex-col md:flex-row bg-ardalos-light rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="md:w-2/5 relative h-48 md:h-auto">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6 md:w-3/5 flex flex-col justify-between">
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-tighter text-ardalos-leaf bg-white px-2 py-1 rounded border border-ardalos-leaf/20">
                                        {item.category}
                                    </span>
                                    <h3 className="font-title text-xl font-bold text-ardalos-dark mt-3 mb-2 group-hover:text-ardalos-green transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-ardalos-gray text-sm line-clamp-2">
                                        {item.excerpt}
                                    </p>
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center text-xs text-gray-500 font-medium">
                                    <span>📅 {item.date}</span>
                                    <span className="text-ardalos-dark font-bold">Lire la suite</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestNews;