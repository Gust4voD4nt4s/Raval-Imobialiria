import { ReactNode } from "react"

interface SmallCardContainerProps {
    children: ReactNode
}

const SmallCardContainer = ({children}: SmallCardContainerProps) => {
    return (
        <div
            className='
                max-w-[250px] 
                h-[413px] 
                bg-white
                rounded-[15px]
                text-start
            '
        >
            {children}
        </div>
    )
}


export default SmallCardContainer