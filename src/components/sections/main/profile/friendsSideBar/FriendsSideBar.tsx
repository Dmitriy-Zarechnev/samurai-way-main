import React from 'react'
import classes from './FriendsSideBar.module.css'
import {FriendsListDataType} from '../../../../../redux/redux-store'
import FriendsList from '../../../../friendsList/FriendsList'

class FriendsSideBar extends React.Component<{ friendsList: Array<FriendsListDataType> }> {

    render() {
        return (
            <ul className={classes.friends_sidebar}>
                <h3 className={classes.friends_sidebar__header}>My Friends</h3>
                <FriendsList friendsList={this.props.friendsList} navlink={'profile'}/>
            </ul>
        )
    }
}

export default FriendsSideBar

// Функциональная компонента
/*
const FriendsSideBar: React.FC<{ friendsList: Array<FriendsListDataType> }> = ({friendsList}) => {
    return (
        <ul className={classes.friends_sidebar}>
            <h3 className={classes.friends_sidebar__header}>My Friends</h3>
            <FriendsList friendsList={friendsList} navlink={'profile'}/>
        </ul>
    )
}
 */


