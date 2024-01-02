import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {RootStateDataType} from './redux/state'


export let rerenderEntireTree = (state: RootStateDataType,
                                 addPost: () => void,
                                 updateNewPostText: (newHeaderText: string, newText: string) => void,
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

