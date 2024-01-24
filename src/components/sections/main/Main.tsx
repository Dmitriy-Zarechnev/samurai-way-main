import React from 'react'
import {Route} from 'react-router-dom'
import Messages from './messages/Messages'
import News from './news/News'
import Music from './music/Music'
import Settings from './settings/Settings'
import classes from './Main.module.css'
import Profile from './profile/Profile'
import UsersContainer from './users/UsersContainer'

class Main extends React.Component {
    render() {
        return (
            <div className={classes.app_main}>

                <Route path="/profile" render={() =>
                    <Profile/>}/>

                <Route path="/messages" render={() =>
                    <Messages/>}/>

                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>

                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        )
    }
}

export default Main

// Функциональная компонента
/*
const Main: React.FC = () => {
    return (
        <div className={classes.app_main}>

            <Route path="/profile" render={() =>
                <Profile/>}/>

            <Route path="/messages" render={() =>
                <Messages/>}/>

            <Route path="/news" render={() => <News/>}/>
            <Route path="/music" render={() => <Music/>}/>
            <Route path="/users" render={() => <UsersContainer/>}/>

            <Route path="/settings" render={() => <Settings/>}/>
        </div>
    )
}
 */