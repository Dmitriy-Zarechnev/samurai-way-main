import React from 'react'
import classes from './MusicSideBar.module.css'

class MusicSideBar extends React.Component {
    render() {
        return (
            <div className={classes.music_sidebar}>
                Why
            </div>
        )
    }
}

export default MusicSideBar
// Функциональная компонента
/*
const MusicSideBar:React.FC = () => {
    return (
        <div className={classes.music_sidebar}>
            Why
        </div>
    )
}
 */