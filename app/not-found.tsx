import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
            <h1 className="font-title text-9xl font-black text-ardalos-dark opacity-10">404</h1>
            <div className="-translate-y-12">
                <h2 className="font-title text-3xl font-bold text-ardalos-dark mb-4 uppercase">
                    Oups ! Page introuvable
                </h2>
                <p className="text-ardalos-gray mb-8 max-w-md mx-auto">
                    Il semble que la page que vous cherchez n&apos;existe pas ou a été déplacée.
                </p>
                <Link
                    href="/"
                    className="bg-ardalos-green hover:bg-ardalos-leaf text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg"
                >
                    Retour à l&apos;accueil
                </Link>
            </div>
        </main>
    );
}