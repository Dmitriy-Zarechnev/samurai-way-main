import React from 'react'
import classes from './TextArea.module.css'
import {TextAreaPropsType} from '../../redux/redux-store'

const TextArea: React.FC<TextAreaPropsType> = (props) => {
    return (
        <textarea
            className={classes.textarea}
            onChange={props.onChange}
            onKeyDown={props.onKeyDown}
            value={props.value}
            placeholder={props.placeholder}
        />
    )
}

export default TextArea