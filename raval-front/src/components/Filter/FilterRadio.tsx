interface FilterRadioProps {
    values: {
        text: string,
        value: string
    }[]
}

const FilterRadio = ({ values }: FilterRadioProps) => {
    return (
        <ul className="text-[10px] text-white space-y-[6px] my-2">
            {values.map((value, index) => (
                <li key={index} className="flex space-x-1">
                    <input type="radio" value={value.value} />
                    <p>{value.text}</p>
                </li>
            ))}
        </ul>
    )
}

export default FilterRadio