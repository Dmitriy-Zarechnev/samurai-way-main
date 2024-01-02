import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {RootStateDataType, SummaryStatePropsType} from './redux/state'


export let rerenderEntireTree = (state: RootStateDataType,
                                 addPost: (postHeader: string, postMessage: string) => void,
                                 updateNewPostText: (newHeaderText: string, newText: string) => void,
                                 sendMessg: (textMessage: string) => void,) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} sendMessg={sendMessg} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    )
}

