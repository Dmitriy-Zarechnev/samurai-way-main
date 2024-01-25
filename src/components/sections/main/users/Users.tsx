import React from 'react'
import Button from '../../../button/Button'
import classes from './Users.module.css'
import min from '../../../../assets/images/min.jpg'
import {UsersPropsType} from '../../../../redux/redux-store'
import axios from 'axios'


class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        return (
            <div className={classes.users_lists}>
                {this.props.items.map(el => {
                    return (
                        <div key={el.id} className={classes.users_list}>
                            <div className={classes.users_up_list}>
                                <img src={el.photos.small ? el.photos.small : min}
                                     alt={`${el.name}-AvatarImg`}
                                     className={classes.users_up_list__img}/>

                                <p className={classes.users_up_list__status}>
                                    {el.status}
                                </p>
                            </div>
                            <div className={classes.users_down_list}>
                                <h4 className={classes.users_down_list__left_fullName}>{el.name}</h4>

                                <Button
                                    name={el.followed ? 'UnFollow' : 'Follow'}
                                    onClick={el.followed
                                        ? () => this.props.unfollowFriend(el.id)
                                        : () => this.props.followFriend(el.id)
                                    }
                                    additionalClass={el.followed ? classes.users_down_list__btn_red : ''}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Users

// Функциональная компонента
//
// const Users: React.FC<UsersPropsType> = (props) => {
//
//     let getUsers = () => {
//         if (props.items.length === 0) {
//             axios.get('https://social-network.samuraijs.com/api/1.0/users')
//                 .then(response => {
//                     props.setUsers(response.data.items)
//                 })
//         }
//     }
//
//
//     return (
//         <div className={classes.users_lists}>
//             <Button name={'Get Users'} onClick={getUsers}/>
//
//             {props.items.map(el => {
//                 return (
//                     <div key={el.id} className={classes.users_list}>
//                         <div className={classes.users_up_list}>
//                             <img src={el.photos.small ? el.photos.small : min}
//                                  alt={`${el.name}-AvatarImg`}
//                                  className={classes.users_up_list__img}/>
//
//                             <p className={classes.users_up_list__status}>
//                                 {el.status}
//                             </p>
//                         </div>
//                         <div className={classes.users_down_list}>
//                             <div className={classes.users_down_list__left}>
//                                 <h4 className={classes.users_down_list__left_fullName}>{el.name}</h4>
// {/*<span className={classes.users_down_list__left_location}>city:*/}
// {/*        <span> {el.location.city}</span>*/}
// {/*</span>*/}
// {/*<span className={classes.users_down_list__left_location}>country:*/}
// {/*        <span> {el.location.country}</span>*/}
// {/*</span>*/}
//
//                             </div>
//
//                             <Button
//                                 name={el.followed ? 'UnFollow' : 'Follow'}
//                                 onClick={el.followed
//                                     ? () => props.unfollowFriend(el.id)
//                                     : () => props.followFriend(el.id)
//                                 }
//                                 additionalClass={el.followed ? classes.users_down_list__btn_red : ''}
//                             />
//                         </div>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }
