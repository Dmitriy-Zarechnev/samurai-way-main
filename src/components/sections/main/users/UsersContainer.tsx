import React from 'react'
import {connect} from 'react-redux'
import Users from './Users'
import {ActionType, RootStateDataType, UsersListType} from '../../../../redux/redux-store'
import {followAC, setUsersAC, unfollowAC} from '../../../../redux/users-reducer'

let mapStateToProps = (state: RootStateDataType) => {
    return {
        items: state.usersPage.items
    }
}

let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        followFriend: (userID: number) => {
            dispatch(followAC(userID) as ActionType)
        },
        unfollowFriend: (userID: number) => {
            dispatch(unfollowAC(userID) as ActionType)
        },
        setUsers: (items: UsersListType[]) => {

            dispatch(setUsersAC(items) as ActionType)
        }
    }
}

const UsersContainer: React.FC = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer