import { StaticImageData } from "next/image";
import Image from 'next/image';

import ImageImovel from '@/Images/imovel.png'
import Star from '@/Images/estrela_favorito.png'
import M2 from '@/Images/m2.png'
import Cama from '@/Images/cama.png'
import Banheira from '@/Images/banheira.png'
import LogoMCMV from '@/Images/logo-mcmv-2023.png'

interface SmallCardDescriptionProps {
    type_property: string,
    type_purchase: string,
    city: string,
    state: string,
    square_meters: number,
    bedrooms_quantity?: number,
    toilet_quantity?: number,
    plant?: boolean,
}



const SmallCardDescription = ({ plant, type_purchase, type_property, city, state, square_meters, bedrooms_quantity, toilet_quantity }: SmallCardDescriptionProps) => {

    return (
        <>
            <div
                className='
                                    w-full
                                    absolute
                                    top-2
                                    flex
                                    items-end
                                    px-2
                                '
            >
                {plant === true ?
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
                    : ''}

                <Image
                    src={Star}
                    alt='star'
                    className='cursor-pointer drop-shadow-[2px_2px_5px_rgba(0,0,0,0.25)] absolute right-2 top-0'
                />
            </div>

            <div className='ml-2 mt-[7px]'>
                <h1 className='text-base'>{type_purchase.toUpperCase()} - {type_property.toUpperCase()}</h1>
                <p className='text-xs'>{city}, {state}</p>
                <ul className='flex flex-col space-y-1 mt-5'>
                    <li className='flex'>
                        <Image src={M2} alt='Metros Quadrado' />
                        <p className='ml-1'>{square_meters} m2</p>
                    </li>
                    <li className='flex'>
                        <Image src={Cama} alt='Quarto' />
                        <p className='ml-1'>{bedrooms_quantity} Quartos</p>
                    </li>
                    <li className='flex'>
                        <Image src={Banheira} alt='Banheiro' />
                        <p className='ml-1'>{toilet_quantity} Banheiros</p>
                    </li>
                </ul>
                <Image src={LogoMCMV} alt='logo minha casa minha vida' className='absolute right-2 bottom-2 drop-shadow-[4px_4px_20px_rgba(0,0,0,0.25)]' />
            </div>
        </>
    )
}

export default SmallCardDescription