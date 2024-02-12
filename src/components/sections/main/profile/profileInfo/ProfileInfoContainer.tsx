import {connect} from 'react-redux'
import {ProfileInfo} from './ProfileInfo'
import {goToPage, setUserProfile} from '../../../../../redux/profile-reducer'
import React from 'react'
import {Redirect, withRouter} from 'react-router-dom'
import {ProfileInfoAPIComponentPropsType} from '../../../../../types/entities'
import {AppRootState} from '../../../../../redux/redux-store'


class ProfileInfoAPIComponent extends React.Component<ProfileInfoAPIComponentPropsType> {

    //  -------- Загрузка страницы пользователя ----------------
    componentDidMount() {
        this.props.goToPage(this.props.match.params.userId)
    }

    render() {
        //  -------- Redirect -------------
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        
        return (
            <ProfileInfo profileInfo={this.props.profileInfo}/>)
    }
}


const mapStateToProps = (state: AppRootState) => {
    return {
        profileInfo: state.profilePage.profileInfo,
        isAuth: state.auth.isAuth
    }
}


export const ProfileInfoContainer = connect(mapStateToProps, {setUserProfile, goToPage})(withRouter(ProfileInfoAPIComponent))


