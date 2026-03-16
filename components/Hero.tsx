import Image from "next/image";

const Hero = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
                <div className="w-full md:w-1/2">
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

                <div className="w-full md:w-1/2">
                    <div className="relative border-4 border-ardalos-dark p-2 rounded-xl">
                        <Image
                            src="/arda_yesso_cover.jpeg"
                            alt="Illustration des actions Ardalos sur le terrain"
                            width={1000}
                            height={750}
                            className="rounded-lg grayscale hover:grayscale-0 transition-all duration-500 object-cover aspect-4/3"
                            style={{ width: '100%', height: 'auto' }}
                        />

                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-ardalos-light">
                            <p className="text-3xl font-black text-ardalos-green">10+</p>
                            <p className="text-xs font-bold uppercase tracking-tighter text-ardalos-dark">Projets réalisés</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;