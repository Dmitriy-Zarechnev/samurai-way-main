import React from 'react'
import classes from './MyMessages.module.css'
import Message, {MessagePropsType} from './message/Message'

const MyMessages: React.FC<MessagePropsType> = (props: MessagePropsType) => {
    return (
        <div className={classes.messages}>
            <h3 className={classes.messages_header}>Messages</h3>
            <Message messagesData={props.messagesData}/>
        </div>
    )
}

export default MyMessages