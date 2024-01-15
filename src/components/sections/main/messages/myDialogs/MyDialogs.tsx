import React from 'react'
import classes from './MyDialogs.module.css'
import DialogItem from './dialogItem/DialogItem'
import {DialogsDataType} from '../../../../../redux/store'


const MyDialogs: React.FC<{ dialogsData: Array<DialogsDataType> }> = ({dialogsData} ) => {
    return (
        <div className={classes.my_dialogs}>
            <h3 className={classes.my_dialogs__header}>Dialogs</h3>

            <DialogItem dialogsData={dialogsData}/>
        </div>
    )
}

export default MyDialogs