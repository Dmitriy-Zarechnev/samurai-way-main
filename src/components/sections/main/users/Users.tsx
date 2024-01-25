import React from 'react'
import Button from '../../../button/Button'
import classes from './Users.module.css'
import min from '../../../../assets/images/min.jpg'
import {UsersPropsType} from '../../../../redux/redux-store'
import axios from 'axios'

class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {


        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        let curPg = this.props.currentPage
        let curPF = ((curPg - 5) < 0) ? 0 : curPg - 5
        let curPL = curPg + 5
        let slicedPages = pages.slice(curPF, curPL)
        let res = [...pages.slice(0,2), ...pages.slice(curPF, curPL), ...pages.slice(pages.length - 3)]
        console.log(res)

        let res1 = pages.slice(0, 3)
        let res2 = pages.slice(curPF, curPL)
        let res3 = pages.slice(pages.length - 3)

        if (this.props.currentPage <= 7) {
            res1 = []
        }
        if (this.props.currentPage >= pages.length - 7) {
            res3 = []
        }

        return (
            <div className={classes.users_lists}>
                <div className={classes.users_lists__pagination}>
                    {res1.map(el => {
                        return (
                            <span className={this.props.currentPage === el ? classes.selected_page : ''}
                                  onClick={() => {
                                      this.onPageChanged(el)
                                  }}
                            >
                            {el} </span>
                        )
                    })}
                    {res1.length > 0 && <span>... </span>}

                    {res2.map(el => {
                        return (
                            <span className={this.props.currentPage === el ? classes.selected_page : ''}
                                  onClick={() => {
                                      this.onPageChanged(el)
                                  }}
                            >
                            {el} </span>)
                    })}

                    {res3.length > 0 && <span>... </span>}
                    {res3.map(el => {
                        return (
                            <span className={this.props.currentPage === el ? classes.selected_page : ''}
                                  onClick={() => {
                                      this.onPageChanged(el)
                                  }}
                            >
                            {el} </span>)
                    })}
                </div>

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
