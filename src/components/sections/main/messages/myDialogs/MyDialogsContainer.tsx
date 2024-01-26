import MyDialogs from './MyDialogs'
import {connect} from 'react-redux'
import {ActionsTypes, RootStateDataType} from '../../../../../redux/redux-store'
import {Dispatch} from 'redux'


let mapStateToProps = (state: RootStateDataType) => {
    return {
        dialogsData: state.friendsListData
    }
}

let mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>) => {
    return {}
}

const MyDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(MyDialogs)
export default MyDialogsContainer