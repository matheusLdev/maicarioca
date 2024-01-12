'use client';
import Link from 'next/link';
import { CarouselSwiper } from './CarouselSwiper/CarouselSwiper';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function GalleryHomePage() {
    const { animate } = useScrollAnimation('home-page');

    return (
        <section
            id='galeria'
            className={`w-full text-center text-2xl text-seal-brown my-10 
                ${animate ? 'animate-show' : 'opacity-0'}
            `}
        >
            <h2 className='w-11/12 mx-auto text-left'>Meus Cosplays:</h2>
            <CarouselSwiper />
            <Link
                href='/galeria'
                className='text-red-link hover:text-seal-brown hover:duration-500'
            >
                Ver todos
            </Link>
        </section>
    );
}
