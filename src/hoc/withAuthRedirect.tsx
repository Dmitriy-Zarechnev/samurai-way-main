import React from 'react'
import {AppRootState} from '../redux/redux-store'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


let mapStateToPropsForRedirect = (state: AppRootState) => {
    return {
        isAuth: state.auth.isAuth
    }
}
type mapStateToPropsForRedirectPropsType = ReturnType<typeof mapStateToPropsForRedirect>


// ---- HOC - используется чтобы добавить свойство redirect
export const withAuthRedirect = (Component: React.ComponentType<any>) => {
    class RedirectComponent extends React.Component<mapStateToPropsForRedirectPropsType> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component  />
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}

