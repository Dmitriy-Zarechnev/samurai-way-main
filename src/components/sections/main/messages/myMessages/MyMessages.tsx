import React, {ChangeEvent} from 'react'
import classes from './MyMessages.module.css'
import Message from './message/Message'
import {ActionType, MessagesPageWithoutDialogsPropsType, sendNewMessageCreator, updateNewSendMessageCreator} from '../../../../../redux/state'


const MyMessages: React.FC<MessagesPageWithoutDialogsPropsType> = (props) => {

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
        <div className={classes.my_messages}>
            <h3 className={classes.my_messages__header}>Messages</h3>
            <Message messagesData={props.messagesData}/>
            <div className={classes.my_messages__new_message}>

                <textarea onChange={onChangeNewMessHandler}
                          value={props.newMessg}
                          className={classes.my_messages__textarea}
                          placeholder={'Your message begins here ...'}>
                </textarea>

                <button onClick={onClickAddNewMessHandler}
                        className={classes.my_messages__button}>
                    Send new message
                </button>
            </div>
        </div>
    )
}

export default MyMessages