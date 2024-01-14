import React, {ChangeEvent} from 'react'
import classes from './NewMessageArea.module.css'
import {ActionType, NewMessageAreaPropsType, sendNewMessageCreator, updateNewSendMessageCreator} from '../../../../../../redux/state'


const NewMessageArea: React.FC<NewMessageAreaPropsType> = (props) => {

    // Функция срабатывающая при клике
    const onClickAddNewMessHandler = () => {
        props.dispatch(sendNewMessageCreator() as ActionType)
    }

    // Функция срабатывающая при изменении
    let onChangeNewMessHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let textareaValue = e.currentTarget.value

        props.dispatch(updateNewSendMessageCreator(textareaValue) as ActionType)
    }

    return (
        <div className={classes.new_message}>

                <textarea onChange={onChangeNewMessHandler}
                          defaultValue={props.newMessg}
                          className={classes.new_message__textarea}
                          placeholder={'Your message begins here ...'}>
                </textarea>

            <button onClick={onClickAddNewMessHandler}
                    className={classes.new_message__button}>
                Send new message
            </button>
        </div>
    )
}

export default NewMessageArea