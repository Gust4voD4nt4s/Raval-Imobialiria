interface FilterMinMaxProps {
    placeholderMin: string,
    placeholderMax: string
}

const FilterMinMax = ({ placeholderMin, placeholderMax }: FilterMinMaxProps) => {
    return (
        <div className="flex items-center space-x-[3px] mt-1">
            <input className="w-14 h-5 bg-transparent border-2 rounded outline-none border-gray-500 text-[10px] pl-[2px] text-white" type="text" placeholder={placeholderMin} />
            <span className="bg-gray-500 w-[7px] h-[1px] rounded-full"></span>
            <input className="w-14 h-5 bg-transparent border-2 rounded outline-none border-gray-500 text-[10px] pl-[2px] text-white" type="text" placeholder={placeholderMax} />
        </div>
    )
}

export default FilterMinMax