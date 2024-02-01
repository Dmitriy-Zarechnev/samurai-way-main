import React from 'react'
import S from './Message.module.css'
import {MessagesDataType} from '../../../../../../redux/redux-store'


export const Message = (props: { messagesData: Array<MessagesDataType> }) => {
    return (
        <ul className={S.message_list}>
            {props.messagesData.map((el: MessagesDataType) => {
                return <li key={el.id} className={S.message_list__item}>{el.message}</li>
            })}
        </ul>
    )
}

export default Message

