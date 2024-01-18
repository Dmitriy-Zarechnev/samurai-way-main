import {combineReducers, createStore, Store} from 'redux'
import {profileReducer} from './profile-reducer'
import {messagesReducer} from './messages-reducer'

// Типизация для Store
export type StoreType = {
    _state: RootStateDataType,
    _callSubscriber: (state: RootStateDataType) => void,

    getState: () => RootStateDataType,
    subscribe: (observer: any) => void,

    dispatch: (action: ActionType) => void,
}

// Типизация для State
export type RootStateDataType = {
    profilePage: ProfilePagePropsType,
    messagesPage: MessagesPagePropsType
}

// Типизация для action
export type ActionType = {
    type: 'ADD-POST' | 'UPDATE-NEW-POST-TEXT' | 'SEND-NEW-MESSAGE' | 'UPDATE-NEW-SEND-MESSAGE',
    newHeaderText?: string,
    newText?: string,
    message?: string,
}

// Типизация для ProfilePage
export type ProfilePagePropsType = {
    profileInfo: ProfileInfoType,
    postsData: Array<PostsDataType>,
    newPost: Array<string>,
    friendsList: Array<FriendsListDataType>
}

export type ProfileInfoType ={
    id: number,
    src: string,
    info: string
}

export type PostsDataType = {
    id: number,
    header: string,
    src: string,
    message: string,
    likesCount: number
}

export type FriendsListDataType = {
    id: number,
    src: string,
    name: string,
    alt: string
}


// Типизация для страницы постов
export type MyPostsPropsType = {
    posts: Array<PostsDataType>,
    newPost: Array<string>,
    updateNewPostTextArea: (postValue: string) => void
    updateNewPostInput: (headerValue: string) => void
    addPost: () => void
}

// Типизация для страницы сообщений
export type MyMessagesPropsType = {
    messagesData: Array<MessagesDataType>
    newMessg: string,
    updateNewMessage: (textareaValue: string) => void,
    sendNewMessage: () => void
}

export type NewMessageAreaPropsType = {
    newMessg: string,
    updateNewMessage: (textareaValue: string) => void,
    sendNewMessage: () => void
}

// Типизация для MessagePage
export type MessagesPagePropsType = {
    dialogsData: Array<DialogsDataType>,
    messagesData: Array<MessagesDataType>,
    newMessg: string
}

export type MessagesDataType = {
    id: number,
    message: string
}

export type DialogsDataType = {
    id: number,
    src: string,
    name: string,
    alt: string
}

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer
})

let store: Store<StoreType, ActionType> = createStore(reducers)

export default store