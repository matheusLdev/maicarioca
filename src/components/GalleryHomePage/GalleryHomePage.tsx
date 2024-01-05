'use client';
import Link from 'next/link';
import { CarouselSwiper } from './CarouselSwiper/CarouselSwiper';
import { useEffect, useState } from 'react';

const GalleryHomePage = () => {
    const [animate, setAnimate] = useState(false);
    const [animationCompleted, setAnimationCompleted] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const mainElement = document.querySelector('main');
            const mainOffsetTop = mainElement ? mainElement.offsetTop : 0;
            const mainHeight = mainElement ? mainElement.clientHeight : 0;
            const scrollPosition = window.scrollY;
            if (
                scrollPosition >= mainOffsetTop + mainHeight / 3 &&
                !animationCompleted
            ) {
                setAnimate(true);
                setAnimationCompleted(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [animationCompleted]);

    return (
        <section
            className={`w-full text-center text-2xl text-seal-brown my-5 
                ${animate ? 'animate-show' : 'opacity-0'}
            `}
        >
            <h2>Meus Cosplays:</h2>
            <CarouselSwiper />
            <Link
                href='#'
                className='text-red-link hover:text-seal-brown hover:duration-500'
            >
                Ver todos
            </Link>
        </section>
    );
};

export default GalleryHomePage;
