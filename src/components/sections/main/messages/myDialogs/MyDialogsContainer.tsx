import React from 'react'
import MyDialogs from './MyDialogs'
import {connect} from 'react-redux'
import {ActionType, RootStateDataType} from '../../../../../redux/redux-store'



let mapStateToProps = (state: RootStateDataType) => {
    return {
        dialogsData: state.messagesPage.dialogsData
    }
}

let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {}
}

const MyDialogsContainer: React.FC = connect(mapStateToProps, mapDispatchToProps)(MyDialogs)
export default MyDialogsContainer