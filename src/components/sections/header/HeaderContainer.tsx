import React from 'react'
import {Header} from './Header'
import {connect} from 'react-redux'
import {authMe, UserDataType} from '../../../redux/auth-reducer'
import {AppRootState} from '../../../redux/redux-store'

// Типизация
type HeaderAPIContainerPropsType =
    HeaderAPIComponentMapStateToProps &
    HeaderAPIComponentMapDispatchToProps

type HeaderAPIComponentMapStateToProps = ReturnType<typeof mapStateToProps>
type HeaderAPIComponentMapDispatchToProps = {
    authMe: () => void
}

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

export const HeaderContainer = connect(mapStateToProps, {authMe})(HeaderAPIContainer)


