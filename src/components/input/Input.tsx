import React from 'react'
import {InputPropsType} from '../../redux/redux-store'
import classes from './Input.module.css'


class Input extends React.Component<InputPropsType> {
    render() {
        return (
            <input
                id={this.props.id}
                type={this.props.type}
                autoComplete={'off'}
                onChange={this.props.onChange}
                onKeyDown={this.props.onKeyDown}
                value={this.props.value}
                placeholder={this.props.placeholder}
                className={classes.input}
            />
        )
    }
}

export default Input

// Функциональная компонента
/*
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
 */