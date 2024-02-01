import React from 'react'
import {Button} from '../../../common/button/Button'
import S from './Users.module.css'
import min from '../../../../assets/images/min.jpg'
import {UsersPropsType} from '../../../../redux/redux-store'
import {Pagination} from '../../../common/pagination/Pagination'
import {NavLink} from 'react-router-dom'

export const Users = (props: UsersPropsType) => {

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
        <div className={S.users_lists}>
            <div className={S.users_lists__pagination}>
                <Pagination
                    currentArray={pagStart}
                    onPageChanged={props.onPageChanged}
                    currentPage={props.currentPage}/>
                {pagStart.length > 0 && <span className={S.users_lists__dotes}>... </span>}

                <Pagination
                    currentArray={pagCenter}
                    onPageChanged={props.onPageChanged}
                    currentPage={props.currentPage}/>

                {pagEnd.length > 0 && <span className={S.users_lists__dotes}>... </span>}
                <Pagination
                    currentArray={pagEnd}
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
                            <h4 className={S.users_down_list__left_fullName}>{el.name}</h4>

                            <Button
                                name={el.followed ? 'UnFollow' : 'Follow'}
                                onClick={el.followed
                                    ? () => props.unfollowFriend(el.id)
                                    : () => props.followFriend(el.id)
                                }
                                additionalClass={
                                    el.followed
                                        ? `${S.users_down_list__btn} ${S.unfollow_red}`
                                        : S.users_down_list__btn}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
