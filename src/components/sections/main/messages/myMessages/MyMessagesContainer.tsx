import React from 'react'
import {ActionType, RootStateDataType} from '../../../../../redux/store'
import MyMessages from './MyMessages'
import {sendNewMessageCreator, updateNewSendMessageCreator} from '../../../../../redux/messages-reducer'
import {StoreContext} from '../../../../../StoreContext'


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

export default MyMessagesContainer