import React from 'react'
import classes from './Message.module.css'

export type MessagesDataType = {
    id: number,
    message: string
}

type MessagePropsType = {
    message: Array<MessagesDataType>
}

const Message: React.FC<MessagePropsType> = (props: MessagePropsType) => {
    return (
        <ul className={classes.messages_list}>
            {props.message.map((el: MessagesDataType) => {
                return <li key={el.id} className={classes.message}>{el.message}</li>
            })}
        </ul>
    )
}

export default Message