'use client'

import Image from 'next/image';

import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import ImageImovel from '@/Images/imovel.png'
import Star from '@/Images/estrela_favorito.png'
import M2 from '@/Images/m2.png'
import Cama from '@/Images/cama.png'
import Banheira from '@/Images/banheira.png'
import LogoMCMV from '@/Images/logo-mcmv-2023.png'

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
                    slideShadows: false
                }
            }
            modules={[EffectCoverflow, Navigation]}
            className='
                flex 
                justify-center 
                items-center 
                relative 
                drop-shadow-[0px_15px_7px_rgba(0,0,0,0.30)]
            '
        >

            {imoveis.map((imovel) => (
                <>
                    <SwiperSlide key={imovel} className='max-w-[250px]'>
                        <div
                            className='
                                max-w-[250px] 
                                h-[413px] 
                                bg-white
                                rounded-[15px]
                                text-start
                            '
                        >
                            <Image src={ImageImovel} alt='' className='rounded-t-[15px]' />
                            <div
                                className='
                                    w-full
                                    absolute
                                    top-2
                                    flex
                                    items-end
                                    justify-between
                                    px-2
                                '
                            >
                                <div
                                    className='
                                        w-14 
                                        h-4
                                        flex
                                        justify-center
                                        items-center 
                                        text-white 
                                        font-normal 
                                        text-[7px] 
                                        bg-[#085942] 
                                        rounded-3xl 
                                        drop-shadow-[4px_4px_5px_rgba(0,0,0,0.25)]
                                        cursor-pointer
                                    '
                                >
                                    <p>NA PLANTA</p>
                                </div>
                                <Image
                                    src={Star}
                                    alt='star'
                                    className='cursor-pointer drop-shadow-[2px_2px_5px_rgba(0,0,0,0.25)]'
                                />
                            </div>

                            <div className='ml-2 mt-[7px]'>
                                <h1 className='text-base'>Venda - Apartamento</h1>
                                <p className='text-xs'>Valparaiso de goias, GO</p>
                                <ul className='flex flex-col space-y-1 mt-5'>
                                    <li className='flex'>
                                        <Image src={M2} alt='Metros Quadrado' />
                                        <p className='ml-1'>600 m2</p>
                                    </li>
                                    <li className='flex'>
                                        <Image src={Cama} alt='Quarto' />
                                        <p className='ml-1'>4 Quartos</p>
                                    </li>
                                    <li className='flex'>
                                        <Image src={Banheira} alt='Banheiro' />
                                        <p className='ml-1'>3 Banheiros</p>
                                    </li>
                                </ul>
                                <Image src={LogoMCMV} alt='logo minha casa minha vida' className='absolute right-2 bottom-2 drop-shadow-[4px_4px_20px_rgba(0,0,0,0.25)]' />
                            </div>


                        </div>
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