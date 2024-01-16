import './index.css'
import {RootStateDataType} from './redux/store'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/redux-store'
import {StoreContext} from './StoreContext'
import {Provider} from 'react-redux'


let rerenderEntireTree = (state: RootStateDataType) => {
    ReactDOM.render(

        <Provider store={store} >
            <App />
        </Provider>,

        document.getElementById('root')
    )
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    rerenderEntireTree(store.getState())
})

