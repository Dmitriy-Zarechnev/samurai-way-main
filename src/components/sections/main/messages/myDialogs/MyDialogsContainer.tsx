import React from 'react'
import MyDialogs from './MyDialogs'
import {connect} from 'react-redux'
import {ActionType, RootStateDataType} from '../../../../../redux/redux-store'
import {Dispatch} from 'redux'


let mapStateToProps = (state: RootStateDataType) => {
    return {
        dialogsData: state.friendsListData
    }
}

let mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
    return {}
}

const MyDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(MyDialogs)
export default MyDialogsContainer