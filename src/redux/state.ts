import img1 from '../assets/images/Cupcake.jpg'
import cammyFriend from '../assets/images/webp/Cammy.webp'
import kratosFriend from '../assets/images/webp/Kratos.webp'
import groguFriend from '../assets/images/webp/Grogu.webp'
import trissFriend from '../assets/images/webp/Triss.webp'
import itachiFriend from '../assets/images/webp/Itachi.webp'
import {rerenderEntireTree} from '../render'


// Типизация для State
export type RootStateDataType = {
    profilePage: ProfilePagePropsType,
    messagesPage: MessagesPagePropsType
}


// Типизация для общих пропсов вместе с функциями
export type SummaryStatePropsType = {
    state: RootStateDataType,
    addPost: () => void,
    updateNewPostText: (newHeaderText: string, newText: string) => void,
    sendMessg: () => void,
    updateNewSendMessg: (message: string) => void
}


// Типизация для ProfilePage с функциями
export type ProfilePageWithFuncPropsType = {
    state: ProfilePagePropsType,
    addPost: () => void,
    updateNewPostText: (newHeaderText: string, newText: string) => void,
}

// Типизация для ProfilePage с функциями без friendsList
export type ProfilePageWithoutFriendPropsType = {
    postsData: Array<PostsDataType>,
    newPost: Array<string>,
    addPost: () => void,
    updateNewPostText: (newHeaderText: string, newText: string) => void,
}

// Типизация для ProfilePage
export type ProfilePagePropsType = {
    postsData: Array<PostsDataType>,
    newPost: Array<string>,
    friendsList: Array<FriendsListDataType>,
}

export type PostsDataType = {
    id: number,
    header: string,
    src?: string,
    message: string,
    likesCount: number
}

export type FriendsListDataType = {
    id: number,
    src: string,
    name: string,
    alt: string
}


// Типизация для MessagePage с функциями
export type MessagesPageWithFuncPropsType = {
    state: MessagesPagePropsType,
    sendMessg: () => void,
    updateNewSendMessg: (message: string) => void
}

// Типизация для MessagePage с функциями без dialogsData

export type MessagesPageWithoutDialogsPropsType = {
    messagesData: Array<MessagesDataType>,
    sendMessg: () => void,
    newMessg: string,
    updateNewSendMessg: (message: string) => void
}

// Типизация для MessagePage
export type MessagesPagePropsType = {
    dialogsData: Array<DialogsDataType>,
    messagesData: Array<MessagesDataType>,
    newMessg: string,
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


//  ---- Объект с общими данными ------
let state: RootStateDataType = {
    //  Данные для ProfilePage
    profilePage: {
        postsData: [
            {id: 1, header: 'Begin', src: img1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid consequuntur corporis cupiditate debitis dignissimos earum eius error ex iusto maxime minima nihil nostrum numquam odio possimus quae quidem quos, rerum saepe sint soluta tempore tenetur veniam voluptates! Enim inventore sequi totam. Corporis ea ipsum iure officiis quo, ut velit?',
                likesCount: 25},
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
            }
        ]
    },

// Данные для MessagePage
    messagesPage: {
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
            }
        ],
        messagesData:
            [
                {id: 1, message: 'hello'},
                {id: 2, message: 'hi'},
                {id: 3, message: 'qwerty'},
                {id: 4, message: 'food'},
                {id: 5, message: 'drink'}
            ],
        newMessg: ''
    }
}



// Функции для добавления поста в postsData
export let addPost = () => {
    let newPost: PostsDataType = {
        id: 4,
        header: state.profilePage.newPost[0],
        src: img1,
        message: state.profilePage.newPost[1],
        likesCount: 0
    }

    state.profilePage.postsData.unshift(newPost)
    state.profilePage.newPost[0] = ''
    state.profilePage.newPost[1] = ''
    rerenderEntireTree(state, addPost, updateNewPostText, sendMessg, updateNewSendMessg)
}


export let updateNewPostText = (newHeaderText: string, newText: string) => {
    state.profilePage.newPost[0] = newHeaderText
    state.profilePage.newPost[1] = newText

    rerenderEntireTree(state, addPost, updateNewPostText, sendMessg, updateNewSendMessg)
}


// Функции для отправки сообщений
export let sendMessg = () => {
    let newMessg: MessagesDataType = {
        id: 6,
        message: state.messagesPage.newMessg
    }

    state.messagesPage.messagesData.push(newMessg)
    state.messagesPage.newMessg = ''
    rerenderEntireTree(state, addPost, updateNewPostText, sendMessg, updateNewSendMessg)
}

export let updateNewSendMessg = (message: string) => {
    state.messagesPage.newMessg = message

    rerenderEntireTree(state, addPost, updateNewPostText, sendMessg, updateNewSendMessg)
}


export default state