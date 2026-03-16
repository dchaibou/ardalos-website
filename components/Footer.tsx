import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-ardalos-dark text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-12">

                    {/* Colonne 1 : Identité */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="bg-white p-2 rounded-lg inline-block mb-6">
                            <Image
                                src="/logo.jpeg"
                                alt="ARDALOS Logo"
                                width={80}
                                height={80}
                            />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Association Ardalos : Engagée pour le développement socio-éducatif et la solidarité au Niger.
                        </p>
                    </div>

                    {/* Colonne 2 : Navigation Rapide */}
                    <div>
                        <h4 className="font-title text-lg font-bold mb-6 uppercase tracking-wider">Navigation</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link href="/" className="hover:text-ardalos-green transition-colors">Accueil</Link></li>
                            <li><Link href="/actualits" className="hover:text-ardalos-green transition-colors">Actualités</Link></li>
                            <li><Link href="/contact" className="hover:text-ardalos-green transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Colonne 3 : Contact */}
                    <div>
                        <h4 className="font-title text-lg font-bold mb-6 uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-center gap-3">
                                <span className="text-ardalos-green">📍</span> Niamey, Niger
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-ardalos-green">📞</span> +227 00 00 00 00
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-ardalos-green">✉️</span> contact@ardalos.org
                            </li>
                        </ul>
                    </div>

                    {/* Colonne 4 : Slogan & Réseaux */}
                    <div>
                        <h4 className="font-title text-lg font-bold mb-6 uppercase tracking-wider">Suivez-nous</h4>
                        <div className="flex gap-4 mb-6">
                            {/* Icônes sociales simplifiées */}
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-ardalos-green transition-all">FB</a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-ardalos-green transition-all">TW</a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-ardalos-green transition-all">IG</a>
                        </div>
                        <p className="text-ardalos-leaf font-bold italic text-sm">
                            &quot;Le changement par l&apos;action&quot;
                        </p>
                    </div>
                </div>

                {/* Barre de copyright */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© {currentYear} Association Ardalos, tous droits réservés.</p>
                    <p>
                        Propulsé par <Link href="https://taramtech.com" className="hover:text-ardalos-green transition-colors">Taram Tech</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;