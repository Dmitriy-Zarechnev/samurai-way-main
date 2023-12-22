import React from 'react'
import NavbarLeft from '../navBarLeft/NavbarLeft'
import classes from './Main.module.css'
import MainComponents from './mainComponents/MainComponents'

const Main: React.FC = () => {
    return (
        <main className={classes.app_main}>
            <NavbarLeft/>
            <MainComponents/>
        </main>
    )
}

export default Main