import React from 'react'
import classes from './MyDialogs.module.css'
import DialogItem from './dialogItem/DialogItem'
import {DialogsDataType} from '../../../../../redux/state'


const MyDialogs: React.FC<{ dialogsData: Array<DialogsDataType> }> = (props ) => {
    return (
        <div className={classes.my_dialogs}>
            <h3 className={classes.my_dialogs__header}>Dialogs</h3>

            <DialogItem dialogsData={props.dialogsData}/>
        </div>
    )
}

export default MyDialogs