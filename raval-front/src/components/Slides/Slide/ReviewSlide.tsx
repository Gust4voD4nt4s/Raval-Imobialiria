'use client'

import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ReviewSlide = () => {

    return (
        <div className='bg-[#085942] rounded-[53px] mt-20 mb-14 w-[1075px] h-[500px] relative'>
            <h1 className="font-semibold text-[40px] text-center text-white mt-8">Centenas de clientes já compraram seu<br />imóvel com a RAVAL</h1>
            <Swiper
                slidesPerView={1}
                loop={true}
                allowTouchMove={false}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[Navigation]}
                className='max-w-[915px]'
            >

                <SwiperSlide className=''>
                    <div className='flex justify-center mt-11'>
                        <div className='h-[206px] w-[206px] rounded-full bg-slate-400'></div>
                        <div className='ml-4 flex flex-col justify-end'>
                            <p className='text-white text-base font-light'>1 <span className='ml-2 font-thin'>Clientes da RAVAL</span></p>
                            <strong className='text-white text-2xl font'>✨UM SONHO REALIZADO✨</strong>
                            <p className='w-[458px] font-light text-base mt-[15px]'>Estou extremamente satisfeito com os serviços da RAVAL. Eles foram incrivelmente profissionais, prestativos e dedicados em encontrar a casa dos nossos sonhos. Recomendo-os sem hesitação a todos que procuram uma experiência confiável e transparente no mercado imobiliário.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className='flex justify-center mt-11'>
                        <div className='h-[206px] w-[206px] rounded-full bg-slate-400'></div>
                        <div className='ml-4 flex flex-col justify-end'>
                            <p className='text-white text-base font-light'>1 <span className='ml-2 font-thin'>Clientes da RAVAL</span></p>
                            <strong className='text-white text-2xl font'>✨UM SONHO REALIZADO✨</strong>
                            <p className='w-[458px] font-light text-base mt-[15px]'>Estou extremamente satisfeito com os serviços da RAVAL. Eles foram incrivelmente profissionais, prestativos e dedicados em encontrar a casa dos nossos sonhos. Recomendo-os sem hesitação a todos que procuram uma experiência confiável e transparente no mercado imobiliário.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className='flex justify-center mt-11'>
                        <div className='h-[206px] w-[206px] rounded-full bg-slate-400'></div>
                        <div className='ml-4 flex flex-col justify-end'>
                            <p className='text-white text-base font-light'>1 <span className='ml-2 font-thin'>Clientes da RAVAL</span></p>
                            <strong className='text-white text-2xl font'>✨UM SONHO REALIZADO✨</strong>
                            <p className='w-[458px] font-light text-base mt-[15px]'>Estou extremamente satisfeito com os serviços da RAVAL. Eles foram incrivelmente profissionais, prestativos e dedicados em encontrar a casa dos nossos sonhos. Recomendo-os sem hesitação a todos que procuram uma experiência confiável e transparente no mercado imobiliário.</p>
                        </div>
                    </div>
                </SwiperSlide>


                <button className='swiper-button-prev after:text-[#F0D05C]'>
                </button>

                <button className='swiper-button-next after:text-[#F0D05C]'>
                </button>
            </Swiper>

            <div className='w-20 h-20 rounded-full bg-[#00000081] absolute top-2/3 left-44 z-10'>
            </div>
        </div>
    );
};

export default ReviewSlide