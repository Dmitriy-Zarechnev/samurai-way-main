import React from 'react'
import classes from './MyDialogs.module.css'
import DialogItem from './dialogItem/DialogItem'

const dialogsData = [
    {id: 1, name: 'Bob'},
    {id: 2, name: 'Hulk'},
    {id: 3, name: 'Sam'},
    {id: 4, name: 'Bilbo'},
    {id: 5, name: 'Dworf'}
]


const MyDialogs:React.FC = () => {
    return (
        <ul className={classes.dialogs_items}>
            <h3 className={classes.dialogs_header}>Dialogs</h3>

            <DialogItem name={'Bob'} id={'1'}/>
            <DialogItem name={'Hulk'} id={'2'}/>
            <DialogItem name={'Sam'} id={'3'}/>
            <DialogItem name={'Bilbo'} id={'4'}/>
            <DialogItem name={'Dworf'} id={'5'}/>
        </ul>
    )
}

export default MyDialogs