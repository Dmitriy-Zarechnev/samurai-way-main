import './index.css'
import ReactDOM from 'react-dom'
import store from './redux/redux-store'
import React from 'react'
import {Provider} from 'react-redux'
import {AppConnect} from './App'


ReactDOM.render(
    <Provider store={store}>
        <AppConnect/>
    </Provider>,
    document.getElementById('root')
)






