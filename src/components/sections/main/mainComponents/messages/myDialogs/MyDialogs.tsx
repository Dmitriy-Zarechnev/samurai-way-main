import React from 'react'
import classes from './MyDialogs.module.css'
import DialogItem, {DialogItemPropsType} from './dialogItem/DialogItem'


const MyDialogs: React.FC<DialogItemPropsType> = (props: DialogItemPropsType ) => {
    return (
        <div className={classes.dialogs_items}>
            <h3 className={classes.dialogs_header}>Dialogs</h3>

            <DialogItem dialogsData={props.dialogsData}/>
        </div>
    )
}

export default MyDialogs