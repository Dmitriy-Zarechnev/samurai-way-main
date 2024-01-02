import React, {useRef} from 'react'
import classes from './MyMessages.module.css'
import Message from './message/Message'
import {MessagesDataType} from '../../../../../redux/state'


const MyMessages: React.FC<{
    messagesData: Array<MessagesDataType>,
    sendMessg: (textMessage: string) => void
}> = (props) => {

    // Связали textarea и button
    const newMessEl = useRef<HTMLTextAreaElement>(null)

    // Функция срабатывающая при клике
    const addNewMess = () => {
        const textareaValue = newMessEl.current?.value || ''

        props.sendMessg(textareaValue)

        // Очищаем значения поля ввода
        if (newMessEl.current) {
            newMessEl.current.value = ''
        }
    }


    return (
        <div className={classes.my_messages}>
            <h3 className={classes.my_messages__header}>Messages</h3>
            <Message messagesData={props.messagesData}/>
            <div className={classes.my_messages__new_message}>

                <textarea ref={newMessEl}
                          className={classes.my_messages__textarea} placeholder={'Your message begins here ...'}>
                </textarea>

                <button onClick={addNewMess}
                        className={classes.my_messages__button}>
                    Send new message
                </button>
            </div>
        </div>
    )
}

export default MyMessages