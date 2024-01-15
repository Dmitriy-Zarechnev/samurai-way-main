import './index.css'
import store, {RootStateDataType} from './redux/store'
import ReactDOM from 'react-dom'
import App from './App'


let rerenderEntireTree = (state: RootStateDataType) => {
    ReactDOM.render(
        <App state={state}
             dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    )
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

