import React from 'react'
import {Header} from './Header'
import {connect} from 'react-redux'
import {serverLogOut} from '../../../redux/auth-reducer'
import {AppRootState} from '../../../redux/redux-store'

// Типизация
type HeaderAPIContainerPropsType =
    HeaderAPIComponentMapStateToProps &
    HeaderAPIComponentMapDispatchToProps

type HeaderAPIComponentMapStateToProps = ReturnType<typeof mapStateToProps>
type HeaderAPIComponentMapDispatchToProps = {
    serverLogOut: () => void
}

class HeaderAPIContainer extends React.Component<HeaderAPIContainerPropsType> {

    render() {
        return (
            <Header
                logOut={this.props.serverLogOut}
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

export const HeaderContainer = connect(mapStateToProps, {serverLogOut})(HeaderAPIContainer)


