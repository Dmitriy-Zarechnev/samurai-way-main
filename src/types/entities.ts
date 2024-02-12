import {ChangeEvent, KeyboardEvent} from 'react'
import {FOLLOW_FRIEND, SET_CURRENT_PAGE, SET_TOTAL_USERS_COUNT, SET_USERS, TOGGLE_IS_FETCHING, TOGGLE_IS_FOLLOWING_IN_PROGRESS, UNFOLLOW_FRIEND} from '../redux/users-reducer'
import {ADD_POST, SET_USER_PROFILE, UPDATE_NEW_POST_HEADER, UPDATE_NEW_POST_TEXT} from '../redux/profile-reducer'
import {RouteComponentProps} from 'react-router-dom'
import {SEND_NEW_MESSAGE, UPDATE_NEW_SEND_MESSAGE} from '../redux/messages-reducer'
import {SET_AUTH_USER_DATA} from '../redux/auth-reducer'

// --------------- Типизация для Store -------------------------

// Типизация для State
// export type RootStateDataType = {
//     profilePage: ProfilePagePropsType
//     messagesPage: MessagesPagePropsType
//     friendsListData: Array<FriendsListDataType>
//     usersPage: UsersInitialState
//     auth: AuthPageInitialState
// }


// --------------- Типизация для ProfilePage -------------------------
export type ProfilePagePropsType = {
    profileInfo: ProfileInfoType
    postsData: PostsDataType[]
    newPost: NewPostType
}

export type  ProfileInfoType = {
    aboutMe: string
    contacts: Contacts
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number | null
    photos: {
        small: string
        large: string
    }
}

export type Contacts = {
    facebook: string
    website: string | null
    vk: string
    twitter: string
    instagram: string
    youtube: string | null
    github: string
    mainLink: string | null
}

export type PostsDataType = {
    id: number
    header: string
    src: string
    message: string
    likesCount: number
}

export type NewPostType = {
    newHeader: string
    newText: string
}

// Типизация для страницы ProfileInfoAPIComponent
export type ProfileInfoAPIComponentPropsType =
    ProfileInfoAPIComponentMapStateToProps &
    ProfileInfoAPIComponentMapDispatchToProps &
    RouteComponentProps<{ userId: string }>


export type ProfileInfoAPIComponentMapStateToProps = {
    profileInfo: ProfileInfoType
    isAuth:boolean
}

type ProfileInfoAPIComponentMapDispatchToProps = {
    setUserProfile: (profileInfo: ProfileInfoType) => void
    goToPage: (id: string) => void
}

// Типизация для страницы MyPosts
export type MyPostsPropsType = {
    posts: Array<PostsDataType>
    newPost: NewPostType
    updateNewPostTextArea: (postValue: string) => void
    updateNewPostInput: (headerValue: string) => void
    addPost: () => void
}


// Типизация для ProfileInfo Actions
export type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profileInfo: ProfileInfoType
}


// Типизация для MyPosts Actions
export type MyPostsActionsType =
    AddPostActionType |
    UpdateNewPostHeaderActionType |
    UpdateNewPostTextActionType |
    SetUserProfileActionType

export type AddPostActionType = {
    type: typeof ADD_POST
}

export type UpdateNewPostHeaderActionType = {
    type: typeof UPDATE_NEW_POST_HEADER
    newHeaderText: string
}

export type UpdateNewPostTextActionType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newPostText: string
}

// --------------- Типизация для MessagesPage -------------------------
export type MessagesPagePropsType = {
    // dialogsData: Array<DialogsDataType>,
    messagesData: Array<MessagesDataType>
    newMessg: string
}


export type MessagesDataType = {
    id: number
    message: string
}

// Типизация для страницы MyMessages
export type MyMessagesPropsType =
    MyMessagesMapStateToProps &
    MyMessagesMapDispatchToProps

type MyMessagesMapStateToProps = {
    messagesData: Array<MessagesDataType>
    newMessg: string
    isAuth:boolean
}

type MyMessagesMapDispatchToProps = {
    updateNewMessage: (textareaValue: string) => void
    sendNewMessage: () => void
}


// Типизация для страницы NewMessage
export type NewMessageAreaPropsType = {
    newMessg: string
    updateNewMessage: (textareaValue: string) => void
    sendNewMessage: () => void
    isAuth:boolean
}

// Типизация для MyMessages Actions
export type MyMessagesActionsType =
    SendNewMessageActionType |
    UpdateNewSendMessageActionType

export type SendNewMessageActionType = {
    type: typeof SEND_NEW_MESSAGE
}

export type UpdateNewSendMessageActionType = {
    type: typeof UPDATE_NEW_SEND_MESSAGE
    message: string
}

// --------------- Типизация для FriendsListData -------------------------
export type FriendsListDataType = {
    id: number
    src: string
    name: string
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
    followingInProgress: number[]
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

export type UsersAPIComponentPropsType =
    UsersAPIComponentMapStateToProps &
    UsersAPIComponentMapDispatchToProps

export type UsersAPIComponentMapStateToProps = {
    items: UsersListType[]
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

type UsersAPIComponentMapDispatchToProps = {
    getUsers: (currentPage: number, pageSize: number) => void
    newPageGetUsers: (currentPage: number, pageSize: number) => void
    unFollow: (id: number) => void
    follow: (id: number) => void
}


// Типизация для страницы Users
export type UsersPropsType = {
    items: UsersListType[]
    totalCount: number
    pageSize: number
    currentPage: number
    pagStart: number[]
    pagCenter: number[]
    pagEnd: number[]
    followingInProgress: number[]
    onPageChanged: (currentPage: number) => void
    unFollow: (id: number) => void
    follow: (id: number) => void
}


// Типизация для UsersAPIComponent Actions
export type UsersAPIComponentActionsType =
    FollowFriendActionType |
    UnfollowFriendActionType |
    SetUsersActionType |
    SetCurrentPageActionType |
    SetTotalUsersCountActionType |
    ToggleIsFetchingActionType |
    ToggleIsFollowingInProgressActionType


export type FollowFriendActionType = {
    type: typeof FOLLOW_FRIEND
    userID: number
}

export type UnfollowFriendActionType = {
    type: typeof UNFOLLOW_FRIEND
    userID: number
}

export type SetUsersActionType = {
    type: typeof SET_USERS
    items: UsersListType[]
}

export type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

export type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalCount: number
}

export type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

export type ToggleIsFollowingInProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_IN_PROGRESS
    isFetching: boolean
    userId: number
}

// --------------- Типизация для authPage -------------------------

// Типизация для HeaderAPIComponent
export type HeaderAPIContainerPropsType =
    HeaderAPIComponentMapStateToProps &
    HeaderAPIComponentMapDispatchToProps


type HeaderAPIComponentMapStateToProps = {
    isAuth: boolean
    data: UserDataType | {}
}

type HeaderAPIComponentMapDispatchToProps = {
    setAuthUserData: (data: UserDataType) => void
    authMe: () => void
}

// Типизация для первоначального стэйта для authReducer
export type AuthPageInitialState = {
    data: UserDataType
    isAuth: boolean
    isFetching: boolean
}

// Типизация для AuthPageAPIComponent Actions
export type AuthPageAPIComponentActionsType = SetAuthUserDataActionType


export type SetAuthUserDataActionType = {
    type: typeof SET_AUTH_USER_DATA
    data: UserDataType
}

export type UserDataType = {
    id: number | null
    email: string
    login: string
}

// --------------- Типизация для Header -------------------------
export type HeaderPropsType = {
    isAuth: boolean
    data: UserDataType
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
    placeholder: string
    value: string
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void
}

// Типизация для input
export type InputPropsType = {
    id: string
    type: string
    value: string
    autoComplete: 'off' | 'on'
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void
    placeholder: string
}

// Типизация для Pagination
export type PaginationPropsType = {
    currentArray: Array<number>
    onPageChanged: (currentPage: number) => void
    currentPage: number
}

// Типизация для contacts
export type ContactsPropsType = {
    href: string
    alt: string
    src: string
}
