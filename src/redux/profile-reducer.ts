import {ActionType, PostsDataType, ProfilePagePropsType} from './store'
import img2 from '../assets/images/winter.jpg'

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const profileReducer = (state: ProfilePagePropsType, action: ActionType) => {

    switch (action.type) {
        case ADD_POST:
            let newPost: PostsDataType = {
                id: 5,
                header: state.newPost[0],
                src: img2,
                message: state.newPost[1],
                likesCount: 0
            }
            state.postsData.unshift(newPost)
            state.newPost[0] = ''
            state.newPost[1] = ''
            return state

        case UPDATE_NEW_POST_TEXT:
            if (action.newHeaderText) {
                state.newPost[0] = action.newHeaderText
            }

            if (action.newText) {
                state.newPost[1] = action.newText
            }
            return state

        default:
            return state
    }
}

export const addPostCreator = () => ({
    type: ADD_POST
})

export const updateNewPostInputCreator = (headerValue: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newHeaderText: headerValue
})

export const updateNewPostTextAreaCreator = (postValue: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: postValue
})