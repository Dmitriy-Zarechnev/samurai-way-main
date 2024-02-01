import {connect} from 'react-redux'
import ProfileInfo from './ProfileInfo'
import { EmptyActionType, RootStateDataType} from '../../../../../redux/redux-store'
import {Dispatch} from 'redux'

let mapStateToProps = (state: RootStateDataType) => {
    return {
        profileInfo: state.profilePage.profileInfo
    }
}

let mapDispatchToProps = (dispatch: Dispatch<EmptyActionType>) => {
    return {}
}

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)


export default ProfileInfoContainer