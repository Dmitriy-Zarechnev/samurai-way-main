import React from 'react'
import classes from './NavbarRight.module.css'

const NavbarRight = () => {
    return (
        <aside className={classes.nav}>
            <ul>
                <li className={classes.item}><a href={'#'}>Profile</a></li>
                <li className={classes.item}><a href={'#'}>Messages</a></li>
                <li className={classes.item}><a href={'#'}>News</a></li>
                <li className={classes.item}><a href={'#'}>Music</a></li>

                <li className={classes.item}><a href={'#'}>Settings</a></li>
            </ul>
        </aside>
    )
}

export default NavbarRight