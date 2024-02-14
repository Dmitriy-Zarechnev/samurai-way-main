import React, {ChangeEvent, KeyboardEvent} from 'react'
import S from './Input.module.css'


// Типизация
type InputPropsType = {
    id: string
    type: string
    value: string
    autoComplete: 'off' | 'on'
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void
    placeholder: string
}

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

