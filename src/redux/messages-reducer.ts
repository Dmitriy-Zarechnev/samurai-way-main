import {ActionType, MessagesDataType, MessagesPagePropsType} from './store'

const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE'
const UPDATE_NEW_SEND_MESSAGE = 'UPDATE-NEW-SEND-MESSAGE'


export const messagesReducer = (state: MessagesPagePropsType, action: ActionType) => {

    switch (action.type) {
        case SEND_NEW_MESSAGE:
            let newMessg: MessagesDataType = {
                id: 7,
                message: state.newMessg
            }
            state.messagesData.push(newMessg)
            state.newMessg = ''
            return state

        case UPDATE_NEW_SEND_MESSAGE:
            if (action.message) {
                state.newMessg = action.message
            }
            return state

        default:
            return state
    }
}

export const sendNewMessageCreator = () => ({
    type: SEND_NEW_MESSAGE
})

export const updateNewSendMessageCreator = (textareaValue: string) => ({
    type: UPDATE_NEW_SEND_MESSAGE,
    message: textareaValue
})