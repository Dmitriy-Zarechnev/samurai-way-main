import React from 'react'
import logo from '../../../assets/images/logo.svg'
import classes from './Header.module.css'

class Header extends React.Component {
    render() {
        return (
            <header className={classes.app_header}>

                <img src={logo} alt={'main_logo'}/>

            </header>
        )
    }
}

export default Header
// Функциональная компонента
/*
const Header: React.FC = () => {
    return (
        <header className={classes.app_header}>

            <img src={logo} alt={'main_logo'}/>

        </header>
    )
}
 */