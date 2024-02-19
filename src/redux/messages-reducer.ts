import {MessagesDataType} from '../components/sections/main/messages/myMessages/message/Message'

// Типизация
export type MessagesPagePropsType = {
    messagesData: Array<MessagesDataType>
}

type MyMessagesActionsType =
    SendNewMessageActionType

type SendNewMessageActionType = ReturnType<typeof sendNewMessage>
// type UpdateNewSendMessageActionType = ReturnType<typeof updateNewMessage>

// *********** Константы названий экшенов ****************
export const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE'


// *********** Первоначальный стэйт для messagesReducer ****************
const initialState: MessagesPagePropsType = {
    messagesData: [
        {id: 1, message: 'hello there'},
        {id: 2, message: 'hi are you?'},
        {id: 3, message: 'We far from the shallow, now'},
        {id: 4, message: 'Are you happy in this world?'},
        {id: 5, message: 'Tell me something , boy'},
        {id: 6, message: 'I would rather not say'}
    ]
}


// *********** Reducer - редьюсер, чистая функция для изменения стэйта после получения экшена от диспача ****************
export const messagesReducer = (state: MessagesPagePropsType = initialState, action: MyMessagesActionsType): MessagesPagePropsType => {

    switch (action.type) {
        case SEND_NEW_MESSAGE:
            const newMessgBody: MessagesDataType = {
                id: state.messagesData.length + 1,
                message: action.payload.text
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessgBody]
            }

        // case UPDATE_NEW_SEND_MESSAGE:
        //     return {
        //         ...state,
        //         newMessg: action.payload.message
        //     }

        default:
            return state
    }
}


// *********** Action creators - экшн криэйторы создают объект action ****************
export const sendNewMessage = (text: string) => {
    return {type: SEND_NEW_MESSAGE, payload: {text}} as const
}
// export const updateNewMessage = (textareaValue: string) => {
//     return {type: UPDATE_NEW_SEND_MESSAGE, payload: {message: textareaValue}} as const
// }

// *********** Thunk - санки необходимые для общения с DAL ****************