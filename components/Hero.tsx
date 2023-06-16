"use client";
import Image from "next/image";
// Components
import Button from "./Button";


const Hero = () => {

    const handleScroll = () => {

    }

    return (
        <div className="hero">
            <div className="flex-1 pt-20 padding-x">
                <h1 className="hero__title">Trouver une voiture à louer rapidement et facilement</h1>
                <p className="hero__subtitle">Votre expérience de location de véhicule ne serra plus jamais la même après votre passage chez nous.</p>
                <Button 
                title="Voir nos voitures"
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll}
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" alt="hero" fill sizes="100" className="object-contain" />
                    <div className="hero__image-overlay"></div>
                </div>
            </div>         
        </div>
    );
};

export default Hero;