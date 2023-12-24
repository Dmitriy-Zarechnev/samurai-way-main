import React from 'react'
import classes from './DialogItem.module.css'
import {NavLink} from 'react-router-dom'

type DialogItemPropsType = {
    name: string,
    id: string
}

const DialogItem: React.FC<DialogItemPropsType> = (props: DialogItemPropsType) => {
    return (
        <li className={classes.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </li>
    )
}

export default DialogItem