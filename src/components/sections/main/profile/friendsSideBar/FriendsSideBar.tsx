import React from 'react'
import classes from './FriendsSideBar.module.css'
import {FriendsListDataType} from '../../../../../redux/state'


const FriendsSideBar: React.FC<{friendsList: Array<FriendsListDataType>}> = ( props) => {
    return (
        <div className={classes.friends_sidebar}>
            <h3 className={classes.friends_sidebar__header}>My Friends</h3>
            {props.friendsList.map((el: FriendsListDataType) => {
                return (
                    <div className={classes.friends_sidebar__friend} key={el.id}>
                        <img src={el.src} alt={el.alt} className={classes.friends_sidebar__img}/>
                        <span className={classes.friends_sidebar__name}>{el.name}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default FriendsSideBar