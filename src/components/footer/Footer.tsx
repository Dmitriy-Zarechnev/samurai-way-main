import React from 'react'
import logo from '../../assets/images/logo.svg'
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <img src={logo} alt={'main_logo'}/>
        </footer>
    )
}

export default Footer