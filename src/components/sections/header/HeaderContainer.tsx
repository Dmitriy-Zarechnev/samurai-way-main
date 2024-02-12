import React from 'react'
import {Header} from './Header'
import {connect} from 'react-redux'
import {authMe, setAuthUserData} from '../../../redux/auth-reducer'
import {HeaderAPIContainerPropsType, UserDataType} from '../../../types/entities'
import {AppRootState} from '../../../redux/redux-store'


class HeaderAPIContainer extends React.Component<HeaderAPIContainerPropsType> {

    //  -------- Авторизация на сервере ----------------
    componentDidMount() {
        this.props.authMe()
    }

    render() {
        return (
            <Header
                isAuth={this.props.isAuth}
                data={this.props.data as UserDataType}
            />
        )
    }
}

const mapStateToProps = (state: AppRootState) => {
    return {
        isAuth: state.auth.isAuth,
        data: state.auth.data
    }
}

export const HeaderContainer = connect(mapStateToProps, {setAuthUserData, authMe})(HeaderAPIContainer)


