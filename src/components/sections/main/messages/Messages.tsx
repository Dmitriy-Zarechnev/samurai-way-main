import React from 'react'
import classes from './Messages.module.css'
import MyDialogs from './myDialogs/MyDialogs'
import MyMessages from './myMessages/MyMessages'
import {MessagesPagePropsType} from '../../../../redux/state'


const Messages: React.FC<{state: MessagesPagePropsType}> = (props: {state: MessagesPagePropsType}) => {
    return (
        <section className={classes.messages}>
            <MyDialogs dialogsData={props.state.dialogsData}/>
            <MyMessages messagesData={props.state.messagesData}/>
        </section>
    )
}

export default Messages