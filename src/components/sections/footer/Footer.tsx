import React from 'react'
import logo from '../../../assets/images/MainLogo.svg'
import S from './Footer.module.css'

export const Footer = React.memo(() => {
    return (
        <footer className={S.app_footer}>

            <img src={logo} alt={'main_logo'}/>

        </footer>
    )
})

