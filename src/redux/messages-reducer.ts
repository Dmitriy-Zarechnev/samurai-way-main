import {ActionsTypes, MessagesDataType, MessagesPagePropsType, sendNewMessageActionType, updateNewSendMessageActionType} from './redux-store'

const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE'
const UPDATE_NEW_SEND_MESSAGE = 'UPDATE-NEW-SEND-MESSAGE'

let initialState: MessagesPagePropsType = {
    messagesData: [
        {id: 1, message: 'hello there'},
        {id: 2, message: 'hi are you?'},
        {id: 3, message: 'We far from the shallow, now'},
        {id: 4, message: 'Are you happy in this world?'},
        {id: 5, message: 'Tell me something , boy'},
        {id: 6, message: 'I would rather not say'}
    ],
    newMessg: ''
}

export const messagesReducer = (state: MessagesPagePropsType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case SEND_NEW_MESSAGE:
            let newMessgBody: MessagesDataType = {
                id: state.messagesData.length + 1,
                message: state.newMessg
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessgBody],
                newMessg: ''
            }

        case UPDATE_NEW_SEND_MESSAGE:
            return {
                ...state,
                newMessg: action.message
            }

        default:
            return state
    }
}

export const sendNewMessageAC = (): sendNewMessageActionType => ({
    type: SEND_NEW_MESSAGE
})

export const updateNewSendMessageAC = (textareaValue: string): updateNewSendMessageActionType => ({
    type: UPDATE_NEW_SEND_MESSAGE,
    message: textareaValue
})