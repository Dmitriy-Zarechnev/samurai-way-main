import {connect} from 'react-redux'
import {ProfileInfo} from './ProfileInfo'
import {goToPage, ProfileInfoType, setUserProfileAC} from '../../../../../redux/profile-reducer'
import React from 'react'
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom'
import {AppRootState} from '../../../../../redux/redux-store'

// Типизация
type ProfileInfoAPIComponentPropsType =
    ProfileInfoAPIComponentMapStateToProps &
    ProfileInfoAPIComponentMapDispatchToProps &
    RouteComponentProps<{ userId: string }>

type ProfileInfoAPIComponentMapStateToProps = ReturnType<typeof mapStateToProps>
type ProfileInfoAPIComponentMapDispatchToProps = {
    setUserProfile: (profileInfo: ProfileInfoType) => void
    goToPage: (id: string) => void
}

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


export const ProfileInfoContainer = connect(mapStateToProps, {setUserProfile: setUserProfileAC, goToPage})(withRouter(ProfileInfoAPIComponent))


