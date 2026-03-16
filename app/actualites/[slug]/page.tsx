import { ARDALOS_NEWS } from "@/constants/news";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// On rend la fonction asynchrone pour pouvoir "await" params
export default async function ArticleDetail({
    params
}: {
    params: Promise<{ slug: string }> // Type mis à jour : c'est une Promise
}) {

    // On déballe les paramètres avant l'utilisation
    const { slug } = await params;

    const article = ARDALOS_NEWS.find((a) => a.slug === slug);

    if (!article) notFound();

    return (
        <article className="min-h-screen bg-white pb-20">
            {/* Header de l'article avec l'image optimisée */}
            <div className="relative h-[50vh] min-h-100 w-full bg-ardalos-dark">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    priority // Ajouté pour le SEO (LCP)
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center text-center p-4">
                    <div className="max-w-3xl">
                        <span className="text-ardalos-green font-black uppercase tracking-[0.2em] text-sm mb-4 block">
                            {article.category} — {article.date}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-title font-black text-white uppercase leading-tight">
                            {article.title}
                        </h1>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 -translate-y-12 relative z-10">
                <div className="bg-white p-8 md:p-16 rounded-3xl shadow-2xl max-w-4xl mx-auto">
                    <div className="prose prose-lg max-w-none text-ardalos-gray leading-relaxed">
                        <p className="text-xl font-medium text-ardalos-dark mb-8">
                            {article.excerpt}
                        </p>
                        <p>
                            {article.content}
                        </p>
                    </div>

                    <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
                        <Link href="/actualites" className="text-ardalos-dark font-bold hover:text-ardalos-green flex items-center gap-2 transition-colors">
                            ← Retour aux actualités
                        </Link>
                        <div className="flex gap-4">
                            <span className="text-xs uppercase font-bold text-gray-400">Partager :</span>
                            <button className="text-ardalos-dark hover:text-ardalos-green transition-colors">FB</button>
                            <button className="text-ardalos-dark hover:text-ardalos-green transition-colors">TW</button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}