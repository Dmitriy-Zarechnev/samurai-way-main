import React from 'react'
import logo from '../../../assets/images/logo.svg'
import S from './Header.module.css'
import {NavLink} from 'react-router-dom'


// Типизация
type HeaderPropsType = {
    id: number | null
    email: string
    login: string
    isAuth: boolean
}

export const Header = (props: HeaderPropsType) => {

    return (
        <header className={S.app_header}>

            <img src={logo} alt={'main_logo'}/>

            <div className={S.login_block}>
                {props.isAuth ? props.login : <NavLink to={'/logIn'}>LogIn</NavLink>}
            </div>
        </header>
    )
}


