import { Smartphone, CreditCard, Landmark, HeartHandshake } from "lucide-react";

const donationMethods = [
    {
        title: "Mobile Money",
        description: "Le moyen le plus rapide pour vos contributions locales au Niger.",
        icons: ["Airtel Money", "Zamani Cash", "Moov Money", "MyNita", "AmanaTa"],
        details: "Numéros : +227 88 89 92 69",
        color: "bg-ardalos-green"
    },
    {
        title: "Virement Bancaire",
        description: "Idéal pour les dons importants ou les soutiens institutionnels.",
        icons: ["BOA", "BANI"],
        details: "IBAN: NE01 0000 0000 0000 0000 00",
        color: "bg-ardalos-dark"
    },
    {
        title: "Don International",
        description: "Pour nos contributeurs de la diaspora ou partenaires étrangers.",
        icons: ["PayPal", "Western Union"],
        details: "Contactez-nous pour les coordonnées de transfert.",
        color: "bg-ardalos-leaf"
    }
];

export default function DonationPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="bg-ardalos-dark py-20 text-white text-center">
                <div className="container mx-auto px-4">
                    <HeartHandshake className="mx-auto text-ardalos-green mb-6" size={64} />
                    <h1 className="font-title text-4xl md:text-6xl font-black uppercase mb-4">
                        Soutenir <span className="text-ardalos-green">nos actions</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Chaque contribution, petite ou grande, nous aide à bâtir le Niger que nous aimerions voir.
                        Votre générosité alimente nos projets en santé, environnement et éducation.
                    </p>
                </div>
            </section>

            {/* Moyens de paiement */}
            <section className="py-20 -translate-y-10">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {donationMethods.map((method, index) => (
                            <div key={index} className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 flex flex-col h-full">
                                <div className={`${method.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6`}>
                                    {index === 0 ? <Smartphone /> : index === 1 ? <Landmark /> : <CreditCard />}
                                </div>
                                <h3 className="font-title text-xl font-bold text-ardalos-dark mb-4 uppercase">{method.title}</h3>
                                <p className="text-ardalos-gray text-sm mb-6 grow">{method.description}</p>
                                <div className="bg-ardalos-light p-4 rounded-xl border border-dashed border-ardalos-leaf/30">
                                    <p className="text-ardalos-dark font-mono text-sm font-bold wrap-break-word">
                                        {method.details}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Transparence */}
            <section className="pb-20">
                <div className="container mx-auto px-4">
                    <div className="bg-ardalos-light rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <h2 className="font-title text-3xl font-black text-ardalos-dark mb-6 uppercase">
                                Où va votre <span className="text-ardalos-leaf">argent ?</span>
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <span className="text-ardalos-green font-bold">01.</span>
                                    <p className="text-ardalos-gray"><strong className="text-ardalos-dark">85%</strong> est alloué directement aux projets sur le terrain (Kits scolaires, forages, etc.).</p>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-ardalos-green font-bold">02.</span>
                                    <p className="text-ardalos-gray"><strong className="text-ardalos-dark">15%</strong> assure le fonctionnement de l&apos;association et les frais logistiques.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 border-l-4 border-ardalos-green pl-8">
                            <blockquote className="italic text-xl text-ardalos-dark leading-relaxed">
                                &quot;Travaillons ensemble pour bâtir le Niger qu’on aimerait voir.&quot;
                            </blockquote>
                            <p className="mt-4 font-bold text-ardalos-green">— L’équipe Arda Yesso</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}