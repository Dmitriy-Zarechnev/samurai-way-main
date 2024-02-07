import {FriendsSideBar} from './FriendsSideBar'
import {connect} from 'react-redux'
import {RootStateDataType} from '../../../../../types/entities'



let mapStateToProps = (state: RootStateDataType) => {
    return {
        friendsList: state.friendsListData
    }
}

export const FriendsSideBarContainer = connect(mapStateToProps, {})(FriendsSideBar)

