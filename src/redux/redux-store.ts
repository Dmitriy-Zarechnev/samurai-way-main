import {combineReducers, createStore} from 'redux'
import {profileReducer} from './profile-reducer'
import {messagesReducer} from './messages-reducer'
import {ChangeEvent, KeyboardEvent} from 'react'
import {friendsListReducer} from './friends-list-reducer'
import {usersReducer} from './users-reducer'

// --------------- Типизация для Store -------------------------

// Типизация для State
export type RootStateDataType = {
    profilePage: ProfilePagePropsType,
    messagesPage: MessagesPagePropsType,
    friendsListData: Array<FriendsListDataType>,
    usersPage: UsersInitialState
}

// Заглушка для экшенов , где их нет
export type EmptyActionType = { type: 'hello' }


// --------------- Типизация для ProfilePage -------------------------

export type ProfilePagePropsType = {
    profileInfo: ProfileInfoType,
    postsData: PostsDataType[],
    newPost: NewPostType,
}

export type  ProfileInfoType = {
    aboutMe: string;
    contacts: Contacts;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    photos: {
        small: string;
        large: string;
    };
}

export type Contacts = {
    facebook: string;
    website: string | null;
    vk: string;
    twitter: string;
    instagram: string;
    youtube: string | null;
    github: string;
    mainLink: string | null;
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


// Типизация для ProfileInfo Actions

export type SetUserProfileActionType = {
    type: 'SET-USER-PROFILE',
    profileInfo: ProfileInfoType
}


// Типизация для MyPosts Actions

export type MyPostsActionsType =
    AddPostActionType |
    UpdateNewPostHeaderActionType |
    UpdateNewPostTextActionType |
    SetUserProfileActionType

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdateNewPostHeaderActionType = {
    type: 'UPDATE-NEW-POST-HEADER'
    newHeaderText: string,
}

export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newPostText: string,
}

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

// Типизация для MyMessages Actions

export type MyMessagesActionsType =
    SendNewMessageActionType |
    UpdateNewSendMessageActionType

export type SendNewMessageActionType = {
    type: 'SEND-NEW-MESSAGE'
}

export type UpdateNewSendMessageActionType = {
    type: 'UPDATE-NEW-SEND-MESSAGE',
    message: string,
}

// --------------- Типизация для FriendsListData -------------------------
export type FriendsListDataType = {
    id: number,
    src: string,
    name: string,
    alt: string
}


// --------------- Типизация для UsersPageData -------------------------
export type UsersInitialState = {
    items: UsersListType[]
    totalCount: number
    error: string
    pageSize: number
    currentPage: number
    isFetching: boolean
}

export type UsersListType = {
    name: string
    id: number
    photos: UsersPhotos
    status: string
    followed: boolean
}

type UsersPhotos = {
    small: string
    large: string
}

// Типизация для страницы UsersAPIComponent
export type UsersAPIComponentPropsType = {
    items: UsersListType[],
    totalCount: number,
    pageSize: number,
    currentPage: number,
    followFriend: (userID: number) => void,
    unfollowFriend: (userID: number) => void,
    setUsers: (items: UsersListType[]) => void,
    setCurrentPage: (currentPage: number) => void,
    setTotalUsersCount: (totalCount: number) => void,
    toggleIsFetching: (isFetching: boolean) => void
    isFetching: boolean
}

// Типизация для страницы Users
export type UsersPropsType = {
    items: UsersListType[],
    totalCount: number,
    pageSize: number,
    currentPage: number,
    followFriend: (userID: number) => void,
    unfollowFriend: (userID: number) => void,
    onPageChanged: (currentPage: number) => void
}

// Типизация для пагинации страниц
export type PaginationPropsType = {
    currentArray: Array<number>,
    onPageChanged: (currentPage: number) => void,
    currentPage: number,
}

// Типизация для UsersAPIComponent Actions

export type UsersAPIComponentActionsType =
    FollowFriendActionType |
    UnfollowFriendActionType |
    SetUsersActionType |
    SetCurrentPageActionType |
    SetTotalUsersCountActionType |
    ToggleIsFetchingActionType


export type FollowFriendActionType = {
    type: 'FOLLOW-FRIEND'
    userID: number
}

export type UnfollowFriendActionType = {
    type: 'UNFOLLOW-FRIEND'
    userID: number
}

export type SetUsersActionType = {
    type: 'SET-USERS'
    items: UsersListType[],
}

export type SetCurrentPageActionType = {
    type: 'SET-CURRENT-PAGE'
    currentPage: number
}

export type SetTotalUsersCountActionType = {
    type: 'SET-TOTAL-USERS-COUNT'
    totalCount: number
}

export type ToggleIsFetchingActionType = {
    type: 'TOGGLE-IS-FETCHING'
    isFetching: boolean
}

// --------------- Типизация для отдельных компонент -------------------------

// Типизация для button
export type ButtonPropsType = {
    name: string
    onClick: () => void
    disabled?: boolean
    additionalClass?: string
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
    friendsListData: friendsListReducer,
    usersPage: usersReducer
})

let store = createStore(reducers)

export default store