import React from 'react'
import classes from './MusicData.module.css'

class MusicData extends React.Component {
    render() {
        return (
            <div className={classes.music_data}>
                Why
            </div>
        )
    }
}

export default MusicData

// Функциональная компонента
/*
const MusicData:React.FC = () => {
    return (
        <div className={classes.music_data}>
            Why
        </div>
    )
}
 */