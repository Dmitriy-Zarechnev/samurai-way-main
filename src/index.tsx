import './index.css'
import {rerenderEntireTree} from './render'
import state, {addPost, sendMessg} from './redux/state'


rerenderEntireTree(state, addPost, sendMessg)

