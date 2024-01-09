import React from 'react'
import {Route} from 'react-router-dom'
import Messages from './messages/Messages'
import News from './news/News'
import Music from './music/Music'
import Settings from './settings/Settings'
import classes from './Main.module.css'
import Profile from './profile/Profile'
import {SummaryStatePropsType} from '../../../redux/state'


const Main: React.FC<SummaryStatePropsType> = (props) => {
    return (
        <div className={classes.app_main}>

            <Route path="/profile" render={() =>
                <Profile state={props.state.profilePage}
                         dispatch={props.dispatch}
                />}/>

            <Route path="/messages" render={() =>
                <Messages state={props.state.messagesPage}
                          dispatch={props.dispatch}
                />}/>

            <Route path="/news" render={() => <News/>}/>
            <Route path="/music" render={() => <Music/>}/>
            <Route path="/settings" render={() => <Settings/>}/>
        </div>
    )
}

export default Main