import React from 'react'
import {UsersListType} from '../../../../redux/redux-store'
import classes from './Users.module.css'


type UsersPropsType = {
    users: UsersListType[],
    followFriend: (userID: number) => void,
    unfollowFriend: (userID: number) => void,
    setUsers: (users: UsersListType[]) => void
}


const Users: React.FC<UsersPropsType> = (props) => {

    // if (props.users.length === 0) {
    //     props.setUsers([
    //         {id: 1, fullName: 'dz', status: 'I am using react', followed: true, photoURL: min, location: {city: 'Zenon', country: 'Madagaskar'}},
    //         {id: 2, fullName: 'fc', status: 'I am using css', followed: false, photoURL: min, location: {city: 'Hell', country: 'Haven'}},
    //         {id: 3, fullName: 'gr', status: 'I am using html', followed: true, photoURL: min, location: {city: 'Paradice', country: 'Haven'}},
    //         {id: 4, fullName: 'ld', status: 'I am using bll', followed: false, photoURL: min, location: {city: 'Moscow', country: 'Zelda'}}
    //     ])
    // }

    return (
        <div className={classes.users_lists}>
            {props.users.map(el => {
                return (
                    <div key={el.id} className={classes.users_list}>
                        <div className={classes.users_up_list}>
                            <img src={el.photoURL} alt="img" className={classes.users_up_list__img}/>
                            <p className={classes.users_up_list__status}>{el.status}</p>
                        </div>
                        <div className={classes.users_down_list}>
                            <div className={classes.users_down_list__left}>
                                <h4 className={classes.users_down_list__left_fullName}>{el.fullName}</h4>
                                <div className={classes.users_down_list__left_down}>
                                    <span className={classes.users_down_list__left_country}>{el.location.country}</span>
                                    <span className={classes.users_down_list__left_city}>{el.location.city}</span>
                                </div>
                            </div>
                            <div className={classes.users_down_list__right}>
                                {el.followed
                                    ?
                                    <button onClick={() => {
                                        props.unfollowFriend(el.id)
                                    }}>
                                        UnFollow
                                    </button>
                                    :
                                    <button onClick={() => {
                                        props.followFriend(el.id)
                                    }}>
                                        Follow
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Users