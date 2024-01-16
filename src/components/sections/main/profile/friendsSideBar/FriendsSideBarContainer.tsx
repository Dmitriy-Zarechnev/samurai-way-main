import React from 'react'
import FriendsSideBar from './FriendsSideBar'
import {connect} from 'react-redux'
import {ActionType, RootStateDataType} from '../../../../../redux/store'

// Удалить после 45 урока
/*
const FriendsSideBarContainer: React.FC = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                return <FriendsSideBar friendsList={store.getState().profilePage.friendsList}/>
            }}
        </StoreContext.Consumer>
    )
}
 */
// --------------------------

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