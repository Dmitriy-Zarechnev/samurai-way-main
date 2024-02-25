import './index.css'
import ReactDOM from 'react-dom'
import store from './redux/redux-store'
import React from 'react'
import {Provider} from 'react-redux'
import {AppConnect} from './App'
import {BrowserRouter} from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <AppConnect/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)






