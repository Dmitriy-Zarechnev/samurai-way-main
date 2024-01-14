import React, {ChangeEvent} from 'react'
import classes from './NewMessageArea.module.css'
import {ActionType, NewMessageAreaPropsType} from '../../../../../../redux/state'
import {sendNewMessageCreator, updateNewSendMessageCreator} from '../../../../../../redux/messages-reducer'


const NewMessageArea: React.FC<NewMessageAreaPropsType> = (props) => {

    const onClickAddNewMessHandler = () => {
        props.dispatch(sendNewMessageCreator() as ActionType)
    }

    let onChangeNewMessHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let textareaValue = e.currentTarget.value

        props.dispatch(updateNewSendMessageCreator(textareaValue) as ActionType)
    }

    return (
        <div className={classes.new_message}>

            <textarea onChange={onChangeNewMessHandler}
                      value={props.newMessg}
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