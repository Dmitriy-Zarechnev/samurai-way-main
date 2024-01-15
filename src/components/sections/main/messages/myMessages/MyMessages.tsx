import React from 'react'
import classes from './MyMessages.module.css'
import Message from './message/Message'
import {MessagesDataType} from '../../../../../redux/store'
import NewMessageArea from './newMessageArea/NewMessageArea'

type MyMessagesPropsType = {
    messagesData: Array<MessagesDataType>
    newMessg: string,
    updateNewMessage: (textareaValue: string) => void,
    sendNewMessage: () => void
}

const MyMessages: React.FC<MyMessagesPropsType> = (props) => {

    return (
        <div className={classes.my_messages}>
            <h3 className={classes.my_messages__header}>Messages</h3>
            <Message messagesData={props.messagesData}/>
            <NewMessageArea newMessg={props.newMessg}
                            updateNewMessage={props.updateNewMessage}
                            sendNewMessage={props.sendNewMessage}
            />
        </div>
    )
}

export default MyMessages