import React from 'react'
import classes from './DialogItem.module.css'
import {NavLink} from 'react-router-dom'
import {DialogsDataType} from '../../../../../../redux/redux-store'


const DialogItem: React.FC<{ dialogsData: Array<DialogsDataType> }> = ({dialogsData}) => {
    return (
        <div className={classes.dialog_items}>
            {dialogsData.map((el: DialogsDataType) => {
                return (
                    <li key={el.id} className={classes.dialog_items__item}>

                        <NavLink to={`/messages/${el.id}`}
                                 className={classes.dialog_items__link}>
                            <img className={classes.dialog_items__img}
                                 src={el.src}
                                 alt={el.alt}/>
                        </NavLink>

                        <NavLink to={`/messages/${el.id}`}>
                            {el.name}
                        </NavLink>
                    </li>
                )
            })}
        </div>
    )
}

export default DialogItem