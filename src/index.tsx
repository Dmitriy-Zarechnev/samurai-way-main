import './index.css'
import store, {RootStateDataType} from './redux/state'
import ReactDOM from 'react-dom'
import App from './App'


let rerenderEntireTree = (state: RootStateDataType,
                          addPost: () => void,
                          updateNewPostText: (newHeaderText: string, newText: string, newImg: string) => void,
                          sendMessg: () => void,
                          updateNewSendMessg: (message: string) => void) => {
    ReactDOM.render(
        <App state={store.getState()}
             addPost={store.addPost}
             updateNewPostText={store.updateNewPostText}
             sendMessg={store.sendMessg}
             updateNewSendMessg={store.updateNewSendMessg}/>,
        document.getElementById('root')
    )
}


rerenderEntireTree(store.getState(), store.addPost, store.updateNewPostText, store.sendMessg, store.updateNewSendMessg)

store.subscribe(rerenderEntireTree)

