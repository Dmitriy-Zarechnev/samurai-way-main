import {combineReducers, createStore, Store} from 'redux'
import {profileReducer} from './profile-reducer'
import {messagesReducer} from './messages-reducer'
import {ChangeEvent, KeyboardEvent} from 'react'
import {friendsListReducer} from './friends-list-reducer'

// --------------- Типизация для Store -------------------------

export type StoreType = {
    _state: RootStateDataType,
    _callSubscriber: (state: RootStateDataType) => void,

    getState: () => RootStateDataType,
    subscribe: (observer: ObserverType) => void,

    dispatch: (action: ActionType) => void,
}

// Типизация для State
export type RootStateDataType = {
    profilePage: ProfilePagePropsType,
    messagesPage: MessagesPagePropsType,
    friendsListData: Array<FriendsListDataType>
}

// Типизация для observer
type ObserverType = (state: RootStateDataType) => void

// Типизация для action
export type ActionType = {
    type: 'ADD-POST' |
        'UPDATE-NEW-POST-HEADER' |
        'UPDATE-NEW-POST-TEXT' |
        'SEND-NEW-MESSAGE' |
        'UPDATE-NEW-SEND-MESSAGE' |
        'FOLLOW-FRIEND' |
        'UNFOLLOW-FRIEND',
    newHeaderText?: string,
    newPostText?: string,
    message?: string,
    userID?: number
}
// --------------------------------------------------------------

// --------------- Типизация для ProfilePage -------------------------

export type ProfilePagePropsType = {
    profileInfo: ProfileInfoType,
    postsData: Array<PostsDataType>,
    newPost: NewPostType
}

export type ProfileInfoType = {
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

export type NewPostType = {
    newHeader: string,
    newText: string
}

// Типизация для страницы MyPosts
export type MyPostsPropsType = {
    posts: Array<PostsDataType>,
    newPost: NewPostType,
    updateNewPostTextArea: (postValue: string) => void
    updateNewPostInput: (headerValue: string) => void
    addPost: () => void
}
// --------------------------------------------------------------

// --------------- Типизация для MessagesPage -------------------------

export type MessagesPagePropsType = {
    // dialogsData: Array<DialogsDataType>,
    messagesData: Array<MessagesDataType>,
    newMessg: string
}

export type MessagesDataType = {
    id: number,
    message: string
}

// Типизация для страницы MyMessages
export type MyMessagesPropsType = {
    messagesData: Array<MessagesDataType>
    newMessg: string,
    updateNewMessage: (textareaValue: string) => void,
    sendNewMessage: () => void
}

// Типизация для страницы NewMessage
export type NewMessageAreaPropsType = {
    newMessg: string,
    updateNewMessage: (textareaValue: string) => void,
    sendNewMessage: () => void
}
// --------------------------------------------------------------

// --------------- Типизация для FriendsListData -------------------------
export type FriendsListDataType = {
    id: number,
    src: string,
    name: string,
    alt: string
}
// --------------------------------------------------------------

// --------------- Типизация для UsersListData -------------------------
export type UsersInitialState = {
    users: UsersListType[]
}

type UsersListType = {
    id: number,
    fullName: string,
    status: string,
    followed: boolean,
    location: LocationType
}

type LocationType = {
    city: string,
    country: string
}


// --------------- Типизация для отдельных компонент -------------------------

// Типизация для button
export type ButtonPropsType = {
    name: string
    onClick: () => void
    disabled: boolean
}

// Типизация для textarea
export type TextAreaPropsType = {
    placeholder: string,
    value: string,
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
    onKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void,
}

// Типизация для input
export type InputPropsType = {
    id: string,
    type: string,
    value: string,
    autoComplete: 'off' | 'on',
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void,
    placeholder: string,
}
// --------------------------------------------------------------


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsListData: friendsListReducer
})

let store: Store<StoreType, ActionType> = createStore(reducers)

export default store