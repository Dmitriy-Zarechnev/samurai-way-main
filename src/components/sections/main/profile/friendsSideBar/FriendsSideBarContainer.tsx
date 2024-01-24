import FriendsSideBar from './FriendsSideBar'
import {connect} from 'react-redux'
import {ActionType, RootStateDataType} from '../../../../../redux/redux-store'
import {Dispatch} from 'redux'


let mapStateToProps = (state: RootStateDataType) => {
    return {
        friendsList: state.friendsListData
    }
}

let mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
    return {}
}

const FriendsSideBarContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsSideBar)

export default FriendsSideBarContainer