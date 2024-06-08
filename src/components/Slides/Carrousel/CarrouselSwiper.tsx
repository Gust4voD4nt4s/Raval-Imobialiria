'use client'

import Image from 'next/image';

import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import CarrouselArrow from '@/Images/carrouselArrow.png'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const CarrouselSwiper = () => {

    const imoveis = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                hideOnClick: true

            }}

            coverflowEffect={
                {
                    rotate: 0,
                    stretch: -33,
                    depth: 60,
                    modifier: 2,

                }
            }
            modules={[EffectCoverflow, Navigation]}
            className='flex justify-center items-center relative'
        >

            {imoveis.map((imovel) => (
                <>
                    <SwiperSlide key={imovel} className='max-w-[250px]'>
                        <div className='max-w-[250px] h-[413px] bg-slate-500'></div>
                    </SwiperSlide>
                </>
            ))}


            <button className='swiper-button-prev after:text-[#085942]'>
            </button>

            <button className='swiper-button-next after:text-[#085942]'>
            </button>

        </Swiper >
    );
};

export default CarrouselSwiper