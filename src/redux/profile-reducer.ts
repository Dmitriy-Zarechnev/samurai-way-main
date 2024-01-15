import {ActionType, PostsDataType, ProfilePagePropsType} from './store'
import img2 from '../assets/images/winter.jpg'
import img1 from '../assets/images/Cupcake.jpg'
import cammyFriend from '../assets/images/webp/Cammy.webp'
import kratosFriend from '../assets/images/webp/Kratos.webp'
import groguFriend from '../assets/images/webp/Grogu.webp'
import trissFriend from '../assets/images/webp/Triss.webp'
import itachiFriend from '../assets/images/webp/Itachi.webp'
import nineS from '../assets/images/webp/9s.webp'

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState: ProfilePagePropsType = {
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
    newPost: ['', ''],
    friendsList: [
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
    ]
}


export const profileReducer = (state: ProfilePagePropsType = initialState, action: ActionType) => {

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