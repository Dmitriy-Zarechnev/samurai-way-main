import React from 'react'
import {Route} from 'react-router-dom'
import Profile from '../../profile/Profile'
import Messages from '../../messages/Messages'
import News from '../../news/News'
import Music from '../../music/Music'
import Settings from '../../settings/Settings'
import classes from '../Main.module.css'

const MainComponents: React.FC = () => {
    return (
        <div className={classes.content}>
            <Route path="/profile" component={Profile}/>
            <Route path="/messages" component={Messages}/>
            <Route path="/news" component={News}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>
        </div>
    )
}

export default MainComponents