import {connect} from 'react-redux'
import {ProfileInfo} from './ProfileInfo'
import {getStatus, goToPage, ProfileInfoType, setUserProfile, updateStatus} from '../../../../../redux/profile-reducer'
import React from 'react'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {AppRootState} from '../../../../../redux/redux-store'
import {compose} from 'redux'
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
    getStatus:(userId: string)=>void
    updateStatus:(status: string)=>void
}

class ProfileInfoAPIComponent extends React.Component<ProfileInfoAPIComponentPropsType> {

    //  -------- Загрузка страницы пользователя ----------------
    componentDidMount() {
        this.props.goToPage(this.props.match.params.userId)
        this.props.getStatus('30743')
    }

    render() {

        return (
            <ProfileInfo profileInfo={this.props.profileInfo} status={this.props.status} updateStatus={this.props.updateStatus}/>)
    }
}

const mapStateToProps = (state: AppRootState) => {
    return {
        profileInfo: state.profilePage.profileInfo,
        status:state.profilePage.status
    }
}

export const ProfileInfoContainer = compose(
    withAuthRedirect,
    connect(mapStateToProps,
        {
            setUserProfile,
            goToPage,
            getStatus,
            updateStatus
        }),
    withRouter
)(ProfileInfoAPIComponent) as React.FC


