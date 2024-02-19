import React from 'react'
import S from './Button.module.css'

// Типизация
type ButtonPropsType = {
    name: string
    onClick?: () => void
    disabled?: boolean
    additionalClass?: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button
            disabled={props.disabled}
            onClick={props.onClick}
            className={`${S.button} ${props.additionalClass}`}>
            {props.name}
        </button>
    )
}



