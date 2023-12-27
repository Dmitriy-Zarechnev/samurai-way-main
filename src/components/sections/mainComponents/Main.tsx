import React from 'react'
import {Route} from 'react-router-dom'
import Messages from './messages/Messages'
import News from './news/News'
import Music from './music/Music'
import Settings from './settings/Settings'
import classes from './Main.module.css'
import Profile from './profile/Profile'
import {DialogItemPropsType} from './messages/myDialogs/dialogItem/DialogItem'
import {MessagePropsType} from './messages/myMessages/message/Message'
import {PostPropsType} from './profile/myPosts/post/Post'

export type MessagesPropsType = {} & MessagePropsType & DialogItemPropsType & PostPropsType

const Main: React.FC<MessagesPropsType> = (props: MessagesPropsType) => {
    return (
        <div className={classes.content}>
            <Route path="/profile" render={() => <Profile postsData={props.postsData}/>}/>
            <Route path="/messages" render={() => <Messages dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
            <Route path="/news" render={() => <News/>}/>
            <Route path="/music" render={() => <Music/>}/>
            <Route path="/settings" render={() => <Settings/>}/>
        </div>
    )
}

export default Main