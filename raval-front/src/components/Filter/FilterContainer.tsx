import { ReactNode } from "react"

interface FilterContainerProps {
    title: string
    children: ReactNode
}

const FilterContainer = ({title, children}: FilterContainerProps) => {
    return (
        <div id="price" className="bg-[#085841] rounded-xl p-3 w-[155px]">
            <h2 className="text-white text-xs">{title}</h2>
            {children}
        </div>
    )
}


export default FilterContainer