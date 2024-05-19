import { HtmlHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface NavBarContainerProps extends HtmlHTMLAttributes<HTMLElement> {
    children: ReactNode
}

const NavBarContainer = ({children, ...rest}: NavBarContainerProps) => {
    return (
        <div
        className={twMerge("bg-[#04403A] h-[50px] drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)] flex items-center", rest.className)}>
            {children}
        </div>
    )
}

export default NavBarContainer