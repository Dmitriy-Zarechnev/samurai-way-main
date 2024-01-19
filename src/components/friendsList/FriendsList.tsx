import React from 'react'
import {FriendsListDataType} from '../../redux/redux-store'
import classes from '../sections/main/profile/friendsSideBar/FriendsSideBar.module.css'
import {NavLink} from 'react-router-dom'


const FriendsList: React.FC<{ friendsList: FriendsListDataType[] }> = ({friendsList}) => {
    return (
        <div>
            {friendsList.map((el) => {
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
        </div>
    )
}

export default FriendsList