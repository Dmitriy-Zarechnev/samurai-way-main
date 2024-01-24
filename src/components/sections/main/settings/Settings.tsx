import React from 'react'
import classes from './Settings.module.css'
import SettingsData from './settingsData/SettingsData'
import SettingsSideBar from './settingsSideBar/SettingsSideBar'

class Settings extends React.Component {
    render() {
        return (
            <section className={classes.settings}>
                <h2 className={classes.settings__header}>
                    Settings
                </h2>
                <SettingsData/>
                <SettingsSideBar/>
            </section>
        )
    }
}

export default Settings
// Функциональная компонента
/*
const Settings: React.FC = () => {
    return (
        <section className={classes.settings}>
            <h2 className={classes.settings__header}>
                Settings
            </h2>
            <SettingsData/>
            <SettingsSideBar/>
        </section>
    )
}
 */