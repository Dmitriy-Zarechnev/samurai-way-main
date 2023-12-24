import React from 'react'
import classes from './MyDialogs.module.css'
import DialogItem, {DialogsDataType} from './dialogItem/DialogItem'


const dialogsData: Array<DialogsDataType> = [
    {id: 1, name: 'Bob'},
    {id: 2, name: 'Hulk'},
    {id: 3, name: 'Sam'},
    {id: 4, name: 'Bilbo'},
    {id: 5, name: 'Dworf'}
]


const MyDialogs: React.FC = () => {
    return (
        <div className={classes.dialogs_items}>
            <h3 className={classes.dialogs_header}>Dialogs</h3>

            <DialogItem dialogsData={dialogsData}/>
        </div>
    )
}

export default MyDialogs