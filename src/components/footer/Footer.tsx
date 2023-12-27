import React from 'react'
import logo from '../../assets/images/logo.svg'
import classes from './Footer.module.css'

const Footer: React.FC = () => {
    return (
        <footer className={classes.app_footer}>

                <img src={logo} alt={'main_logo'}/>

        </footer>
    )
}

export default Footer