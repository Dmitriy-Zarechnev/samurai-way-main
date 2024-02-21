import React from 'react'
import {connect} from 'react-redux'
import {follow, getUsers, newPageGetUsers, unFollow} from '../../../../redux/users-reducer'
import {Users} from './Users'
import {Preloader} from '../../../common/preloader/Preloader'
import {AppRootState} from '../../../../redux/redux-store'
import {compose} from 'redux'


// Типизация
export type UsersAPIComponentPropsType =
    UsersAPIComponentMapStateToProps &
    UsersAPIComponentMapDispatchToProps

type UsersAPIComponentMapStateToProps = ReturnType<typeof mapStateToProps>

type UsersAPIComponentMapDispatchToProps = {
    getUsers: (currentPage: number, pageSize: number) => void
    newPageGetUsers: (currentPage: number, pageSize: number) => void
    unFollow: (id: number) => void
    follow: (id: number) => void
}


class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType> {


    //  -------- Первая загрузка списка пользователей ----------------
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    //  -------- Изменение текущей страницы ----------------
    onPageChanged = (currentPage: number) => {
        this.props.newPageGetUsers(currentPage, this.props.pageSize)
    }

    // ----- Изменение списка пагинации при переключении -------
    onPagination = () => {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        let curPg = this.props.currentPage
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
        return {pagStart, pagCenter, pagEnd}
    }

    render() {
        const {pagStart, pagCenter, pagEnd} = this.onPagination()

        return (
            <>
                {this.props.isFetching
                    ? <Preloader isFetching={this.props.isFetching}/>
                    : <Users
                        items={this.props.items}
                        totalCount={this.props.totalCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        pagStart={pagStart}
                        pagCenter={pagCenter}
                        pagEnd={pagEnd}
                        followingInProgress={this.props.followingInProgress}
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                    />
                }
            </>
        )
    }
}

const mapStateToProps = (state: AppRootState) => {
    return {
        items: state.usersPage.items,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = compose(
    // withAuthRedirect,
    connect(mapStateToProps,
        {getUsers, newPageGetUsers, follow, unFollow}
    ))(UsersAPIComponent)  as React.FC
