'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const isActive = (path: string) => pathname === path ? 'text-secondary' : '';

    return (
        <nav className="border-t border-b pt-4 pb-3 flex md:justify-center pl-5 md:pl-0 border-black">
            <button
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
                className="md:hidden flex flex-col space-y-1 items-center"
                aria-expanded={isMenuOpen ? 'true' : 'false'}
                aria-controls="menu"
            >
                <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </button>
            <ul
                id="menu"
                className={`${
                    isMenuOpen ? 'block' : 'hidden'
                } md:flex md:space-x-12 transition-all duration-300 ease-in-out md:block md:w-auto w-full mt-4 md:mt-0`}
            >
                <li>
                    <Link
                        className={`px-4 py-2 hover:text-secondary ${isActive('/')}`}
                        href="/"
                        onClick={closeMenu}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        className={`px-4 py-2 hover:text-secondary ${isActive('/projects')}`}
                        href="/projects"
                        onClick={closeMenu}
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        className={`px-4 py-2 hover:text-secondary ${isActive('/experience')}`}
                        href="/experience"
                        onClick={closeMenu}
                    >
                        Experience
                    </Link>
                </li>
                {/*<li>*/}
                {/*    <Link className={`px-4 py-2 hover:text-secondary ${isActive('/written-work')}`} href="/written-work" onClick={closeMenu}>*/}
                {/*        Written Work*/}
                {/*    </Link>*/}
                {/*</li>*/}
            </ul>
        </nav>
    );
};

export default Navigation;
