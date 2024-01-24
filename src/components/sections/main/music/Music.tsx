import React from 'react'
import classes from './Music.module.css'
import MusicData from './musicData/MusicData'
import MusicSideBar from './musicSideBar/MusicSideBar'

class Music extends React.Component {
    render() {
        return (
            <section className={classes.music}>
                <h2 className={classes.music__header}>Music</h2>
                <MusicData/>
                <MusicSideBar/>
            </section>
        )
    }
}

export default Music

// Функциональная компонента
/*
const Music: React.FC = () => {
    return (
        <section className={classes.music}>
            <h2 className={classes.music__header}>Music</h2>
            <MusicData/>
            <MusicSideBar/>
        </section>
    )
}
 */