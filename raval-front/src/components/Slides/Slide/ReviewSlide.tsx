'use client'

import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ReviewSlide = () => {

    return (
        <div className='bg-[#085942] rounded-[53px] mt-20 mb-14 w-[1075px] h-[500px] relative max-mini_laptop:w-[800px] max-mini_laptop:h-[430px] max-tablet:w-[550px] max-tablet:h-[550px] max-tablet_mini:w-[400px] max-tablet_mini:h-[430px] max-mobile:w-[350px]'>
            <h1 className="font-semibold text-[40px] text-center text-white mt-8 max-mini_laptop:text-[30px] max-tablet:text-[26px] max-tablet_mini:text-[18px] max-mobile:text-base">Centenas de clientes já compraram seu<br />imóvel com a RAVAL</h1>
            <Swiper
                slidesPerView={1}
                loop={true}
                allowTouchMove={false}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[Navigation]}
                className='max-w-[915px] max-mini_laptop:max-w-[760px] max-tablet:max-w-[550px] max-mobile:max-w-[500px]'
            >

                <SwiperSlide className=''>
                    <div className='flex justify-center text-white mt-11 max-tablet:flex-col max-tablet:items-center max-tablet:text-center max-tablet:mt-5'>
                        <div className='h-[206px] w-[206px] rounded-full bg-slate-400 max-mini_laptop:w-[170px] max-mini_laptop:h-[170px] max-tablet_mini:h-[120px] max-tablet_mini:w-[120px]'></div>
                        <div className='ml-4 flex flex-col justify-end max-tablet:mt-3'>
                            <p className=' text-base font-light'>1 <span className='ml-2 font-thin'>Clientes da RAVAL</span></p>
                            <strong className=' text-2xl font max-tablet_mini:text-[20px] max-mobile:text-base'>✨UM SONHO REALIZADO✨</strong>
                            <p className='w-[458px] font-light text-base mt-[15px] max-tablet_mini:text-xs max-tablet_mini:w-[300px] max-tablet_mini:mt-[7px]'>Estou extremamente satisfeito com os serviços da RAVAL. Eles foram incrivelmente profissionais, prestativos e dedicados em encontrar a casa dos nossos sonhos. Recomendo-os sem hesitação a todos que procuram uma experiência confiável e transparente no mercado imobiliário.</p>
                        </div>
                    </div>
                </SwiperSlide>


                


                <button className='swiper-button-prev after:text-[#F0D05C]'>
                </button>

                <button className='swiper-button-next after:text-[#F0D05C]'>
                </button>
            </Swiper>

            {/* <div className='w-20 h-20 rounded-full bg-[#00000081] absolute top-2/3 left-44 z-10'>
            </div> */}
        </div>
    );
};

export default ReviewSlide