import React, { FC, HTMLInputTypeAttribute } from "react"
import Select, { ActionMeta, GroupBase, OptionsOrGroups } from 'react-select';
type ISelect = {
    name?: string
    className?: string
    onChange?: (newValue: string | number, actionMeta: ActionMeta<string | number>) => void
    placeholder?: string
    value?: string | number | readonly string[]
    style?: React.CSSProperties
    label?: string
    required?: boolean
    options?: any,
}

const CustomSelect: FC<ISelect> = (props) => {
    return (
        <div className="mt-5">
            <Select
                className={props.className}
                value={props.value}
                onChange={props.onChange}
                options={props.options}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default CustomSelect