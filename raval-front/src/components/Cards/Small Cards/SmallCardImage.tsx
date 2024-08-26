import Image, { StaticImageData } from 'next/image';
import Casa from '@/images/casa.png'



interface SmallCardImageProps {
    image: string
}

const SmallCardImage = ({image}: SmallCardImageProps) => {
    return (
        <Image src={image || Casa} alt='' width={250} height={220} className='rounded-t-[15px] w-full h-[220px]' />
    )
}

export default SmallCardImage