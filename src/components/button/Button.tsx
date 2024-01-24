import React from 'react'
import classes from './Button.module.css'
import {ButtonPropsType} from '../../redux/redux-store'


class Button extends React.Component<ButtonPropsType> {
    render() {
        return (
            <button
                disabled={this.props.disabled}
                onClick={this.props.onClick}
                className={`${classes.button} ${this.props.additionalClass}`}>
                {this.props.name}
            </button>
        )
    }
}

export default Button

// Функциональная компонента
/*
const Button: React.FC<ButtonPropsType> = (props) => {
    return (
        <button
            disabled={props.disabled}
            onClick={props.onClick}
            className={`${classes.button} ${props.additionalClass}`}>
            {props.name}
        </button>
    )
}

 */