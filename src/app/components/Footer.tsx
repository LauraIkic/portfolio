'use client';

import Link from "next/link";

const Footer = () => {

    return (
        <div className="border-t p-2 flex justify-center">
            <Link href="https://github.com/LauraIkic/portfolio">
                <span className="text-sm hover:text-secondary">
                Designed And Developed By Laura Ikic
                </span>
            </Link>
        </div>
    );
};

export default Footer;
