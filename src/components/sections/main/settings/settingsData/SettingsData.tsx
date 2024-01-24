import React from 'react'
import classes from './SettingData.module.css'

class SettingsData extends React.Component {
    render() {
        return (
            <div className={classes.settings_data}>
                Hello
            </div>
        )
    }
}

export default SettingsData
// Функциональная компонента
/*
const SettingsData: React.FC = () => {
    return (
        <div className={classes.settings_data}>
            Hello
        </div>
    )
}

 */