'use client';

import { useState } from 'react';
import Link from 'next/link';
import {usePathname} from "next/navigation";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    const isActive = (path: string) => pathname === path ? 'text-secondary' : '';

    return (
        <nav className="border-t border-b pt-3 pb-3 flex md:justify-center pl-5 md:pl-0 border-black">
            <button onClick={toggleMenu} aria-label="Open menu" className="md:hidden">
                ☰
            </button>
            <ul className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-12`}>
                <li>
                    <Link className={`px-4 py-2 hover:text-secondary ${isActive('/')}`} href="/">
                        About
                    </Link>
                </li>
                <li>
                    <Link className={`px-4 py-2 hover:text-secondary ${isActive('/projects')}`} href="/projects">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link className={`px-4 py-2 hover:text-secondary ${isActive('/experience')}`} href="/experience">
                        Experience
                    </Link>
                </li>
                {/*<li>*/}
                {/*    <Link className={`px-4 py-2 hover:text-secondary ${isActive('/written-work')}`} href="/written-work">*/}
                {/*        Written Work*/}
                {/*    </Link>*/}
                {/*</li>*/}
            </ul>
        </nav>
    );
};

export default Navigation;
