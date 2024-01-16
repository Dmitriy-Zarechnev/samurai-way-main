import React, {ChangeEvent, KeyboardEvent} from 'react'
import classes from './NewMessageArea.module.css'


type NewMessageAreaPropsType = {
    newMessg: string,
    updateNewMessage: (textareaValue: string) => void,
    sendNewMessage: () => void
}

const NewMessageArea: React.FC<NewMessageAreaPropsType> = (props) => {

    const onClickAddNewMessHandler = () => {
        props.sendNewMessage()
    }

    let onChangeNewMessHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let textareaValue = e.currentTarget.value
        props.updateNewMessage(textareaValue)
    }
    const onKeyDownInputHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        e.key === 'Enter' && onClickAddNewMessHandler()
    }

    return (
        <div className={classes.new_message}>

            <textarea onChange={onChangeNewMessHandler}
                      onKeyDown={onKeyDownInputHandler}
                      value={props.newMessg}
                      className={classes.new_message__textarea}
                      placeholder={'Your message begins here ...'}/>

            <button onClick={onClickAddNewMessHandler}
                    className={classes.new_message__button}>
                Send new message
            </button>
        </div>
    )
}

export default NewMessageArea