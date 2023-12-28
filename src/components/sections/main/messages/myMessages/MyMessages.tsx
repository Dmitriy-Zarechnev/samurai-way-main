import React from 'react'
import classes from './MyMessages.module.css'
import Message from './message/Message'
import {MessagesDataType} from '../../../../../redux/state'


const MyMessages: React.FC<{messagesData: Array<MessagesDataType>}> = (props:{messagesData: Array<MessagesDataType>}) => {
    return (
        <div className={classes.my_messages}>
            <h3 className={classes.my_messages__header}>Messages</h3>
            <Message messagesData={props.messagesData}/>
        </div>
    )
}

export default MyMessages