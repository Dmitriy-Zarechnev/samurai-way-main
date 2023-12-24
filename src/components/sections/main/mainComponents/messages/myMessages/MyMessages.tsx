import React from 'react'
import classes from './MyMessages.module.css'
import Message, {MessagesDataType} from './message/Message'

const messagesData:Array<MessagesDataType> = [
    {id: 1, message: 'hello'},
    {id: 2, message: 'hi'},
    {id: 3, message: 'qwerty'},
    {id: 4, message: 'food'},
    {id: 5, message: 'drink'}
]


const MyMessages: React.FC = () => {
    return (
        <div className={classes.messages}>
            <h3 className={classes.messages_header}>Messages</h3>
            <Message message={messagesData}/>
        </div>
    )
}

export default MyMessages