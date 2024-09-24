'use client'

import { Autoplay, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';

const AdvertisingSlide = () => {

    return (
        <Swiper
            slidesPerView={1}
            pagination={{
                clickable: true
            }}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className='w-[750px] shadow-[4px_4px_7px_rgba(0,0,0,0.25)]'
        >
            <SwiperSlide className=''>
                <Link href='/'>
                    <div className='bg-slate-300 h-36'></div>
                </Link>
            </SwiperSlide>
            <SwiperSlide className=''>
                <Link href='/'>
                    <div className='bg-slate-400 h-36'></div>
                </Link>
            </SwiperSlide>
            <SwiperSlide className=''>
                <Link href='/'>
                    <div className='bg-slate-500 h-36'></div>
                </Link>
            </SwiperSlide>
        </Swiper>
    );
};

export default AdvertisingSlide