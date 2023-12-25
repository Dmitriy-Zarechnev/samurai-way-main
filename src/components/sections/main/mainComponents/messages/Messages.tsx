import React from 'react'
import classes from './Messages.module.css'
import MyDialogs from './myDialogs/MyDialogs'
import MyMessages from './myMessages/MyMessages'
import {DialogItemPropsType} from './myDialogs/dialogItem/DialogItem'
import {MessagePropsType} from './myMessages/message/Message'

export type MessagesPropsType = {} & MessagePropsType & DialogItemPropsType

const Messages: React.FC<MessagesPropsType> = (props: MessagesPropsType) => {
    return (
        <section className={classes.dialogs}>
            <MyDialogs dialogsData={props.dialogsData}/>
            <MyMessages messagesData={props.messagesData}/>
        </section>
    )
}

export default Messages