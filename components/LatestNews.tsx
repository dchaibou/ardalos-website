import { ARDALOS_NEWS } from "@/constants/news";
import Image from "next/image";
import Link from "next/link";

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
                    {ARDALOS_NEWS.map((article) => (
                        <Link
                            href={`/actualites/${article.slug}`}
                            key={article.id}
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                        >
                            <article key={article.id} className="group flex flex-col md:flex-row bg-ardalos-light rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                                <div className="md:w-2/5 relative h-48 md:h-auto">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6 md:w-3/5 flex flex-col justify-between">
                                    <div>
                                        <span className="text-[10px] font-black uppercase tracking-tighter text-ardalos-leaf bg-white px-2 py-1 rounded border border-ardalos-leaf/20">
                                            {article.category}
                                        </span>
                                        <h3 className="font-title text-xl font-bold text-ardalos-dark mt-3 mb-2 group-hover:text-ardalos-green transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-ardalos-gray text-sm line-clamp-2">
                                            {article.excerpt}
                                        </p>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center text-xs text-gray-500 font-medium">
                                        <span className="text-ardalos-green font-bold text-xs mb-3 flex items-center gap-2">
                                            <span className="w-2 h-2 bg-ardalos-green rounded-full animate-pulse"></span>
                                            {article.date}
                                        </span>
                                        <span className="text-ardalos-dark font-bold">Lire la suite</span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestNews;