import React from 'react'
import NavbarLeft from '../navBarLeft/NavbarLeft'
import Profile from '../profile/Profile'
import NavbarRight from '../navBarRight/NavbarRight'
import classes from './Main.module.css'

const Main = () => {
    return (
        <main className={classes.app_main}>
            <NavbarLeft/>
            <Profile/>
            <NavbarRight/>
        </main>
    )
}

export default Main