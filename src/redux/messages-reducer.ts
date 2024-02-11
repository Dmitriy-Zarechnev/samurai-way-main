import {MessagesDataType, MessagesPagePropsType, MyMessagesActionsType, SendNewMessageActionType, UpdateNewSendMessageActionType} from '../types/entities'

// *********** Константы названий экшенов ****************
export const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE'
export const UPDATE_NEW_SEND_MESSAGE = 'UPDATE-NEW-SEND-MESSAGE'


// *********** Первоначальный стэйт для messagesReducer ****************
const initialState: MessagesPagePropsType = {
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


// *********** Reducer - редьюсер, чистая функция для изменения стэйта после получения экшена от диспача ****************
export const messagesReducer = (state: MessagesPagePropsType = initialState, action: MyMessagesActionsType): MessagesPagePropsType => {

    switch (action.type) {
        case SEND_NEW_MESSAGE:
            const newMessgBody: MessagesDataType = {
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


// *********** Action creators - экшн криэйторы создают объект action ****************
export const sendNewMessage = (): SendNewMessageActionType => ({
    type: SEND_NEW_MESSAGE
})
export const updateNewMessage = (textareaValue: string): UpdateNewSendMessageActionType => ({
    type: UPDATE_NEW_SEND_MESSAGE,
    message: textareaValue
})

// *********** Thunk - санки необходимые для общения с DAL ****************