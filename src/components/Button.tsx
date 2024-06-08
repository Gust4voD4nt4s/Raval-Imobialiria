import Link from "next/link"
import Image, { StaticImageData } from "next/image"
import { ButtonHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
    icon?: StaticImageData
}

const Button = ({ icon, text, ...rest }: ButtonProps) => {
    return (
        <button
            className={twMerge("bg-[#085942] px-2 h-6 font-semibold text-[10px] text-white flex justify-center items-center rounded-full drop-shadow-[4px_4px_10px_rgba(0,0,0,0.25)]", rest.className)}
        >
            <Image src={icon ? icon : ''} alt={''} className="mr-1"></Image>
            <p>{text}</p>
        </button>
    )
}

export default Button