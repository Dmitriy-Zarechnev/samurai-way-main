import React from 'react'
import classes from './FriendsBar.module.css'

const FriendsBar: React.FC = () => {
    return (
        <div className={classes.friends_sidebar}>
            <h3 className={classes.friends_sidebar__header}>My Friends</h3>
        </div>
    )
}

export default FriendsBar