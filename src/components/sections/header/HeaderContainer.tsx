import React from 'react'
import {Header} from './Header'
import {connect} from 'react-redux'
import {RootStateDataType, UserDataType} from '../../../redux/redux-store'
import axios from 'axios'
import {setUserData} from '../../../redux/auth-reducer'

export type HeaderAPIContainerPropsType = {
    setUserData: (data: UserDataType) => void
}


class HeaderAPIContainer extends React.Component<HeaderAPIContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                debugger
                this.props.setUserData(response.data.data)
                debugger
            })
    }

    render() {
        return (
            <Header/>
        )
    }
}

const mapStateToProps = (state: RootStateDataType) => {
    return {}
}

export const HeaderContainer = connect(mapStateToProps, {setUserData})(HeaderAPIContainer)


