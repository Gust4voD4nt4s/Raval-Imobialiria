import { ReactNode } from "react"

interface FilterRootProps {
    children: ReactNode
}

const FilterRoot = ({children}: FilterRootProps) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default FilterRoot