import { ButtonHTMLAttributes, ElementType, ReactElement, ReactNode } from "react"
import Image, { StaticImageData } from "next/image"
import { twMerge } from 'tailwind-merge'

interface SelectRootProps {
    children: ReactNode
}

const SelectRoot = ({children}: SelectRootProps) => {
    return (
        <div className="">
            {children}
        </div>

    )
}


export default SelectRoot