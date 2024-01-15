import React from 'react'
import classes from './Message.module.css'
import {MessagesDataType} from '../../../../../../redux/store'


const Message: React.FC<{ messagesData: Array<MessagesDataType> }> = (props) => {
    return (
        <ul className={classes.message_list}>
            {props.messagesData.map((el: MessagesDataType) => {
                return <li key={el.id} className={classes.message_list__item}>{el.message}</li>
            })}
        </ul>
    )
}

export default Message