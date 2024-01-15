import './index.css'
import {RootStateDataType} from './redux/store'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/redux-store'


let rerenderEntireTree = (state: RootStateDataType) => {
    ReactDOM.render(
        <App
            store={store}
        />,
        document.getElementById('root')
    )
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    rerenderEntireTree(store.getState())
})

