import React from 'react'
import S from './MyDialogs.module.css'
import {FriendsList} from '../../../../common/friendsList/FriendsList'
import {FriendsListDataType} from '../../../../../redux/reducers/friendsList-reducer'



export const MyDialogs = (props: { dialogsData: Array<FriendsListDataType>}) => {
    return (
        <ul className={S.my_dialogs}>
            <h3 className={S.my_dialogs__header}>Dialogs</h3>
            <FriendsList friendsList={props.dialogsData} navlink={'messages'}/>
        </ul>
    )
}

