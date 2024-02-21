import React from 'react'
import S from './MyDialogs.module.css'
import {FriendsList} from '../../../../common/friendsList/FriendsList'
import {FriendsListDataType} from '../../../../../redux/reducers/friendslist-reducer'
import {UsersListType} from '../../../../../redux/reducers/users-reducer'



export const MyDialogs = (props: { friendsSuperList: Array<UsersListType> }) => {
    return (
        <ul className={S.my_dialogs}>
            <h3 className={S.my_dialogs__header}>Dialogs</h3>
            <FriendsList friendsList={props.friendsSuperList} navlink={'messages'}/>
        </ul>
    )
}

