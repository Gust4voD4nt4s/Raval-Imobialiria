import { ReactNode } from "react"

interface MediumCardContainerProps {
    children: ReactNode
}

const MediumCardContainer = ({children}: MediumCardContainerProps) => {
    return (
        <div className="max-w-[450px] drop-shadow-[0px_4px_10px_rgba(0,0,0,0.25)] bg-white p-1 m-5 pb-5 rounded-2xl">
            {children}
        </div>
    )
}

export default MediumCardContainer