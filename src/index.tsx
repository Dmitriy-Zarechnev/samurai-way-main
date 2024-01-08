import './index.css'
import store, {RootStateDataType} from './redux/state'
import ReactDOM from 'react-dom'
import App from './App'


let rerenderEntireTree = (state: RootStateDataType) => {

    ReactDOM.render(
        <App state={state}
             addPost={store.addPost.bind(store)}
             updateNewPostText={store.updateNewPostText.bind(store)}
             sendMessg={store.sendMessg.bind(store)}
             updateNewSendMessg={store.updateNewSendMessg.bind(store)}/>,
        document.getElementById('root')
    )
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

