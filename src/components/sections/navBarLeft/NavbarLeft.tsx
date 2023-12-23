import React from 'react'
import classes from './NavbarLeft.module.css'
import {NavLink} from 'react-router-dom'

const NavbarLeft: React.FC = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.item}><NavLink to={'/profile'} activeClassName={classes.active}>Profile</NavLink></li>
                <li className={classes.item}><NavLink to={'/messages'} activeClassName={classes.active}>Messages</NavLink></li>
                <li className={classes.item}><NavLink to={'/news'} activeClassName={classes.active}>News</NavLink></li>
                <li className={classes.item}><NavLink to={'/music'} activeClassName={classes.active}>Music</NavLink></li>

                <li className={classes.item}><NavLink to={'/settings'} activeClassName={classes.active}>Settings</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavbarLeft