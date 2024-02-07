import React from 'react'
import {Header} from './Header'
import {connect} from 'react-redux'
import {setAuthUserData} from '../../../redux/auth-reducer'
import {authAPI} from '../../../api/api'
import {HeaderAPIContainerPropsType, RootStateDataType, UserDataType} from '../../../types/entities'



class HeaderAPIContainer extends React.Component<HeaderAPIContainerPropsType> {

    componentDidMount() {
        authAPI.authHeader().then(data => {
            if (data.resultCode === 0) {
                this.props.setAuthUserData(data.data)
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


