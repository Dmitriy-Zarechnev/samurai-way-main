import React from 'react'
import classes from './Messages.module.css'
import {StoreType} from '../../../../redux/store'
import MyDialogsContainer from './myDialogs/MyDialogsContainer'
import MyMessagesContainer from './myMessages/MyMessagesContainer'


const Messages: React.FC<{ store: StoreType }> = ({store}) => {
    return (
        <section className={classes.messages}>
            <MyDialogsContainer store={store}/>
            <MyMessagesContainer store={store}/>
        </section>
    )
}


export default Messages