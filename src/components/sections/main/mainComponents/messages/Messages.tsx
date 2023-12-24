import React from 'react'
import classes from './Messages.module.css'
import {NavLink} from 'react-router-dom'

type DialogItemPropsType = {
    name: string,
    id: string
}


const Messages: React.FC = () => {
    return (
        <section className={classes.dialogs}>
            <ul className={classes.dialogs_items}>
                <h3 className={classes.dialogs_header}>Dialogs</h3>

                <DialogItem name={'Bob'} id={'1'}/>
                <DialogItem name={'Hulk'} id={'2'}/>
                <DialogItem name={'Sam'} id={'3'}/>
                <DialogItem name={'Bilbo'} id={'4'}/>
                <DialogItem name={'Dworf'} id={'5'}/>
            </ul>

            <div className={classes.messages}>
                <h3 className={classes.messages_header}>Messages</h3>

                <Message message={'hello'}/>
                <Message message={'hi'}/>
                <Message message={'qwerty'}/>
                <Message message={'food'}/>
                <Message message={'drink'}/>
            </div>
        </section>
    )
}


const DialogItem: React.FC<DialogItemPropsType> = (props: DialogItemPropsType) => {
    return (
        <li className={classes.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </li>
    )
}

const Message: React.FC<{ message: string }> = (props: { message: string }) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}


export default Messages