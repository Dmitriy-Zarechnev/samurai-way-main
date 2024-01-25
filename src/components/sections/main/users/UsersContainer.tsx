import {connect} from 'react-redux'
import Users from './Users'
import {ActionType, RootStateDataType, UsersListType} from '../../../../redux/redux-store'
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from '../../../../redux/users-reducer'
import {Dispatch} from 'redux'

let mapStateToProps = (state: RootStateDataType) => {
    return {
        items: state.usersPage.items,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
    return {
        followFriend: (userID: number) => {
            dispatch(followAC(userID) as ActionType)
        },
        unfollowFriend: (userID: number) => {
            dispatch(unfollowAC(userID) as ActionType)
        },
        setUsers: (items: UsersListType[]) => {
            dispatch(setUsersAC(items) as ActionType)
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage) as ActionType)
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount) as ActionType)
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
