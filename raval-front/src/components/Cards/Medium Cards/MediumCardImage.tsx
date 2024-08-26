import Image from "next/image"
import ImageImovel from '@/images/imovel.png'

interface MediumCardImageProps {
    image: string
}

const MediumCardImage = ({image}: MediumCardImageProps) => {
    return (
        <Image src={image || ''} alt='' width={250} height={250} className='rounded-t-[15px]' />
    )
}

export default MediumCardImage