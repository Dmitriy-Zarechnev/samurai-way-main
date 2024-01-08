import './index.css'
import state, {addPost, RootStateDataType, sendMessg, subscribe, updateNewPostText, updateNewSendMessg} from './redux/state'
import ReactDOM from 'react-dom'
import App from './App'


let rerenderEntireTree = (state: RootStateDataType,
                                 addPost: () => void,
                                 updateNewPostText: (newHeaderText: string, newText: string, newImg: string) => void,
                                 sendMessg: () => void,
                                 updateNewSendMessg: (message: string) => void
) => {
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             updateNewPostText={updateNewPostText}
             sendMessg={sendMessg}
             updateNewSendMessg={updateNewSendMessg}/>,
        document.getElementById('root')
    )
}


rerenderEntireTree(state, addPost, updateNewPostText, sendMessg, updateNewSendMessg)

subscribe(rerenderEntireTree)

