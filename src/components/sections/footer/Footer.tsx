import React from 'react'
import logo from '../../../assets/images/logo.svg'
import S from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={S.app_footer}>

            <img src={logo} alt={'main_logo'}/>

        </footer>
    )
}

