import './index.css'
import {rerenderEntireTree} from './render'
import state, {addPost, sendMessg, updateNewPostText, updateNewSendMessg} from './redux/state'


rerenderEntireTree(state, addPost, updateNewPostText, sendMessg, updateNewSendMessg)

