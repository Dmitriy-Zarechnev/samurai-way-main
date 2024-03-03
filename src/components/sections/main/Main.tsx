import React from 'react'
import {Route} from 'react-router-dom'
import {Messages} from './messages/Messages'
import {News} from './news/News'
import {Music} from './music/Music'
import {Settings} from './settings/Settings'
import S from './Main.module.css'
import {UsersContainer} from './users/UsersContainer'
import {Profile} from './profile/Profile'
import {LogInContainer} from './logIn/LogInContainer'


export const Main = React.memo(() => {
    return (
        <div className={S.app_main}>
            {/* Стартовая страница при пустом url*/}
            <Route exact path="/" render={() =>
                <Profile/>}/>

            {/* Переход по страницам */}
            <Route path="/profile/:userId?" render={() =>
                <Profile/>}/>

            <Route path="/messages" render={() =>
                <Messages/>}/>

            <Route path="/news" render={() => <News/>}/>
            <Route path="/music" render={() => <Music/>}/>
            <Route path="/users" render={() => <UsersContainer/>}/>
            <Route path="/settings" render={() => <Settings/>}/>

            <Route path="/login" render={() => <LogInContainer/>}/>

            {/* Страница с ошибкой */}
            <Route path="/*" render={() => <div>404</div>}/>
        </div>
    )
})


