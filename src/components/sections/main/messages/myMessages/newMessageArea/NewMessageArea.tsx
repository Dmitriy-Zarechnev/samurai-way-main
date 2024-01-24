import React, {ChangeEvent, KeyboardEvent} from 'react'
import classes from './NewMessageArea.module.css'
import {NewMessageAreaPropsType} from '../../../../../../redux/redux-store'
import Button from '../../../../../button/Button'
import TextArea from '../../../../../textarea/TextArea'


class NewMessageArea extends React.Component<NewMessageAreaPropsType> {

    onClickAddNewMessHandler = () => {
        this.props.sendNewMessage()
    }

    onChangeNewMessHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let textareaValue = e.currentTarget.value
        this.props.updateNewMessage(textareaValue)
    }
    onKeyDownInputHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        e.ctrlKey && e.key === 'Enter' && this.onClickAddNewMessHandler()
    }

    render() {
        return (
            <div className={classes.new_message}>
                <TextArea
                    value={this.props.newMessg}
                    onChange={this.onChangeNewMessHandler}
                    onKeyDown={this.onKeyDownInputHandler}
                    placeholder={'Your message begins here ...'}
                />

                <Button
                    name={'Send new message'}
                    onClick={this.onClickAddNewMessHandler}
                    disabled={!this.props.newMessg}
                />
            </div>
        )
    }
}

export default NewMessageArea

// Функциональная компонента

/*
const NewMessageArea: React.FC<NewMessageAreaPropsType> = (props) => {

    const onClickAddNewMessHandler = () => {
        props.sendNewMessage()
    }

    let onChangeNewMessHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let textareaValue = e.currentTarget.value
        props.updateNewMessage(textareaValue)
    }
    const onKeyDownInputHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        e.ctrlKey && e.key === 'Enter' && onClickAddNewMessHandler()
    }

    return (
        <div className={classes.new_message}>
            <TextArea
                value={props.newMessg}
                onChange={onChangeNewMessHandler}
                onKeyDown={onKeyDownInputHandler}
                placeholder={'Your message begins here ...'}
            />

            <Button
                name={'Send new message'}
                onClick={onClickAddNewMessHandler}
                disabled={!props.newMessg}
            />
        </div>
    )
}
 */