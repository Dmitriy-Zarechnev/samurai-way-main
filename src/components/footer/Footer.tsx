import React from 'react'
import logo from '../../assets/images/logo.svg'
import classes from './Footer.module.css'

const Footer:React.FC = () => {
    return (
        <footer className={classes.app_footer}>
            <div className={classes.footer}>
                <img src={logo} alt={'main_logo'}/>
            </div>
        </footer>
    )
}

export default Footer