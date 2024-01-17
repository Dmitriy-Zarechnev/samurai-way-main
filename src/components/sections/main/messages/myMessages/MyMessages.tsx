import React from 'react'
import classes from './MyMessages.module.css'
import Message from './message/Message'
import { MyMessagesPropsType} from '../../../../../redux/redux-store'
import NewMessageArea from './newMessageArea/NewMessageArea'


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