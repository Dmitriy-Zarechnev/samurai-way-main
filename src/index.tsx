import './index.css'
import {rerenderEntireTree} from './render'
import state, {addPost, sendMessg, updateNewPostText} from './redux/state'


rerenderEntireTree(state,addPost ,updateNewPostText,sendMessg )

