import {connect} from 'react-redux'
import {ProfileInfo} from './ProfileInfo'
import {goToPage, ProfileInfoType, setUserProfile} from '../../../../../redux/profile-reducer'
import React from 'react'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {AppRootState} from '../../../../../redux/redux-store'
import {withAuthRedirect} from '../../../../../hoc/withAuthRedirect'

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

        return (
            <ProfileInfo profileInfo={this.props.profileInfo}/>)
    }
}

// ---- HOC - используется чтобы добавить свойство redirect
/*
const AuthRedirectComponent = (props: ProfileInfoAPIComponentPropsType) => {

    //  -------- Redirect -------------
    if (!props.isAuth) return <Redirect to={'/login'}/>

    return <ProfileInfoAPIComponent {...props}/>
}

 */


const mapStateToProps = (state: AppRootState) => {
    return {
        profileInfo: state.profilePage.profileInfo
    }
}


export const ProfileInfoContainer = connect(mapStateToProps, {setUserProfile, goToPage})(withRouter(ProfileInfoAPIComponent))


