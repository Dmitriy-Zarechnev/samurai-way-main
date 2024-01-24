import React from 'react'
import {UsersPropsType} from '../../../../redux/redux-store'
import classes from './Users.module.css'
import Button from '../../../button/Button'
import axios from 'axios'
import min from '../../../../assets/images/min.jpg'

const Users: React.FC<UsersPropsType> = (props) => {

    if (props.items.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })
    }

    return (
        <div className={classes.users_lists}>
            {props.items.map(el => {
                return (
                    <div key={el.id} className={classes.users_list}>
                        <div className={classes.users_up_list}>
                            <img src={el.photos.small ? el.photos.small : min}
                                 alt={`${el.name}-AvatarImg`}
                                 className={classes.users_up_list__img}/>
                            <p className={classes.users_up_list__status}>{el.status}</p>
                        </div>
                        <div className={classes.users_down_list}>
                            <div className={classes.users_down_list__left}>
                                <h4 className={classes.users_down_list__left_fullName}>{el.name}</h4>
                                {/*<span className={classes.users_down_list__left_location}>city:*/}
                                {/*        <span> {el.location.city}</span>*/}
                                {/*</span>*/}
                                {/*<span className={classes.users_down_list__left_location}>country:*/}
                                {/*        <span> {el.location.country}</span>*/}
                                {/*</span>*/}
                            </div>

                            <Button
                                name={el.followed ? 'UnFollow' : 'Follow'}
                                onClick={el.followed
                                    ? () => props.unfollowFriend(el.id)
                                    : () => props.followFriend(el.id)
                                }
                                disabled={false}
                                additionalClass={el.followed ? classes.users_down_list__btn_red : ''}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Users