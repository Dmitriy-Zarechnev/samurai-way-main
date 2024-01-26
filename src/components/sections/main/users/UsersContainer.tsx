import {connect} from 'react-redux'
import {ActionsTypes, RootStateDataType, UsersAPIComponentPropsType, UsersListType} from '../../../../redux/redux-store'
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from '../../../../redux/users-reducer'
import {Dispatch} from 'redux'
import React from 'react'
import axios from 'axios'
import Users from './Users'

class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType> {

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
        return (
            <Users
                items={this.props.items}
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                followFriend={this.props.followFriend}
                unfollowFriend={this.props.unfollowFriend}
                onPageChanged={this.onPageChanged}
            />
        )
    }
}

let mapStateToProps = (state: RootStateDataType) => {
    return {
        items: state.usersPage.items,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>) => {
    return {
        followFriend: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollowFriend: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (items: UsersListType[]) => {
            dispatch(setUsersAC(items))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

export default UsersContainer
