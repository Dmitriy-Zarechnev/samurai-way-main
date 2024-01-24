import React from 'react'
import {FriendsListDataType} from '../../redux/redux-store'
import classes from './FriendsList.module.css'
import {NavLink} from 'react-router-dom'


const FriendsList: React.FC<{ friendsList: FriendsListDataType[], navlink: string }> = ({friendsList, navlink}) => {
    return (
        <div className={classes.friends_lists}>
            {friendsList.map((el) => {
                return (
                    <li className={classes.friend}
                        key={el.id}>

                        <NavLink
                            to={`/${navlink}/${el.id}`}
                            className={classes.link}>
                            <img src={el.src}
                                 alt={el.alt}
                                 className={classes.img}/>
                        </NavLink>

                        <NavLink
                            to={`/${navlink}/${el.id}`}
                            className={classes.name}>
                            {el.name}
                        </NavLink>
                    </li>
                )
            })}
        </div>
    )
}

export default FriendsList