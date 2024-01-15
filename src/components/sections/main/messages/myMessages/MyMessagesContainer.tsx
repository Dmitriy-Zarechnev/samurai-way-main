import React from 'react'
import {ActionType, RootStateDataType, StoreType} from '../../../../../redux/store'
import MyMessages from './MyMessages'
import {sendNewMessageCreator, updateNewSendMessageCreator} from '../../../../../redux/messages-reducer'


const MyMessagesContainer: React.FC<{ store: StoreType }> = ({store}) => {

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
}

export default MyMessagesContainer