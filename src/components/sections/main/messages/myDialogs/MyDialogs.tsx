import React from 'react'
import classes from './MyDialogs.module.css'
import DialogItem from './dialogItem/DialogItem'
import {DialogsDataType} from '../../../../../redux/state'


const MyDialogs: React.FC<{ dialogsData: Array<DialogsDataType> }> = (props: { dialogsData: Array<DialogsDataType> } ) => {
    return (
        <div className={classes.dialogs_items}>
            <h3 className={classes.dialogs_header}>Dialogs</h3>

            <DialogItem dialogsData={props.dialogsData}/>
        </div>
    )
}

export default MyDialogs