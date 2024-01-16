import React from 'react'
import classes from './Messages.module.css'
import MyDialogsContainer from './myDialogs/MyDialogsContainer'
import MyMessagesContainer from './myMessages/MyMessagesContainer'


const Messages: React.FC = () => {
    return (
        <section className={classes.messages}>
            <MyDialogsContainer />
            <MyMessagesContainer />
        </section>
    )
}


export default Messages