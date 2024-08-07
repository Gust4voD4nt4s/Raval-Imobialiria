'use client'

import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useFetch } from '@/hooks/useRequest';
import SmallCardContainer from '@/components/Cards/Small Cards/smallCardContainer';
import SmallCardDescription from '@/components/Cards/Small Cards/SmallCardDescription';
import SmallCardImage from '@/components/Cards/Small Cards/SmallCardImage';

interface ImageData {
    id: number;
    created_at: string;
    deleted_at: string | null;
    originalname: string;
    filename: string;
    url: string
}

interface Repository {
    id: number,
    type_property: string,
    type_purchase: string,
    city: string,
    state: string,
    value: number,
    address: string,
    description?: string,
    square_meters: number,
    bedrooms_quantity?: number,
    toilet_quantity?: number,
    garage_quantity?: number,
    recreation_area?: boolean,
    pool_size?: number,
    academy?: boolean,
    plant?: boolean,
    images: ImageData[]
}


const CarrouselSwiper = () => {


    const data = useFetch<Repository[]>('http://localhost:3001/api/v1/property/')


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

            {data?.map((imovel) => (
                <SwiperSlide key={imovel.id} className='max-w-[250px]'>
                    <SmallCardContainer>
                        <SmallCardImage image={imovel.images?.[0]?.url}/>
                        <SmallCardDescription type_property={imovel.type_property} type_purchase={imovel.type_purchase} city={imovel.city} state={imovel.state} square_meters={imovel.square_meters} />
                    </SmallCardContainer>
                </SwiperSlide>
            ))}


            <button className='swiper-button-prev after:text-[#085942]'>
            </button>

            <button className='swiper-button-next after:text-[#085942]'>
            </button>

        </Swiper >
    );
};

export default CarrouselSwiper