
import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface SelectMenuProps extends HTMLAttributes<HTMLDivElement> {

}

const SelectMenu = ({ ...rest }: SelectMenuProps) => {

    return (
        <div
            {...rest}
            className={twMerge("absolute bg-white mt-9 rounded-xl px-2 py-1", rest.className)}
        >
            <p>asdlkflsfasdf</p>
            <p>lorensdfjalsdfdsfjal</p>
            <p>asdlkflsf</p>
        </div>
    )

}

export default SelectMenu