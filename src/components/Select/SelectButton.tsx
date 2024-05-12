import { ButtonHTMLAttributes } from "react"
import Image, { StaticImageData } from "next/image"
import { twMerge } from 'tailwind-merge'

interface SelectButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
    icon: StaticImageData,
}

const SelectButton = ({ text, icon, ...rest }: SelectButtonProps) => {
    return (
        <button
            {...rest}
            className={twMerge("bg-white flex justify-between items-center pl-3 pr-2 text-[12px] py-[6px] font-light rounded-full", rest.className)}
        >
            {text}
            <Image src={icon} alt='' />
        </button>
    )

}

export default SelectButton