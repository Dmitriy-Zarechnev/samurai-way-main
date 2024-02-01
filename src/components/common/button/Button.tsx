import React from 'react'
import S from './Button.module.css'
import {ButtonPropsType} from '../../../redux/redux-store'


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



