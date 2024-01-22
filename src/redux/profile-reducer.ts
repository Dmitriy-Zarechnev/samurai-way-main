import {ActionType, PostsDataType, ProfilePagePropsType} from './redux-store'
import img2 from '../assets/images/winter.jpg'
import img1 from '../assets/images/Cupcake.jpg'
import avatar from '../assets/images/prof.png'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_HEADER = 'UPDATE-NEW-POST-HEADER'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState: ProfilePagePropsType = {
    profileInfo: {
        id: 1,
        src: avatar,
        info: 'I am a YoRHa android created to battle the machine lifeforms that have invaded the planet on behalf of the surviving humans. ' + 'Equipment is a multitude of weapons for close quarters combat and can attack from range using the Pod.'
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

export const profileReducer = (state: ProfilePagePropsType = initialState, action: ActionType) => {

    switch (action.type) {

        case ADD_POST:
            let newPostBody: PostsDataType = {
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
        default:
            return state
    }
}

export const addPostCreator = () => ({
    type: ADD_POST
})

export const updateNewPostInputCreator = (headerValue: string) => ({
    type: UPDATE_NEW_POST_HEADER,
    newHeaderText: headerValue
})

export const updateNewPostTextAreaCreator = (postValue: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: postValue
})