import React from 'react'
import classes from './FriendsSideBar.module.css'
import {FriendsListDataType} from '../../../../../redux/state'
import {NavLink} from 'react-router-dom'


const FriendsSideBar: React.FC<{ friendsList: Array<FriendsListDataType> }> = (props) => {
    return (
        <ul className={classes.friends_sidebar}>
            <h3 className={classes.friends_sidebar__header}>My Friends</h3>
            {props.friendsList.map((el: FriendsListDataType) => {
                return (
                    <li className={classes.friends_sidebar__friend}
                        key={el.id}>

                        <NavLink
                            to={`/profile/${el.id}`}
                            className={classes.friends_sidebar__link}>
                            <img src={el.src}
                                 alt={el.alt}
                                 className={classes.friends_sidebar__img}/>
                        </NavLink>

                        <NavLink
                            to={`/profile/${el.id}`}
                            className={classes.friends_sidebar__name}>
                            {el.name}
                        </NavLink>

                    </li>
                )
            })}
        </ul>
    )
}

export default FriendsSideBar