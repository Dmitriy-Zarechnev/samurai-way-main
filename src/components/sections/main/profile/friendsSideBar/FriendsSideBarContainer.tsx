import {FriendsSideBar} from './FriendsSideBar'
import {connect} from 'react-redux'
import {AppRootState} from '../../../../../redux/redux-store'


let mapStateToProps = (state: AppRootState) => {
    return {
        friendsList: state.friendsListData
    }
}

export const FriendsSideBarContainer = connect(mapStateToProps, {})(FriendsSideBar)

