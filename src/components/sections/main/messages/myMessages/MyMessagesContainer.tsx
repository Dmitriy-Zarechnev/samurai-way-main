import React from 'react'
import {ActionType, RootStateDataType} from '../../../../../redux/redux-store'
import MyMessages from './MyMessages'
import {connect} from 'react-redux'
import {sendNewMessageCreator, updateNewSendMessageCreator} from '../../../../../redux/messages-reducer'


let mapStateToProps = (state: RootStateDataType) => {
    return {
        messagesData: state.messagesPage.messagesData,
        newMessg: state.messagesPage.newMessg
    }
}

let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        updateNewMessage: (textareaValue: string) => {
            dispatch(updateNewSendMessageCreator(textareaValue) as ActionType)
        },
        sendNewMessage: () => {
            dispatch(sendNewMessageCreator() as ActionType)
        }
    }
}

const MyMessagesContainer: React.FC = connect(mapStateToProps, mapDispatchToProps)(MyMessages)


export default MyMessagesContainer