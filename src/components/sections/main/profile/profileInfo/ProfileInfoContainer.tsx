import React from 'react'
import {connect} from 'react-redux'
import ProfileInfo from './ProfileInfo'
import {ActionType, RootStateDataType} from '../../../../../redux/redux-store'

let mapStateToProps = (state: RootStateDataType) => {
    return {
        profileInfo: state.profilePage.profileInfo
    }
}

let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {}
}

const ProfileInfoContainer: React.FC = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)


export default ProfileInfoContainer