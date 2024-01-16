import './index.css'
import {StoreType} from './redux/store'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/redux-store'
import React from 'react'
import {Provider} from 'react-redux'


let rerenderEntireTree = (state: StoreType) => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root')
    )
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    rerenderEntireTree(store.getState())
})

