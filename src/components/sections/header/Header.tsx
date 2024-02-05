import React from 'react'
import logo from '../../../assets/images/logo.svg'
import S from './Header.module.css'
import {NavLink} from 'react-router-dom'
import {UserDataType} from '../../../redux/redux-store'

export type HeaderPropsType = {
    isAuth: boolean,
    data: UserDataType
}


export const Header = (props: HeaderPropsType) => {

    return (
        <header className={S.app_header}>

            <img src={logo} alt={'main_logo'}/>

            <div className={S.login_block}>
                {props.isAuth ? props.data.login : <NavLink to={'/login'}>LogIn</NavLink>}
            </div>
        </header>
    )
}


