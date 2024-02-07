import React from 'react'
import S from './Button.module.css'
import {ButtonPropsType} from '../../../types/entities'


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



