import React from 'react'
import classes from "./NavbarLeft.module.css"

const NavbarLeft = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.item}><a href={'#'}>Profile</a></li>
                <li className={classes.item}><a href={'#'}>Messages</a></li>
                <li className={classes.item}><a href={'#'}>News</a></li>
                <li className={classes.item}><a href={'#'}>Music</a></li>

                <li className={classes.item}><a href={'#'}>Settings</a></li>
            </ul>
        </nav>
    )
}

export default NavbarLeft