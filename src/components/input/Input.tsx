import React from 'react'
import {InputPropsType} from '../../redux/redux-store'
import classes from './Input.module.css'


const Input: React.FC<InputPropsType> = (props) => {
    return (
        <input
            id={props.id}
            type={props.type}
            autoComplete={'off'}
            onChange={props.onChange}
            onKeyDown={props.onKeyDown}
            value={props.value}
            placeholder={props.placeholder}
            className={classes.input}
        />
    )
}

export default Input