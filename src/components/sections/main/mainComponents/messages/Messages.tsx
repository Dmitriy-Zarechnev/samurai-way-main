import React from 'react'
import classes from './Messages.module.css'
import {NavLink} from 'react-router-dom'

const Messages: React.FC = () => {
    return (
        <section className={classes.dialogs}>
            <ul className={classes.dialogs_items}>
                <h3 className={classes.dialogs_header}>Dialogs</h3>

                <li className={classes.dialog}>
                    <NavLink to={'/dialogs/1'}>Bob</NavLink>
                </li>

                <li className={`${classes.dialog} ${classes.active}`}>
                    <NavLink to={'/dialogs/2'}>Hulk</NavLink>
                </li>

                <li className={classes.dialog}>
                    <NavLink to={'/dialogs/3'}>Sam</NavLink>
                </li>

                <li className={classes.dialog}>
                    <NavLink to={'/dialogs/4'}>Bilbo</NavLink>
                </li>

                <li className={classes.dialog}>
                    <NavLink to={'/dialogs/5'}>Dworf</NavLink>
                </li>
            </ul>

            <div className={classes.messages}>
                <h3 className={classes.messages_header}>Messages</h3>
                <div className={classes.message}>hello</div>
                <div className={classes.message}>hi</div>
                <div className={classes.message}>qwerty</div>
                <div className={classes.message}>food</div>
                <div className={classes.message}>drink</div>
            </div>
        </section>
    )
}

export default Messages