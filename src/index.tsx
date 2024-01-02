import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import state, {addPost, sendMessg} from './redux/state'


ReactDOM.render(

    <App state={state} addPost={addPost} sendMessg={sendMessg}/>,
    document.getElementById('root')
)