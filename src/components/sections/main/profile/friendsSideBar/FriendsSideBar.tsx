import React from 'react'
import classes from './FriendsSideBar.module.css'
import cammyFriend from '../../../../../assets/images/webp/Cammy.webp'
import kratosFriend from '../../../../../assets/images/webp/Kratos.webp'
import groguFriend from '../../../../../assets/images/webp/Grogu.webp'
import trissFriend from '../../../../../assets/images/webp/Triss.webp'
import itachiFriend from '../../../../../assets/images/webp/Itachi.webp'
import {FriendsListDataType} from '../../../../../redux/state'


const FriendsList = [
    {
        id: 1,
        src: cammyFriend,
        name: 'Cammy',
        alt: 'Cammy Avatar'
    },

    {
        id: 2,
        src: kratosFriend,
        name: 'Kratos',
        alt: 'Kratos Avatar'
    },

    {
        id: 3,
        src: groguFriend,
        name: 'Grogu',
        alt: 'Grogu Avatar'
    },

    {
        id: 4,
        src: trissFriend,
        name: 'Triss',
        alt: 'Triss Avatar'
    },

    {
        id: 5,
        src: itachiFriend,
        name: 'itachi',
        alt: 'itachi Avatar'
    }
]

const FriendsSideBar: React.FC = () => {
    return (
        <div className={classes.friends_sidebar}>
            <h3 className={classes.friends_sidebar__header}>My Friends</h3>
            {FriendsList.map((el: FriendsListDataType) => {
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