import { register } from "module"
import { InputHTMLAttributes } from "react"
import { useForm, SubmitHandler } from "react-hook-form"

interface FilterCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    text: string
    value: string
    register: string
}

const FilterCheckbox = ({ text, value, register }: FilterCheckboxProps) => {

    return (

        <li className="flex space-x-1">
            <input type="checkbox" value={value} name={register} />
            <p>{text}</p>
        </li>
    )
}

export default FilterCheckbox