import React from 'react'
import {Header} from './Header'
import {connect} from 'react-redux'
import {authMe} from '../../../redux/auth-reducer'
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
                {...this.props}
            />
        )
    }
}

const mapStateToProps = (state: AppRootState) => {
    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export const HeaderContainer = connect(mapStateToProps, {authMe})(HeaderAPIContainer)


