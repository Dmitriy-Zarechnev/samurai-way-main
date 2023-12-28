import React from 'react'
import classes from './Message.module.css'
import {MessagesDataType} from '../../../../../../redux/state'


const Message: React.FC<{ messagesData: Array<MessagesDataType> }> = (props: { messagesData: Array<MessagesDataType>}) => {
    return (
        <ul className={classes.messages_list}>
            {props.messagesData.map((el: MessagesDataType) => {
                return <li key={el.id} className={classes.message}>{el.message}</li>
            })}
        </ul>
    )
}

export default Message