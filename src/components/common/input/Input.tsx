import React from 'react'
import S from './Input.module.css'
import {InputPropsType} from '../../../types/entities'


export const Input = (props: InputPropsType) => {
    return (
        <input
            id={props.id}
            type={props.type}
            autoComplete={'off'}
            onChange={props.onChange}
            onKeyDown={props.onKeyDown}
            value={props.value}
            placeholder={props.placeholder}
            className={S.input}
        />
    )
}

