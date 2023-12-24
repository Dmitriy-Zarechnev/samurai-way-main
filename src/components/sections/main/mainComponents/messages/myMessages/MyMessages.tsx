import React from 'react'
import classes from './MyMessages.module.css'
import Message from './message/Message'

const messagesData = [
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

            <Message message={'hello'}/>
            <Message message={'hi'}/>
            <Message message={'qwerty'}/>
            <Message message={'food'}/>
            <Message message={'drink'}/>
        </div>
    )
}

export default MyMessages