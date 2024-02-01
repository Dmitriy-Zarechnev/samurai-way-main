import React from 'react'
import {FriendsListDataType} from '../../../redux/redux-store'
import S from './FriendsList.module.css'
import {NavLink} from 'react-router-dom'


export const FriendsList = (props: { friendsList: FriendsListDataType[], navlink: string }) => {
    return (
        <div className={S.friends_lists}>
            {props.friendsList.map((el) => {
                return (
                    <li className={S.friend}
                        key={el.id}>

                        <NavLink
                            to={`/${props.navlink}/${el.id}`}
                            className={S.link}>
                            <img src={el.src}
                                 alt={el.alt}
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
