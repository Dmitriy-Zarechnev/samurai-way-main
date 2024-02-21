import React from 'react'
import S from './FriendsList.module.css'
import {NavLink} from 'react-router-dom'
import fox from '../../../assets/images/white-fox.webp'
import {UsersListType} from '../../../redux/reducers/users-reducer'



export const FriendsList = (props: { friendsList: Array<UsersListType>, navlink: string }) => {
    return (
        <div className={S.friends_lists}>
            {props.friendsList.map((el) => {
                return (
                    <li className={S.friend}
                        key={el.id}>

                        <NavLink
                            to={`/${props.navlink}/${el.id}`}
                            className={S.link}>
                            <img src={el.photos.small?el.photos.small: fox}
                                 alt={`${el.name} - avatar`}
                                 className={S.img}/>
                        </NavLink>

                        <NavLink
                            to={`/${props.navlink}/${el.id}`}
                            className={S.name}>
                            {el.name}
                        </NavLink>
                    </li>
                )
            })}
        </div>
    )
}

