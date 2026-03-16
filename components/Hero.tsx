const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-white py-16 md:py-28">
            {/* Élément décoratif rappelant les feuilles du logo en arrière-plan */}
            <div className="absolute top-0 right-0 -z-10 opacity-5 translate-x-1/4 -translate-y-1/4">
                <svg width="600" height="600" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 20C100 20 140 60 140 100C140 140 100 180 100 180C100 180 60 140 60 100C60 60 100 20 100 20Z" fill="var(--color-ardalos-green)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <span className="inline-block px-4 py-1 rounded-full bg-ardalos-light text-ardalos-leaf font-bold text-sm mb-6 border border-ardalos-leaf/20">
                        Association des Ardalos
                    </span>
                    <h1 className="font-title text-4xl md:text-6xl font-extrabold text-ardalos-dark leading-tight mb-6">
                        Le changement par <span className="text-ardalos-green font-black underline decoration-ardalos-leaf/30">l&apos;action</span>
                    </h1>
                    <p className="text-ardalos-gray text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
                        Engagés pour l&apos;éducation, le leadership et la solidarité au Niger. Ensemble, bâtissons un avenir durable pour chaque communauté.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-ardalos-green hover:bg-ardalos-leaf text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-ardalos-green/20">
                            Nos projets en cours
                        </button>
                        <button className="border-2 border-ardalos-dark hover:bg-ardalos-dark hover:text-white text-ardalos-dark px-8 py-4 rounded-lg font-bold transition-all">
                            Nous rejoindre
                        </button>
                    </div>
                </div>

                {/* Espace pour une image représentative (ou illustration) */}
                <div className="relative">
                    <div className="aspect-square bg-ardalos-light rounded-2xl border-2 border-dashed border-ardalos-leaf/30 flex items-center justify-center p-8">
                        {/* Ici vous pourrez mettre une photo d&apos;une action réelle */}
                        <div className="text-center">
                            <div className="text-6xl mb-4">🌍</div>
                            <p className="text-ardalos-gray italic font-medium">Illustration des actions Ardalos sur le terrain</p>
                        </div>
                    </div>
                    {/* Badge de statistiques flottant */}
                    <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-ardalos-light">
                        <p className="text-3xl font-black text-ardalos-green">10+</p>
                        <p className="text-xs font-bold uppercase tracking-tighter text-ardalos-dark">Projets réalisés</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;