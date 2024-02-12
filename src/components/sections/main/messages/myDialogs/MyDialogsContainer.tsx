import {MyDialogs} from './MyDialogs'
import {connect} from 'react-redux'
import {AppRootState} from '../../../../../redux/redux-store'


let mapStateToProps = (state: AppRootState) => {
    return {
        dialogsData: state.friendsListData
    }
}


export const MyDialogsContainer = connect(mapStateToProps, {})(MyDialogs)
