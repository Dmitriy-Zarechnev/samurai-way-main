import React from 'react'
import FriendsSideBar from './FriendsSideBar'
import {connect} from 'react-redux'
import {ActionType, RootStateDataType} from '../../../../../redux/redux-store'


let mapStateToProps = (state: RootStateDataType) => {
    return {
        friendsList: state.profilePage.friendsList
    }
}

let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {}
}

const FriendsSideBarContainer: React.FC = connect(mapStateToProps, mapDispatchToProps)(FriendsSideBar)

export default FriendsSideBarContainer