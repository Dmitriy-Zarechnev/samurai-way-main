import {connect} from 'react-redux'
import {ProfileInfo} from './ProfileInfo'
import {RootStateDataType} from '../../../../../redux/redux-store'


let mapStateToProps = (state: RootStateDataType) => {
    return {
        profileInfo: state.profilePage.profileInfo
    }
}


export const ProfileInfoContainer = connect(mapStateToProps, {})(ProfileInfo)


