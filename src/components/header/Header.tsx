import React from 'react'
import logo from '../../assets/images/logo.svg'
import classes from './Header.module.css'

const Header: React.FC = () => {
    return (
        <header className={classes.app_header}>
            <img src={logo} alt={'main_logo'}/>
        </header>
    )
}

export default Header