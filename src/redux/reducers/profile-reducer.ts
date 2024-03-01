import img2 from '../../assets/images/NewPostDefault.jpg'
import img1 from '../../assets/images/PostDefault.jpg'
import {profileAPI} from '../../api/api'
import {Dispatch} from 'redux'

// Типизация
export type ProfilePagePropsType = {
    profileInfo: ProfileInfoType
    postsData: PostsDataType[]
    status: string
    failMessage: string
}

export type  ProfileInfoType = {
    aboutMe: string
    contacts: Contacts
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number | null
    photos: PhotosType
}

type Contacts = {
    facebook: string
    website: string | null
    vk: string
    twitter: string
    instagram: string
    youtube: string | null
    github: string
    mainLink: string | null
}

export type PhotosType = {
    small: string
    large: string
}

export type PostsDataType = {
    id: number
    header: string
    src: string
    message: string
    likesCount: number
}

export type MyPostsActionsType =
    AddPostActionType |
    SetUserProfileActionType |
    getUserStatusActionType |
    UpdateUserStatusActionType |
    DeletePostActionType |
    UpdateYourPhotoActionType |
    FailUpdateYourPhotoActionType

type AddPostActionType = ReturnType<typeof addPost>
type SetUserProfileActionType = ReturnType<typeof setUserProfile>
type getUserStatusActionType = ReturnType<typeof getUserStatus>
type UpdateUserStatusActionType = ReturnType<typeof updateUserStatus>
type DeletePostActionType = ReturnType<typeof deletePost>
type UpdateYourPhotoActionType = ReturnType<typeof updateYourPhoto>
type FailUpdateYourPhotoActionType = ReturnType<typeof failUpdateYourPhoto>

// *********** Константы названий экшенов ****************
export const ADD_POST = '/profile/ADD-POST'
export const SET_USER_PROFILE = '/profile/SET-USER-PROFILE'
export const GET_USER_STATUS = '/profile/GET-USER-STATUS'
export const UPDATE_USER_STATUS = '/profile/UPDATE-USER-STATUS'
export const DELETE_POST = '/profile/DELETE-POST'
export const UPDATE_YOUR_PHOTO = '/profile/UPDATE-YOUR-PHOTO'
export const FAIL_UPDATE_YOUR_PHOTO = '/profile/FAIL-UPDATE-YOUR-PHOTO'


// *********** Первоначальный стэйт для profileReducer ****************
const initialState: ProfilePagePropsType = {
    profileInfo: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: null,
            vk: '',
            twitter: '',
            instagram: '',
            youtube: null,
            github: '',
            mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: null,
        photos: {
            small: '',
            large: ''
        }
    },
    postsData: [
        {
            id: 1,
            header: 'Begin',
            src: img1,
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid consequuntur corporis cupiditate debitis dignissimos earum eius error ex iusto maxime minima nihil nostrum numquam odio possimus quae quidem quos, rerum saepe sint soluta tempore tenetur veniam voluptates! Enim inventore sequi totam. Corporis ea ipsum iure officiis quo, ut velit?',
            likesCount: 25
        },
        {id: 2, header: 'Process', src: img1, message: 'It is my second post', likesCount: 40},
        {id: 3, header: 'End', src: img1, message: 'It is my third post', likesCount: 52}
    ],
    status: '',
    failMessage: ''
}


// *********** Reducer - редьюсер, чистая функция для изменения стэйта после получения экшена от диспача ****************
export const profileReducer = (state: ProfilePagePropsType = initialState, action: MyPostsActionsType): ProfilePagePropsType => {

    switch (action.type) {

        case ADD_POST:
            const newPost: PostsDataType = {
                id: state.postsData.length + 1,
                header: action.payload.header,
                src: img2,
                message: action.payload.post,
                likesCount: 0
            }
            return {
                ...state,
                postsData: [newPost, ...state.postsData]
            }

        case SET_USER_PROFILE:
            return {
                ...state, profileInfo: action.payload.profileInfo
            }

        case GET_USER_STATUS:
            return {
                ...state, status: action.payload.status
            }

        case UPDATE_USER_STATUS:
            return {
                ...state, status: action.payload.status
            }

        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(el => el.id !== action.payload.postId)
            }

        case UPDATE_YOUR_PHOTO:
            return {
                ...state,
                profileInfo: {
                    ...state.profileInfo,
                    photos: action.payload.photos
                }
            }

        case FAIL_UPDATE_YOUR_PHOTO:
            return {
                ...state,
                failMessage: action.payload.failMessage
            }

        default:
            return state
    }
}


// *********** Action creators - экшн криэйторы создают объект action ****************
export const addPost = (header: string, post: string) => {
    return {type: ADD_POST, payload: {header, post}} as const
}
export const setUserProfile = (profileInfo: ProfileInfoType) => {
    return {type: SET_USER_PROFILE, payload: {profileInfo}} as const
}
export const getUserStatus = (status: string) => {
    return {type: GET_USER_STATUS, payload: {status}} as const
}
export const updateUserStatus = (status: string) => {
    return {type: UPDATE_USER_STATUS, payload: {status}} as const
}
export const deletePost = (postId: number) => {
    return {type: DELETE_POST, payload: {postId}} as const
}
export const updateYourPhoto = (photos: PhotosType) => {
    return {type: UPDATE_YOUR_PHOTO, payload: {photos}} as const
}
export const failUpdateYourPhoto = (failMessage: string) => {
    return {type: FAIL_UPDATE_YOUR_PHOTO, payload: {failMessage}} as const
}

// *********** Thunk - санки необходимые для общения с DAL ****************
//  -------- Загрузка страницы пользователя ----------------
export const goToPage = (id: number) => async (dispatch: Dispatch<MyPostsActionsType>) => {
    let userId = id
    if (!userId) userId = 30743

    const response = await profileAPI.userProfile(userId)
    dispatch(setUserProfile(response.data))
}

//  -------- Получение статуса пользователя ----------------
export const getStatus = (id: number) => async (dispatch: Dispatch<MyPostsActionsType>) => {

    const response = await profileAPI.getStatus(id)
    dispatch(getUserStatus(response.data))
}
//  -------- Изменение статуса пользователя ----------------
export const updateStatus = (status: string) => async (dispatch: Dispatch<MyPostsActionsType>) => {

    const response = await profileAPI.updateStatus(status)
    response.data.resultCode === 0 && dispatch(updateUserStatus(status))
}

//  -------- Загрузка фото пользователя ----------------
export const savePhoto = (file: File) => async (dispatch: Dispatch<MyPostsActionsType>) => {

    const response = await profileAPI.savePhoto(file)
    response.data.resultCode === 0 && dispatch(updateYourPhoto(response.data.data.photos))

    response.data.resultCode === 1 && dispatch(failUpdateYourPhoto(response.data.messages))
    debugger

}