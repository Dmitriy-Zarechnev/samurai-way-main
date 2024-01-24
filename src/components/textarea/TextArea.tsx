import React from 'react'
import classes from './TextArea.module.css'
import {TextAreaPropsType} from '../../redux/redux-store'

class TextArea extends React.Component<TextAreaPropsType> {
    render() {
        return (
            <textarea
                className={classes.textarea}
                onChange={this.props.onChange}
                onKeyDown={this.props.onKeyDown}
                value={this.props.value}
                placeholder={this.props.placeholder}
            />
        )
    }
}

export default TextArea

// Функциональная компонента
/*
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
 */