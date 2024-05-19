import Image, { StaticImageData } from 'next/image'
import HambugerButton from '@/Images/HamburgerButton.png'

interface ButtonResponsiveNavbarProps {
    icon: StaticImageData
}

const ButtonResponsiveNavbar = ({icon}: ButtonResponsiveNavbarProps) => {
    return (
        <button
            className="
                    ml-3 
                    mr-7"
        >
            <Image src={icon} alt="3 traços"/>
        </button>
    )
}

export default ButtonResponsiveNavbar