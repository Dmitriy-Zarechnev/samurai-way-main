import React from 'react'
import logo from '../../../assets/images/logo.svg'
import S from './Header.module.css'
import {NavLink} from 'react-router-dom'

export type HeaderPropsType = {}


export const Header = (props: HeaderPropsType) => {

    return (
        <header className={S.app_header}>

            <img src={logo} alt={'main_logo'}/>

            <div className={S.login_block}>
                <NavLink to={'/login'}>LogIn</NavLink>
            </div>
        </header>
    )
}


