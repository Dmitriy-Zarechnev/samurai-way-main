import {MyDialogs} from './MyDialogs'
import {connect} from 'react-redux'
import {RootStateDataType} from '../../../../../redux/redux-store'


let mapStateToProps = (state: RootStateDataType) => {
    return {
        dialogsData: state.friendsListData
    }
}


export const MyDialogsContainer = connect(mapStateToProps, {})(MyDialogs)
