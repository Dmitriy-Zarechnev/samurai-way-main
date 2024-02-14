import React, {ChangeEvent, KeyboardEvent} from 'react'
import S from './TextArea.module.css'

// Типизация
type TextAreaPropsType = {
    placeholder: string
    value: string
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void
}

export const TextArea = (props: TextAreaPropsType) => {
    return (
        <textarea
            className={S.textarea}
            onChange={props.onChange}
            onKeyDown={props.onKeyDown}
            value={props.value}
            placeholder={props.placeholder}
        />
    )
}



