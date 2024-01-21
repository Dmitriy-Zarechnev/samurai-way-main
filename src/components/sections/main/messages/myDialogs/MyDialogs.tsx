import React from 'react'
import classes from './MyDialogs.module.css'
import {DialogsDataType} from '../../../../../redux/redux-store'
import FriendsList from '../../../../friendsList/FriendsList'


const MyDialogs: React.FC<{ dialogsData: Array<DialogsDataType> }> = ({dialogsData}) => {
    return (
        <ul className={classes.my_dialogs}>
            <h3 className={classes.my_dialogs__header}>Dialogs</h3>
            <FriendsList friendsList={dialogsData} navlink={'messages'}/>
        </ul>
    )
}

export default MyDialogs