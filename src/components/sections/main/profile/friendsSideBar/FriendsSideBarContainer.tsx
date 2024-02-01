import FriendsSideBar from './FriendsSideBar'
import {connect} from 'react-redux'
import {EmptyActionType, RootStateDataType} from '../../../../../redux/redux-store'
import {Dispatch} from 'redux'


let mapStateToProps = (state: RootStateDataType) => {
    return {
        friendsList: state.friendsListData
    }
}

let mapDispatchToProps = (dispatch: Dispatch<EmptyActionType>) => {
    return {}
}

const FriendsSideBarContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsSideBar)

export default FriendsSideBarContainer