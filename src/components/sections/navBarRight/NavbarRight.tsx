import React from 'react'
import classes from './NavbarRight.module.css'

const NavbarRight = () => {
    return (
        <aside className={classes.nav}>
            <ul>
                <h3>List of friends</h3>
                <li className={classes.item}><a href={'#'}>First Friend</a></li>
            </ul>
        </aside>
    )
}

export default NavbarRight