'use client';
import Link from 'next/link';
import { CarouselSwiper } from './CarouselSwiper/CarouselSwiper';

const GalleryHomePage = () => {
    return (
        <section className='w-full text-center text-2xl text-seal-brown my-5'>
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
