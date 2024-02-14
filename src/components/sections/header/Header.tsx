import React from 'react'
import logo from '../../../assets/images/logo.svg'
import S from './Header.module.css'
import {NavLink} from 'react-router-dom'
import {UserDataType} from '../../../redux/auth-reducer'


// Типизация
type HeaderPropsType = {
    isAuth: boolean
    data: UserDataType
}

export const Header = (props: HeaderPropsType) => {

    return (
        <header className={S.app_header}>

            <img src={logo} alt={'main_logo'}/>

            <div className={S.login_block}>
                {props.isAuth ? props.data.login : <NavLink to={'/logIn'}>LogIn</NavLink>}
            </div>
        </header>
    )
}


