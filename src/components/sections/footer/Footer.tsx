import React from 'react'
import logo from '../../../assets/images/logo.svg'
import classes from './Footer.module.css'

class Footer extends React.Component {
    render() {
        return (
            <footer className={classes.app_footer}>

                <img src={logo} alt={'main_logo'}/>

            </footer>
        )
    }
}

export default Footer
// Функциональная компонента
/*
const Footer: React.FC = () => {
    return (
        <footer className={classes.app_footer}>

                <img src={logo} alt={'main_logo'}/>

        </footer>
    )
}
 */