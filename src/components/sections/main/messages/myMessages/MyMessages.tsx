import React from 'react'
import classes from './MyMessages.module.css'
import Message from './message/Message'
import {MyMessagesPropsType} from '../../../../../redux/redux-store'
import NewMessageArea from './newMessageArea/NewMessageArea'


class MyMessages extends React.Component<MyMessagesPropsType> {
    render() {

        return (
            <div className={classes.my_messages}>
                <h3 className={classes.my_messages__header}>Messages</h3>
                <Message messagesData={this.props.messagesData}/>
                <NewMessageArea newMessg={this.props.newMessg}
                                updateNewMessage={this.props.updateNewMessage}
                                sendNewMessage={this.props.sendNewMessage}
                />
            </div>
        )
    }
}

export default MyMessages

// Функциональная компонента
/*
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

 */