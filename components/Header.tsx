"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Accueil', href: '/' },
        { name: 'Actualités', href: '/actualites' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-3 relative z-50">
                    <Image
                        src="/logo.jpeg"
                        alt="ARDALOS Logo"
                        width={50}
                        height={50}
                        className="object-contain"
                    />
                    <div className="hidden sm:block">
                        <span className="font-title text-xl font-bold text-ardalos-dark block leading-none">
                            Association des
                        </span>
                        <span className="text-[10px] tracking-widest text-ardalos-green font-bold">
                            Ardalos
                        </span>
                    </div>
                </Link>

                {/* Navigation Desktop */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="font-medium text-ardalos-dark hover:text-ardalos-green transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        href="/don"
                        className="hidden sm:block bg-ardalos-green hover:bg-ardalos-leaf text-white px-6 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105"
                    >
                        Soutenir
                    </Link>

                    {/* Toggle Button Mobile */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-ardalos-dark p-2 relative z-50"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </div>

            {/* Overlay Menu Mobile */}
            <div className={`
                fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out md:hidden
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
                <nav className="flex flex-col items-center justify-center h-full gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="font-title text-2xl font-bold text-ardalos-dark hover:text-ardalos-green"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/don"
                        onClick={() => setIsOpen(false)}
                        className="bg-ardalos-green text-white px-10 py-4 rounded-full font-bold text-lg"
                    >
                        Soutenir l&apos;action
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;