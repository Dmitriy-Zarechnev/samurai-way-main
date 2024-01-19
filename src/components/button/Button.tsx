import React from 'react'
import classes from './Button.module.css'

type ButtonPropsType = {
    name: string
    onClick: () => void
    disabled: boolean
}

const Button: React.FC<ButtonPropsType> = (props) => {
    return (
        <button
            disabled={props.disabled}
            onClick={props.onClick}
            className={classes.button}>
            {props.name}
        </button>
    )
}

export default Button