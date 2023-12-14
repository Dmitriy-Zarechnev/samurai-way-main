import React from 'react'
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <img src={'https://cdn.logo.com/hotlink-ok/logo-social.png'} alt={'main_logo'}/>
        </header>
    )
}

export default Header