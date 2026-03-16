import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">

                {/* Zone Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/logo.jpeg"
                        alt="ARDALOS Logo"
                        width={60}
                        height={60}
                        className="object-contain"
                    />
                    <div className="hidden md:block">
                        <span className="font-title text-2xl font-bold text-ardalos-dark block leading-none">
                            ARDALOS
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-ardalos-green font-bold">
                            Le changement par l&apos;action
                        </span>
                    </div>
                </Link>

                {/* Navigation Desktop */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/" className="font-medium text-ardalos-dark hover:text-ardalos-green transition-colors">
                        Accueil
                    </Link>
                    {/* <Link href="/a-propos" className="font-medium text-ardalos-dark hover:text-ardalos-green transition-colors">
                        À propos
                    </Link>
                    <Link href="/actions" className="font-medium text-ardalos-dark hover:text-ardalos-green transition-colors">
                        Nos Actions
                    </Link> */}
                    <Link href="/actualites" className="font-medium text-ardalos-dark hover:text-ardalos-green transition-colors">
                        Actualités
                    </Link>
                    <Link href="/contact" className="font-medium text-ardalos-dark hover:text-ardalos-green transition-colors">
                        Contact
                    </Link>
                </nav>

                {/* Bouton d'Action */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/don"
                        className="bg-ardalos-green hover:bg-ardalos-leaf text-white px-6 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105"
                    >
                        Soutenir
                    </Link>

                    {/* Menu Mobile (Icône simplifiée) */}
                    <button className="md:hidden text-ardalos-dark">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;