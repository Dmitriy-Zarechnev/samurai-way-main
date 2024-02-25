import {connect} from 'react-redux'
import {ProfileInfo} from './ProfileInfo'
import {getStatus, goToPage, ProfileInfoType, setUserProfile, updateStatus} from '../../../../../redux/reducers/profile-reducer'
import React from 'react'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {AppRootState} from '../../../../../redux/redux-store'
import {compose} from 'redux'
import {getId, getIsAuth, getProfileInfo, getStatusFromState} from '../../../../../redux/selectors/profile-selector'

type ProfileInfoAPIComponentPropsType =
    ProfileInfoAPIComponentMapStateToProps &
    ProfileInfoAPIComponentMapDispatchToProps &
    RouteComponentProps<{ userId: string }>

type ProfileInfoAPIComponentMapStateToProps = ReturnType<typeof mapStateToProps>
type ProfileInfoAPIComponentMapDispatchToProps = {
    setUserProfile: (profileInfo: ProfileInfoType) => void
    goToPage: (id: string) => void
    getStatus: (userId: number | null) => void
    updateStatus: (status: string) => void
}

class ProfileInfoAPIComponent extends React.PureComponent<ProfileInfoAPIComponentPropsType> {

    //  -------- Загрузка страницы пользователя ----------------
    componentDidMount() {
        this.props.goToPage(this.props.match.params.userId)
        this.props.getStatus(30743)
    }

    render() {
        return (
            <ProfileInfo profileInfo={this.props.profileInfo}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
            />)
    }
}

const mapStateToProps = (state: AppRootState) => {
    return {
        profileInfo: getProfileInfo(state),
        status: getStatusFromState(state),
        userId: getId(state),
        isAuth: getIsAuth(state)
    }
}

export const ProfileInfoContainer = compose<React.ComponentType>(
    // withAuthRedirect,
    connect(mapStateToProps,
        {
            setUserProfile,
            goToPage,
            getStatus,
            updateStatus
        }),
    withRouter
)(ProfileInfoAPIComponent)


