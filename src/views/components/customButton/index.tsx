import React, { FC } from 'react'

type IButton = {
    type?: "button" | "submit" | "reset"
    className?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    text: string
    style?: React.CSSProperties

}

const Button: FC<IButton> = (props) => {
    return (
        <button
            className={`${props.className} p-3 rounded-lg active:scale-x-95`}
            type={props.type}
            onClick={props.onClick}
            style={props.style}
            role="button"
        >
            {props.text}
        </button>
    )
}

export default Button