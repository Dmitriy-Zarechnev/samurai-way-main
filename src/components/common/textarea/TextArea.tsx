import React from 'react'
import S from './TextArea.module.css'
import {TextAreaPropsType} from '../../../redux/redux-store'

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



