import React from 'react'
import classes from './FriendsSideBar.module.css'
import {FriendsListDataType} from '../../../../../redux/redux-store'
import FriendsList from '../../../../friendsList/FriendsList'

const FriendsSideBar: React.FC<{ friendsList: Array<FriendsListDataType> }> = ({friendsList}) => {
    return (
        <ul className={classes.friends_sidebar}>
            <h3 className={classes.friends_sidebar__header}>My Friends</h3>
            <FriendsList friendsList={friendsList} navlink={'profile'}/>
        </ul>
    )
}

export default FriendsSideBar