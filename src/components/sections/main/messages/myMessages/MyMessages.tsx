import React from 'react'
import S from './MyMessages.module.css'
import {Message} from './message/Message'
import {MyMessagesPropsType} from '../../../../../redux/redux-store'
import {NewMessageArea} from './newMessageArea/NewMessageArea'


export const MyMessages = (props: MyMessagesPropsType) => {
    return (
        <div className={S.my_messages}>
            <h3 className={S.my_messages__header}>Messages</h3>
            <Message messagesData={props.messagesData}/>
            <NewMessageArea newMessg={props.newMessg}
                            updateNewMessage={props.updateNewMessage}
                            sendNewMessage={props.sendNewMessage}
            />
        </div>
    )
}



