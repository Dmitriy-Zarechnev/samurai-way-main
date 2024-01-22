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
    return (
        <div>
            {props.users.map(el => {
                return (
                    <div key={el.id}>
                        <div>
                            <img src={el.photoURL} alt="img" className={classes.img}/>
                            {el.followed
                                ? <button onClick={() => {
                                    props.unfollowFriend(el.id)
                                }}>
                                    UnFollow
                                </button>
                                : <button onClick={() => {
                                    props.followFriend(el.id)
                                }}>
                                    Follow
                                </button>}
                        </div>
                        <div>
                            <div>
                                <h4>{el.fullName}</h4>
                                <p>{el.status}</p>
                            </div>
                            <div>
                                <span>{el.location.city}</span>
                                <span>{el.location.country}</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Users