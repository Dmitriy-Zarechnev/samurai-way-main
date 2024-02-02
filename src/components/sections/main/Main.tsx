import React from 'react'
import {Route} from 'react-router-dom'
import {Messages} from './messages/Messages'
import {News} from './news/News'
import {Music} from './music/Music'
import {Settings} from './settings/Settings'
import S from './Main.module.css'
import {UsersContainer} from './users/UsersContainer'
import {Profile} from './profile/Profile'


export const Main = () => {
    return (
        <div className={S.app_main}>
            <Route exact path="/" render={() =>
                <Profile/>}/>

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


