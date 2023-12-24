import React from 'react'
import classes from './DialogItem.module.css'
import {NavLink} from 'react-router-dom'

export type DialogsDataType = {
    id: number,
    name: string
}

type DialogItemPropsType = {
    dialogsData: Array<DialogsDataType>
}

const DialogItem: React.FC<DialogItemPropsType> = (props: DialogItemPropsType) => {
    return (
        <ul className={classes.dialog_list}>
            {props.dialogsData.map((el: DialogsDataType) => {
                return <li key={el.id} className={classes.dialog}>
                    <NavLink to={`/dialogs/${el.id}`}>{el.name}</NavLink>
                </li>
            })}
        </ul>
    )
}

export default DialogItem