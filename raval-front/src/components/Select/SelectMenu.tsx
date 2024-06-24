import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface SelectMenuProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
    options: string[],
    visible: boolean,
    onSelect: (value: string) => void,
}

const SelectMenu = ({ options, visible, onSelect, ...rest }: SelectMenuProps) => {
    return (
        <div className={twMerge('absolute mt-6 py-2', visible ? 'block' : 'hidden', rest.className)}>
            <ul className={twMerge('bg-white rounded-xl')}>
                {options.map((option) => (
                    <li 
                        key={option}
                        className='pl-2 pr-8 py-1 rounded-t-xl hover:bg-slate-200 cursor-pointer'
                        onClick={() => onSelect(option)}
                    >
                        <span className='text-[12px]'>{option}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SelectMenu
