import Image, { StaticImageData } from 'next/image'
import HambugerButton from '@/Images/HamburgerButton.png'

interface ButtonResponsiveNavbarProps {
    icon: StaticImageData
}

const ButtonResponsiveNavbar = ({icon}: ButtonResponsiveNavbarProps) => {
    return (
        <button
            className="
                    ml-[25px] 
                    mr-7
                    max-mobile:ml-0
                    max-mobile:mr-[10px]"
        >
            <Image className='drop-shadow-[4px_4px_10px_rgba(0,0,0,0.25)]' src={icon} alt="3 traços"/>
        </button>
    )
}

export default ButtonResponsiveNavbar