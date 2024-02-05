import React from 'react'
import {Header} from './Header'
import {connect} from 'react-redux'
import {RootStateDataType, UserDataType} from '../../../redux/redux-store'
import axios from 'axios'
import {setAuthUserData} from '../../../redux/auth-reducer'

export type HeaderAPIContainerPropsType = {
    isAuth: boolean,
    data: UserDataType | {},
    setAuthUserData: (data: UserDataType) => void
}


class HeaderAPIContainer extends React.Component<HeaderAPIContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data)
                }
            })
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

const mapStateToProps = (state: RootStateDataType) => {
    return {
        isAuth: state.auth.isAuth,
        data: state.auth.data
    }
}

export const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(HeaderAPIContainer)


