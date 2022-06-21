import React, { FC, HTMLInputTypeAttribute } from "react"

type IInput = {
    name?: string
    className?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    placeholder?: string
    value?: string | number | readonly string[]
    style?: React.CSSProperties
    error?: string | undefined | ""
    type: HTMLInputTypeAttribute
    label?: string
    required?: boolean
}

const Input: FC<IInput> = (props) => {
    return (
        <div className="mt-5">
            <label className="float-left text-xs text-white font-sans">{props.label}{props.required ? "*" : ""} </label>
            <input
                className={`${props.className} w-full p-2 rounded-md mt-3 ${props.error ? "border-2 border-red-600" : ""}`}
                placeholder={props.placeholder}
                name={"apikey"}
                value={props.value}
                type={props.type}
                style={props.style}
                onChange={props.onChange}
                role="input"
            />
        </div>
    )
}

export default Input