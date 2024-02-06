import React from 'react'
import {Button} from '../../../common/button/Button'
import S from './Users.module.css'
import min from '../../../../assets/images/min.jpg'
import {UsersPropsType} from '../../../../redux/redux-store'
import {Pagination} from '../../../common/pagination/Pagination'
import {NavLink} from 'react-router-dom'
import {followUnfollowAPI} from '../../../../api/api'

export const Users = (props: UsersPropsType) => {

    return (
        <div className={S.users_lists}>
            <div className={S.users_lists__pagination}>
                <Pagination
                    currentArray={props.pagStart}
                    onPageChanged={props.onPageChanged}
                    currentPage={props.currentPage}/>
                {props.pagStart.length > 0 && <span className={S.users_lists__dotes}>... </span>}

                <Pagination
                    currentArray={props.pagCenter}
                    onPageChanged={props.onPageChanged}
                    currentPage={props.currentPage}/>

                {props.pagEnd.length > 0 && <span className={S.users_lists__dotes}>... </span>}
                <Pagination
                    currentArray={props.pagEnd}
                    onPageChanged={props.onPageChanged}
                    currentPage={props.currentPage}/>
            </div>

            {props.items.map(el => {
                return (
                    <div key={el.id} className={S.users_list}>
                        <div className={S.users_up_list}>

                            <NavLink to={`/profile/ ${el.id}`}>
                                <img src={el.photos.small ? el.photos.small : min}
                                     alt={`${el.name}-AvatarImg`}
                                     className={S.users_up_list__img}/>
                            </NavLink>

                            <p className={S.users_up_list__status}>
                                {el.status}
                            </p>
                        </div>
                        <div className={S.users_down_list}>
                            <NavLink to={`/profile/ ${el.id}`}>{el.name}</NavLink>

                            <Button
                                name={el.followed ? 'UnFollow' : 'Follow'}
                                onClick={
                                    el.followed
                                        ? () => {
                                            props.toggleFollowingInProgress(true, el.id)
                                            followUnfollowAPI.unfollowUser(el.id).then(data => {
                                                if (data.resultCode === 0) {
                                                    props.unfollowFriend(el.id)
                                                }
                                                props.toggleFollowingInProgress(false, el.id)
                                            })
                                        }
                                        : () => {
                                            props.toggleFollowingInProgress(true, el.id)
                                            followUnfollowAPI.followUser(el.id).then(data => {
                                                if (data.resultCode === 0) {
                                                    props.followFriend(el.id)
                                                }
                                                props.toggleFollowingInProgress(false, el.id)
                                            })
                                        }
                                }
                                additionalClass={
                                    el.followed
                                        ? `${S.users_down_list__btn} ${S.unfollow_red}`
                                        : S.users_down_list__btn}

                                disabled={props.followingInProgress.some(id => id === el.id)}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
