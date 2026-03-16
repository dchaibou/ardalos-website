const features = [
    {
        title: "Éducation & Savoir",
        description: "Soutien aux écoles nomades, distribution de fournitures scolaires et promotion de l'excellence académique.",
        icon: "📚",
        color: "border-ardalos-leaf"
    },
    {
        title: "Action Sociale",
        description: "Assistance aux orphelins et familles vulnérables à Niamey et dans les régions rurales du Niger.",
        icon: "🤝",
        color: "border-ardalos-green"
    },
    {
        title: "Leadership Féminin",
        description: "Programmes de mentorat et ateliers pour encourager l'autonomisation et la prise de parole des jeunes filles.",
        icon: "✨",
        color: "border-ardalos-dark"
    }
];

const Features = () => {
    return (
        <section className="py-20 bg-ardalos-light">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-title text-3xl md:text-4xl font-black text-ardalos-dark uppercase mb-4">
                        Nos Domaines d&apos;Intervention
                    </h2>
                    <div className="h-1.5 w-20 bg-ardalos-green mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`bg-white p-8 rounded-2xl border-t-4 ${feature.color} shadow-sm hover:shadow-md transition-shadow`}
                        >
                            <div className="text-4xl mb-6">{feature.icon}</div>
                            <h3 className="font-title text-xl font-bold text-ardalos-dark mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-ardalos-gray leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;