import React from 'react'
import {connect} from 'react-redux'
import {AppRootState} from '../../../../redux/redux-store'
import {Inputs, LogIn} from './LogIn'
import {serverLogIn} from '../../../../redux/auth-reducer'

// Типизация
export type LogInAPIComponentPropsType =
    LogInAPIComponentMapStateToProps &
    LogInAPIComponentMapDispatchToProps

type LogInAPIComponentMapStateToProps = ReturnType<typeof mapStateToProps>

type LogInAPIComponentMapDispatchToProps = {
    serverLogIn: (email: string, password: string, rememberMe: boolean) => void
}


class LogInAPIComponent extends React.Component<LogInAPIComponentPropsType> {


    //  -------- Первая авторизация ----------------
    // componentDidMount() {
    //     this.props.serverLogIn(this.props.logIn.email, this.props.logIn.password, this.props.logIn.rememberMe)
    // }

    onSubmitForm = (data:Inputs) => {

        this.props.serverLogIn(data.LogIn, data.Password, data.Remember)
    }

    render() {
        return (
            <LogIn onSubmitForm={this.onSubmitForm} logIn={this.props.logIn}/>
        )
    }
}

const mapStateToProps = (state: AppRootState) => {
    return {
        logIn: state.auth.logIn
    }
}

export const LogInContainer =
    connect(mapStateToProps, {serverLogIn}
    )(LogInAPIComponent)
