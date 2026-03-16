import Image from "next/image";
import Link from "next/link";
import { ARDALOS_NEWS } from "@/constants/news";

export default function NewsPage() {
    return (
        <main className="min-h-screen bg-ardalos-light pb-20 pt-12">
            <div className="container mx-auto px-4">

                {/* Header de la page */}
                <div className="text-center mb-16">
                    <h1 className="font-title text-4xl md:text-5xl font-black text-ardalos-dark uppercase mb-4">
                        Actualités <span className="text-ardalos-green">Ardalos</span>
                    </h1>
                    <p className="text-ardalos-gray max-w-2xl mx-auto">
                        Suivez l&apos;impact de nos actions sur le terrain et restez informé des prochains événements de l&apos;association.
                    </p>
                </div>

                {/* Grille d&apos;articles */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ARDALOS_NEWS.map((article) => (
                        <Link
                            href={`/actualites/${article.slug}`}
                            key={article.id}
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                        >
                            {/* Image avec Overlay de catégorie */}
                            <div className="relative h-60 w-full overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-ardalos-dark text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-white/20">
                                    {article.category}
                                </div>
                            </div>

                            {/* Contenu de la carte */}
                            <div className="p-8 flex flex-col grow">
                                <span className="text-ardalos-green font-bold text-xs mb-3 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-ardalos-green rounded-full animate-pulse"></span>
                                    {article.date}
                                </span>
                                <h2 className="font-title text-xl font-bold text-ardalos-dark mb-4 leading-tight group-hover:text-ardalos-green transition-colors">
                                    {article.title}
                                </h2>
                                <p className="text-ardalos-gray text-sm line-clamp-3 mb-6">
                                    {article.excerpt}
                                </p>
                                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                                    <span className="text-ardalos-dark font-black text-xs uppercase tracking-tighter">Lire l&apos;article</span>
                                    <span className="text-ardalos-green group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}