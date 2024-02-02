import {connect} from 'react-redux'
import {ProfileInfo} from './ProfileInfo'
import {ProfileInfoType, RootStateDataType} from '../../../../../redux/redux-store'
import {setUserProfile} from '../../../../../redux/profile-reducer'
import React from 'react'
import axios from 'axios'

export type ProfileInfoAPIComponentPropsType = {
    setUserProfile: (profileInfo: ProfileInfoType) => void
    profileInfo: ProfileInfoType | null
}


class ProfileInfoAPIComponent extends React.Component<ProfileInfoAPIComponentPropsType> {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`)
            .then(response => {
                this.props.setUserProfile(response.data)
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


export const ProfileInfoContainer = connect(mapStateToProps, {setUserProfile})(ProfileInfoAPIComponent)


