import React from 'react'
import logo from '../../../assets/images/logo.svg'
import S from './Header.module.css'

export const Header = () => {
    return (
        <header className={S.app_header}>

            <img src={logo} alt={'main_logo'}/>

        </header>
    )
}


