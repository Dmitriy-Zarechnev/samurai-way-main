import React from 'react'
import Button from '../../../common/button/Button'
import classes from './Users.module.css'
import min from '../../../../assets/images/min.jpg'
import {UsersPropsType} from '../../../../redux/redux-store'
import Pagination from '../../../common/pagination/Pagination'

const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let curPg = props.currentPage
    let curPF = ((curPg - 5) < 0) ? 0 : curPg - 5
    let curPL = curPg + 5

    let pagStart = pages.slice(0, 3)
    let pagCenter = pages.slice(curPF, curPL)
    let pagEnd = pages.slice(pages.length - 3)

    if (curPg <= 7) {
        pagStart = []
    }
    if (curPg >= pages.length - 7) {
        pagEnd = []
    }

    return (
        <div className={classes.users_lists}>
            <div className={classes.users_lists__pagination}>
                <Pagination
                    currentArray={pagStart}
                    onPageChanged={props.onPageChanged}
                    currentPage={props.currentPage}/>
                {pagStart.length > 0 && <span className={classes.users_lists__dotes}>... </span>}

                <Pagination
                    currentArray={pagCenter}
                    onPageChanged={props.onPageChanged}
                    currentPage={props.currentPage}/>

                {pagEnd.length > 0 && <span className={classes.users_lists__dotes}>... </span>}
                <Pagination
                    currentArray={pagEnd}
                    onPageChanged={props.onPageChanged}
                    currentPage={props.currentPage}/>
            </div>

            {props.items.map(el => {
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
                                    ? () => props.unfollowFriend(el.id)
                                    : () => props.followFriend(el.id)
                                }
                                additionalClass={
                                    el.followed
                                        ? `${classes.users_down_list__btn} ${classes.unfollow_red}`
                                        : classes.users_down_list__btn}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Users

// Функциональная компонента
//
// const UsersAPIComponent: React.FC<UsersPropsType> = (props) => {
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
//             <Button name={'Get UsersAPIComponent'} onClick={getUsers}/>
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
