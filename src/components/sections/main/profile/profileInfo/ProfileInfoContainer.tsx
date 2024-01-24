import React from 'react'
import {connect} from 'react-redux'
import ProfileInfo from './ProfileInfo'
import {ActionType, RootStateDataType} from '../../../../../redux/redux-store'
import {Dispatch} from 'redux'

let mapStateToProps = (state: RootStateDataType) => {
    return {
        profileInfo: state.profilePage.profileInfo
    }
}

let mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
    return {}
}

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)


export default ProfileInfoContainer