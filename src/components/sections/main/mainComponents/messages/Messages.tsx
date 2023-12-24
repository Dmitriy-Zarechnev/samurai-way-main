import React from 'react'
import classes from './Messages.module.css'
import MyDialogs from './myDialogs/MyDialogs'
import MyMessages from './myMessages/MyMessages'


const Messages: React.FC = () => {
    return (
        <section className={classes.dialogs}>
            <MyDialogs/>
            <MyMessages/>
        </section>
    )
}


export default Messages