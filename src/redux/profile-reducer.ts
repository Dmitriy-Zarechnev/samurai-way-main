import img2 from '../assets/images/winter.jpg'
import img1 from '../assets/images/Cupcake.jpg'
import {AddPostActionType, MyPostsActionsType, PostsDataType, ProfileInfoType, ProfilePagePropsType, SetUserProfileActionType, UpdateNewPostHeaderActionType, UpdateNewPostTextActionType} from '../types/entities'
import {profileAPI} from '../api/api'
import {Dispatch} from 'redux'

// *********** Константы названий экшенов ****************
export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_HEADER = 'UPDATE-NEW-POST-HEADER'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export const SET_USER_PROFILE = 'SET-USER-PROFILE'


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
    newPost: {
        newHeader: '',
        newText: ''
    }
}


// *********** Reducer - редьюсер, чистая функция для изменения стэйта после получения экшена от диспача ****************
export const profileReducer = (state: ProfilePagePropsType = initialState, action: MyPostsActionsType): ProfilePagePropsType => {

    switch (action.type) {

        case ADD_POST:
            const newPostBody: PostsDataType = {
                id: state.postsData.length + 1,
                header: state.newPost.newHeader,
                src: img2,
                message: state.newPost.newText,
                likesCount: 0
            }
            return {
                ...state,
                postsData: [newPostBody, ...state.postsData],
                newPost: {
                    ...state.newPost,
                    newHeader: '',
                    newText: ''
                }
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPost: {
                    ...state.newPost,
                    newText: action.newPostText
                }
            }

        case UPDATE_NEW_POST_HEADER:
            return {
                ...state,
                newPost: {
                    ...state.newPost,
                    newHeader: action.newHeaderText
                }
            }

        case SET_USER_PROFILE:
            return {
                ...state, profileInfo: action.profileInfo
            }

        default:
            return state
    }
}


// *********** Action creators - экшн криэйторы создают объект action ****************
export const addPost = (): AddPostActionType => ({
    type: ADD_POST
})
export const updateNewPostInput = (headerValue: string): UpdateNewPostHeaderActionType => ({
    type: UPDATE_NEW_POST_HEADER,
    newHeaderText: headerValue
})
export const updateNewPostTextArea = (postValue: string): UpdateNewPostTextActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: postValue
})
export const setUserProfile = (profileInfo: ProfileInfoType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profileInfo})


// *********** Thunk - санки необходимые для общения с DAL ****************
//  -------- Загрузка страницы пользователя ----------------
export const goToPage = (id: string) => {

    return (dispatch: Dispatch<MyPostsActionsType>) => {
        let userId = Number(id)
        if (!userId) userId = 30743

        profileAPI.userProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}

