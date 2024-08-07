import Image, { StaticImageData } from 'next/image';
import ImageImovel from '@/Images/imovel.png'


interface SmallCardImageProps {
    image: string
}

const SmallCardImage = ({image}: SmallCardImageProps) => {
    return (
        <Image src={image || ImageImovel} alt='' width={250} height={250} className='rounded-t-[15px]' />
    )
}

export default SmallCardImage