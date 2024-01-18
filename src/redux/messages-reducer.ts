import {ActionType, MessagesDataType, MessagesPagePropsType} from './store'
import cammyFriend from '../assets/images/webp/Cammy.webp'
import kratosFriend from '../assets/images/webp/Kratos.webp'
import groguFriend from '../assets/images/webp/Grogu.webp'
import trissFriend from '../assets/images/webp/Triss.webp'
import itachiFriend from '../assets/images/webp/Itachi.webp'
import nineS from '../assets/images/webp/9s.webp'

const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE'
const UPDATE_NEW_SEND_MESSAGE = 'UPDATE-NEW-SEND-MESSAGE'

let initialState: MessagesPagePropsType = {
    dialogsData: [
        {
            id: 1,
            src: cammyFriend,
            name: 'Cammy',
            alt: 'Cammy Avatar'
        },
        {
            id: 2,
            src: kratosFriend,
            name: 'Kratos',
            alt: 'Kratos Avatar'
        },
        {
            id: 3,
            src: groguFriend,
            name: 'Grogu',
            alt: 'Grogu Avatar'
        },
        {
            id: 4,
            src: trissFriend,
            name: 'Triss',
            alt: 'Triss Avatar'
        },
        {
            id: 5,
            src: itachiFriend,
            name: 'itachi',
            alt: 'itachi Avatar'
        },
        {
            id: 6,
            src: nineS,
            name: '9S',
            alt: '9S Avatar'
        }
    ],
    messagesData:
        [
            {id: 1, message: 'hello there'},
            {id: 2, message: 'hi are you?'},
            {id: 3, message: 'We far from the shallow, now'},
            {id: 4, message: 'Are you happy in this world?'},
            {id: 5, message: 'Tell me something , boy'},
            {id: 6, message: 'I would rather not say'}
        ],
    newMessg: ''
}

export const messagesReducer = (state: MessagesPagePropsType = initialState, action: ActionType) => {

    switch (action.type) {
        case SEND_NEW_MESSAGE: {
            let newMessg: MessagesDataType = {
                id: 7,
                message: state.newMessg
            }

            let stateCopy = {
                ...state,
                messagesData: [...state.messagesData]
            }

            stateCopy.messagesData.push(newMessg)
            stateCopy.newMessg = ''
            return stateCopy
        }
        case UPDATE_NEW_SEND_MESSAGE: {
            let stateCopy = {...state}
            if (action.message) {
                stateCopy.newMessg = action.message
            }
            return stateCopy
        }
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