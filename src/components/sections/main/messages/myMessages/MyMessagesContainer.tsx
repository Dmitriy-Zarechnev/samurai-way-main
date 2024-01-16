import React from 'react'
import {ActionType, RootStateDataType} from '../../../../../redux/store'
import MyMessages from './MyMessages'
import {connect} from 'react-redux'
import {sendNewMessageCreator, updateNewSendMessageCreator} from '../../../../../redux/messages-reducer'

// Удалить после 45 урока
/*
const MyMessagesContainer: React.FC = () => {

    // let state: RootStateDataType = store.getState()
    //
    // const onClickAddNewMessage = () => {
    //     store.dispatch(sendNewMessageCreator() as ActionType)
    // }
    //
    // let onChangeNewMessage = (textareaValue: string) => {
    //     store.dispatch(updateNewSendMessageCreator(textareaValue) as ActionType)
    // }

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state: RootStateDataType = store.getState()

                const onClickAddNewMessage = () => {
                    store.dispatch(sendNewMessageCreator() as ActionType)
                }

                let onChangeNewMessage = (textareaValue: string) => {
                    store.dispatch(updateNewSendMessageCreator(textareaValue) as ActionType)
                }

                return (
                    <MyMessages
                        messagesData={state.messagesPage.messagesData}
                        newMessg={state.messagesPage.newMessg}
                        updateNewMessage={onChangeNewMessage}
                        sendNewMessage={onClickAddNewMessage}
                    />
                )
            }}

        </StoreContext.Consumer>
    )
}
 */
// --------------------------

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