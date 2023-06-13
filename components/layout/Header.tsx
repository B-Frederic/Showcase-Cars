import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="w-full absolute z-10">
            <div className="px-6 py-4 sm:px-16">
                <Link href="/">
                    <Image src="/logo.svg" alt="logo voiture" width={118} height={18} className="object-contain" />
                </Link>
            </div> 
        </header>
    );
};

export default Header;