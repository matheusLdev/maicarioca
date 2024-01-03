import SwiperCore from 'swiper/core';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CosplaySlide from '../CosplaySlide/CosplaySlide';
import AdaWong from '@/assets/img/ada-wong1.jpeg';
import EsdeathSocial from '@/assets/img/esdeath-social1.jpeg';
import Esdeath from '@/assets/img/esdeath1.jpeg';
import MaiShiranui from '@/assets/img/mai5.jpeg';
import MakimaNurse from '@/assets/img/makima-enfermeira1.jpeg';
import Makima from '@/assets/img/makima1.jpeg';
import Shermie from '@/assets/img/shermie1.jpeg';

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export const CarouselSwiper = () => {
    const cosplayImages = [
        { src: AdaWong, name: 'Ada Wong de Resident Evil - Remake 4!' },
        { src: Esdeath, name: 'Esdeath de Akame Ga Kill!' },
        { src: Makima, name: 'Makima de Chainsaw Man!' },
        { src: MaiShiranui, name: 'Mai Shiranui de The King Of Fighters!' },
        { src: Shermie, name: 'Shermie de The King Of Fighters!' },
        { src: MakimaNurse, name: 'Makima Enfermeira de Chainsaw Man!' },
        { src: EsdeathSocial, name: 'Esdeath Social de Akame Ga Kill!' },
    ];
    const swiperParams = {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 2,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    };
    return (
        <div className='w-full h-screen relative my-6'>
            <Swiper {...swiperParams}>
                {cosplayImages.map((cosplay, index) => (
                    <SwiperSlide key={index}>
                        <CosplaySlide {...cosplay} />
                    </SwiperSlide>
                ))}
                <div className='swiper-button-next'></div>
                <div className='swiper-button-prev'></div>
            </Swiper>
        </div>
    );
};
