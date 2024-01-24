import React from 'react'
import classes from './SettingSideBar.module.css'

class SettingsSideBar extends React.Component {
    render() {
        return (
            <div className={classes.settings_sidebar}>
                Hello
            </div>
        )
    }
}

export default SettingsSideBar
// Функциональная компонента
/*
const SettingsSideBar:React.FC = () => {
    return (
        <div className={classes.settings_sidebar}>
            Hello
        </div>
    )
}
 */