import React from 'react'
import classes from './Messages.module.css'
import MyDialogs from './myDialogs/MyDialogs'
import MyMessages from './myMessages/MyMessages'
import {DialogsDataType} from './myDialogs/dialogItem/DialogItem'
import {MessagesDataType} from './myMessages/message/Message'

const dialogsData: Array<DialogsDataType> = [
    {id: 1, name: 'Bob'},
    {id: 2, name: 'Hulk'},
    {id: 3, name: 'Sam'},
    {id: 4, name: 'Bilbo'},
    {id: 5, name: 'Dworf'}
]

const messagesData:Array<MessagesDataType> = [
    {id: 1, message: 'hello'},
    {id: 2, message: 'hi'},
    {id: 3, message: 'qwerty'},
    {id: 4, message: 'food'},
    {id: 5, message: 'drink'}
]


const Messages: React.FC = () => {
    return (
        <section className={classes.dialogs}>
            <MyDialogs dialogsData={dialogsData}/>
            <MyMessages messagesData={messagesData}/>
        </section>
    )
}


export default Messages