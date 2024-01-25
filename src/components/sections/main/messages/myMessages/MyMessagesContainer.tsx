import {ActionType, RootStateDataType} from '../../../../../redux/redux-store'
import MyMessages from './MyMessages'
import {connect} from 'react-redux'
import {sendNewMessageAC, updateNewSendMessageAC} from '../../../../../redux/messages-reducer'
import {Dispatch} from 'redux'


let mapStateToProps = (state: RootStateDataType) => {
    return {
        messagesData: state.messagesPage.messagesData,
        newMessg: state.messagesPage.newMessg
    }
}

let mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
    return {
        updateNewMessage: (textareaValue: string) => {
            dispatch(updateNewSendMessageAC(textareaValue) as ActionType)
        },
        sendNewMessage: () => {
            dispatch(sendNewMessageAC() as ActionType)
        }
    }
}

const MyMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(MyMessages)


export default MyMessagesContainer