import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {RootStateDataType, UsersAPIComponentPropsType} from '../../../../redux/redux-store'
import {followFriend, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollowFriend} from '../../../../redux/users-reducer'
import {Users} from './Users'
import {Preloader} from '../../../common/preloader/Preloader'

class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true}
        )
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`, {withCredentials: true})
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }


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
                        followFriend={this.props.followFriend}
                        unfollowFriend={this.props.unfollowFriend}
                        onPageChanged={this.onPageChanged}
                        pagStart={pagStart}
                        pagCenter={pagCenter}
                        pagEnd={pagEnd}
                    />
                }
            </>
        )
    }
}

const mapStateToProps = (state: RootStateDataType) => {
    return {
        items: state.usersPage.items,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


export const UsersContainer = connect(mapStateToProps,
    {followFriend, unfollowFriend, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching}
)(UsersAPIComponent)


