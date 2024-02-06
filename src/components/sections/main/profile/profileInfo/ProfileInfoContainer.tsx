import {connect} from 'react-redux'
import {ProfileInfo} from './ProfileInfo'
import {ProfileInfoType, RootStateDataType} from '../../../../../redux/redux-store'
import {setUserProfile} from '../../../../../redux/profile-reducer'
import React from 'react'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {profileAPI} from '../../../../../api/api'

export type ProfileInfoAPIComponentPropsType = {
    setUserProfile: (profileInfo: ProfileInfoType) => void
    profileInfo: ProfileInfoType | null
} & RouteComponentProps<{ userId: string }>


class ProfileInfoAPIComponent extends React.Component<ProfileInfoAPIComponentPropsType> {

    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) userId = 30743

        profileAPI.userProfile(userId).then(data => {
            this.props.setUserProfile(data)
        })
    }

    render() {
        return (
            <ProfileInfo profileInfo={this.props.profileInfo}/>)
    }
}


let mapStateToProps = (state: RootStateDataType) => {
    return {
        profileInfo: state.profilePage.profileInfo
    }
}


export const ProfileInfoContainer = connect(mapStateToProps, {setUserProfile})(withRouter(ProfileInfoAPIComponent))


