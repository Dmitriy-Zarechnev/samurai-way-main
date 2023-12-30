import React from 'react'
import classes from './DialogItem.module.css'
import {NavLink} from 'react-router-dom'
import {DialogsDataType} from '../../../../../../redux/state'


const DialogItem: React.FC<{ dialogsData: Array<DialogsDataType> }> = (props) => {
    return (
        <ul className={classes.dialog_items}>
            {props.dialogsData.map((el: DialogsDataType) => {
                return (
                    <li key={el.id} className={classes.dialog_items__item}>
                        <NavLink to={`/dialogs/${el.id}`}><img className={classes.dialog_items__img} src={el.src} alt={el.alt}/></NavLink>
                        <NavLink to={`/dialogs/${el.id}`}>{el.name}</NavLink>
                    </li>
                )
            })}
        </ul>
    )
}

export default DialogItem