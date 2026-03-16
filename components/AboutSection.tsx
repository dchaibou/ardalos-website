import Image from "next/image";

const AboutSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
                <div className="w-full md:w-1/2">
                    <div className="relative border-4 border-ardalos-dark p-2 rounded-xl">
                        <Image
                            src="/child.jpeg"
                            alt="Action Humanitaire"
                            width={1000}
                            height={750}
                            className="rounded-lg grayscale hover:grayscale-0 transition-all duration-500 object-cover aspect-4/3"
                            style={{ width: '100%', height: 'auto' }}
                            />

                        <div className="absolute -bottom-4 -right-4 bg-ardalos-green text-white font-title p-4 font-bold rounded-lg shadow-lg">
                            S&apos;unir pour Agir
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2">
                    <h2 className="font-title text-3xl font-black text-ardalos-dark mb-6 uppercase">
                        Qui sont les <span className="text-ardalos-leaf">Ardalos</span> ?
                    </h2>
                    <div className="space-y-4 text-ardalos-gray text-lg">
                        <p>
                            L&apos;Association <strong>Ardalos</strong> est née d&apos;une volonté commune de transformer les défis en opportunités. Notre slogan, <span className="italic">&quot;Le changement par l&apos;action&quot;</span>, n&apos;est pas qu&apos;une devise, c&apos;est notre moteur quotidien.
                        </p>
                        <p>
                            Basés à Niamey, nous intervenons sur l&apos;ensemble du territoire pour porter secours, éduquer et inspirer. Nous croyons que chaque individu possède un potentiel qui ne demande qu&apos;à être révélé par l&apos;éducation et la solidarité.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-2 gap-6">
                        <div className="border-l-4 border-ardalos-green pl-4">
                            <h4 className="font-bold text-ardalos-dark uppercase text-sm">Vision</h4>
                            <p className="text-sm text-ardalos-gray">Un Niger solidaire où chaque enfant accède à son plein potentiel.</p>
                        </div>
                        <div className="border-l-4 border-ardalos-green pl-4">
                            <h4 className="font-bold text-ardalos-dark uppercase text-sm">Mission</h4>
                            <p className="text-sm text-ardalos-gray">Mobiliser les ressources et les énergies pour des projets à fort impact social.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;