import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {PostsDataType} from './components/sections/main/mainComponents/profile/myPosts/post/Post'
import {DialogsDataType} from './components/sections/main/mainComponents/messages/myDialogs/dialogItem/DialogItem'
import {MessagesDataType} from './components/sections/main/mainComponents/messages/myMessages/message/Message'


//  Данные для Profile
const postsData: Array<PostsDataType> = [
    {id: 1, header: 'Begin', message: 'It is my first post', likesCount: 25},
    {id: 2, header: 'Process', message: 'It is my second post', likesCount: 40},
    {id: 3, header: 'End', message: 'It is my third post', likesCount: 52}
]

// Данные для Message
const dialogsData: Array<DialogsDataType> = [
    {id: 1, name: 'Bob'},
    {id: 2, name: 'Hulk'},
    {id: 3, name: 'Sam'},
    {id: 4, name: 'Bilbo'},
    {id: 5, name: 'Dworf'}
]

const messagesData:Array<MessagesDataType> = [
    {id: 1, message: 'hello'},
    {id: 2, message: 'hi'},
    {id: 3, message: 'qwerty'},
    {id: 4, message: 'food'},
    {id: 5, message: 'drink'}
]


ReactDOM.render(
    <App postsData={postsData}
         dialogsData={dialogsData}
         messagesData={messagesData}
    />,
  document.getElementById('root')
);