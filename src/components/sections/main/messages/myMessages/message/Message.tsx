import React from 'react'
import classes from './Message.module.css'
import {MessagesDataType} from '../../../../../../redux/redux-store'


class Message extends React.Component<{ messagesData: Array<MessagesDataType> }> {
    render() {
        return (
            <ul className={classes.message_list}>
                {this.props.messagesData.map((el: MessagesDataType) => {
                    return <li key={el.id} className={classes.message_list__item}>{el.message}</li>
                })}
            </ul>
        )
    }
}

export default Message

// Функциональная компонента
/*
const Message: React.FC<{ messagesData: Array<MessagesDataType> }> = ({messagesData}) => {
    return (
        <ul className={classes.message_list}>
            {messagesData.map((el: MessagesDataType) => {
                return <li key={el.id} className={classes.message_list__item}>{el.message}</li>
            })}
        </ul>
    )
}
 */