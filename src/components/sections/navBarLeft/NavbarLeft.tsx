import React from 'react'
import classes from './NavbarLeft.module.css'

const NavbarLeft: React.FC = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.item}><a href={'/profile'}>Profile</a></li>
                <li className={classes.item}><a href={'/messages'}>Messages</a></li>
                <li className={classes.item}><a href={'/news'}>News</a></li>
                <li className={classes.item}><a href={'/music'}>Music</a></li>

                <li className={classes.item}><a href={'/settings'}>Settings</a></li>
            </ul>
        </nav>
    )
}

export default NavbarLeft