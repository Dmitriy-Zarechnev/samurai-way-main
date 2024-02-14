import React from 'react'
import S from './Message.module.css'

export type MessagesDataType = {
    id: number
    message: string
}

export const Message = (props: { messagesData: Array<MessagesDataType> }) => {
    return (
        <ul className={S.message_list}>
            {props.messagesData.map((el: MessagesDataType) => {
                return <li key={el.id} className={S.message_list__item}>{el.message}</li>
            })}
        </ul>
    )
}



