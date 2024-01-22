import React from 'react'
import classes from './NavbarLeft.module.css'
import {NavLink} from 'react-router-dom'

const NavbarLeft: React.FC = () => {
    return (
        <nav className={classes.navbar_Left}>
            <ul>
                <li className={classes.navbar_Left__item}><NavLink to={'/profile'} activeClassName={classes.active}>Profile</NavLink></li>
                <li className={classes.navbar_Left__item}><NavLink to={'/messages'} activeClassName={classes.active}>Messages</NavLink></li>
                <li className={classes.navbar_Left__item}><NavLink to={'/news'} activeClassName={classes.active}>News</NavLink></li>
                <li className={classes.navbar_Left__item}><NavLink to={'/music'} activeClassName={classes.active}>Music</NavLink></li>
                <li className={classes.navbar_Left__item}><NavLink to={'/users'} activeClassName={classes.active}>Users</NavLink></li>

                <li className={classes.navbar_Left__item}><NavLink to={'/settings'} activeClassName={classes.active}>Settings</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavbarLeft