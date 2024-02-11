import {connect} from 'react-redux'
import {ProfileInfo} from './ProfileInfo'
import {goToPage, setUserProfile} from '../../../../../redux/profile-reducer'
import React from 'react'
import {withRouter} from 'react-router-dom'
import {ProfileInfoAPIComponentPropsType, RootStateDataType} from '../../../../../types/entities'


class ProfileInfoAPIComponent extends React.Component<ProfileInfoAPIComponentPropsType> {

    //  -------- Загрузка страницы пользователя ----------------
    componentDidMount() {
        this.props.goToPage(this.props.match.params.userId)
    }

    render() {
        return (
            <ProfileInfo profileInfo={this.props.profileInfo}/>)
    }
}


const mapStateToProps = (state: RootStateDataType) => {
    return {
        profileInfo: state.profilePage.profileInfo
    }
}


export const ProfileInfoContainer = connect(mapStateToProps, {setUserProfile, goToPage})(withRouter(ProfileInfoAPIComponent))


