"use client";
import React, { useState } from 'react';
// Types
import { CarProps } from '@/types';
// Utils
import { calculateCarRent, generateCarImageUrl } from '@/utils';
// Picture
import Image from 'next/image';
import Button from './Button';
import CarDetails from './CarDetails';

interface CarCardProps {
    car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
    
    const { city_mpg, year, make, model, transmission, drive } = car;
    const carRent = calculateCarRent(city_mpg, year);
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="car-card group">
            <div className="car-card__content">
                <h2 className="car-card__content-title">
                    {make} {model}
                </h2>
            </div>
            <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
            {carRent}
            <span className='self-start text-[14px] leading-[17px] font-semibold'>€</span>
            <span className='self-end text-[14px] leading-[17px] font-medium'>/Jour</span>
            </p>
            <div className='relative w-full h-40 my-3 object-contain'>
                <Image src={generateCarImageUrl(car)} alt='voiture' fill priority className='object-contain' />
            </div>
            <div className='relative flex w-full mt-2'>
                <div className='flex group-hover:invisible w-full justify-between text-grey'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src='/steering-wheel.svg' width={20} height={20} alt='volant' />
                        <p className='text-[14px] leading-[17px]'>
                            {transmission === "a" ? "Automatic" : "Manual"}
                        </p>
                    </div>
                    <div className="car-card__icon">
                        <Image src="/tire.svg" width={20} height={20} alt="roue" />
                        <p className="car-card__icon-text">{drive.toUpperCase()}</p>
                    </div>
                    <div className="car-card__icon">
                        <Image src="/gas.svg" width={20} height={20} alt="pompe à essence" />
                        <p className="car-card__icon-text">{city_mpg} MGP</p>
                    </div>
                </div>
                <div className="car-card__btn-container">
                    <Button
                    title='Voir plus'
                    containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                    textStyles='text-white text-[14px] leading-[17px] font-bold'
                    rightIcon='/right-arrow.svg'
                    handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>
            <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
        </div>
    );
};

export default CarCard;