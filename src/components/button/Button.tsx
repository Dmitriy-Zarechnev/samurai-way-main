import React from 'react'
import classes from './Button.module.css'
import {ButtonPropsType} from '../../redux/redux-store'


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