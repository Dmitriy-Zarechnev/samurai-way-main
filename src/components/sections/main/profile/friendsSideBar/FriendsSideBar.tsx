import React from 'react'
import S from './FriendsSideBar.module.css'
import {FriendsListDataType} from '../../../../../redux/redux-store'
import {FriendsList} from '../../../../common/friendsList/FriendsList'

export const FriendsSideBar = (props: { friendsList: Array<FriendsListDataType> }) => {
    return (
        <ul className={S.friends_sidebar}>
            <h3 className={S.friends_sidebar__header}>My Friends</h3>
            <FriendsList friendsList={props.friendsList} navlink={'profile'}/>
        </ul>
    )
}



