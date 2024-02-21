import {FriendsSideBar} from './FriendsSideBar'
import {connect} from 'react-redux'
import {AppRootState} from '../../../../../redux/redux-store'
import {friendsSuperSelector} from '../../../../../redux/selectors/friendlist-selector'


let mapStateToProps = (state: AppRootState) => {
    return {
        friendsList: state.friendsListData,
        friendsSuperList: friendsSuperSelector(state)
    }
}

export const FriendsSideBarContainer = connect(mapStateToProps, {})(FriendsSideBar)

