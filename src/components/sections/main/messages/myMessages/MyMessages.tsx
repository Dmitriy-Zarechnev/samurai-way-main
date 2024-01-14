import React from 'react'
import classes from './MyMessages.module.css'
import Message from './message/Message'
import {MessagesPageWithoutDialogsPropsType} from '../../../../../redux/state'
import NewMessageArea from './newMessageArea/NewMessageArea'


const MyMessages: React.FC<MessagesPageWithoutDialogsPropsType> = (props) => {

    return (
        <div className={classes.my_messages}>
            <h3 className={classes.my_messages__header}>Messages</h3>
            <Message messagesData={props.messagesData}/>
            <NewMessageArea newMessg={props.newMessg}
                            dispatch={props.dispatch}/>
        </div>
    )
}

export default MyMessages