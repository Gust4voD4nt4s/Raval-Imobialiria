import Link from "next/link"
import Image, { StaticImageData } from "next/image"

interface LogoProps {
    iconeLogo?: StaticImageData,
    logo: StaticImageData
}

const Logo = ({ iconeLogo, logo }: LogoProps) => {
    return (
        <Link
            href={""}
            className="
                    flex 
                    mb-1"
        >
            {iconeLogo && 
            <Image
                src={iconeLogo}
                alt={"Icone da logo"}
                className="
                        w-[22px] 
                        h-[22px] 
                        mr-[2.35px]"
            />}

            <Image
                src={logo}
                alt={"Logo"}
            />
        </Link>
    )
}

export default Logo