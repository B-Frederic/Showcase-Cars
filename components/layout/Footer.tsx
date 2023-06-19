import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Footer = () => {
    return (
        <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-200">
            <div className="flex max-md:flex-col flex-wrap justify-around max-md:m-auto gap-5 sm:px-16 px-6 py-10">
                <div className="flex flex-col justify-start items-start gap-6">
                    <Image src="/logo.svg" alt="logo voiture" width={118} height={18} className="object-contain" />
                    <p className="text-base text-gray-700">
                        Showcase Cars <br/>
                        &copy; 2023, Showcase Cars
                    </p>
                </div>
                <div className="footer__about">
                    <h3 className="font-bold text-xl">Nos locaux</h3>
                    <p>Paris, 75000</p>
                    <p>rue vroum vroum n°1</p>
                    <p>Téléphone: 05.00.00.00.03</p>
                    <p>E-mail: showcase-cars75@gmail.com</p>
                </div>
                <div className="footer__partner">
                    <h3 className="font-bold text-xl">Nos partenaires</h3>
                    <p>Uber Cars</p>
                    <p>Toyota</p>
                    <p>Cars</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;