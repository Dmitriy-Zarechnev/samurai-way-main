import img1 from '../assets/images/Cupcake.jpg'
import cammyFriend from '../assets/images/webp/Cammy.webp'
import kratosFriend from '../assets/images/webp/Kratos.webp'
import groguFriend from '../assets/images/webp/Grogu.webp'
import trissFriend from '../assets/images/webp/Triss.webp'
import itachiFriend from '../assets/images/webp/Itachi.webp'


// Типизация для State
export type StateDataType = {
    profilePage: ProfilePagePropsType,
    messagesPage: MessagesPagePropsType
}

// Типизация для ProfilePage
export type ProfilePagePropsType = {
    postsData: Array<PostsDataType>,
    friendsList: Array<FriendsListDataType>
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


// Типизация для MessagePage
export type MessagesPagePropsType = {
    dialogsData: Array<DialogsDataType>,
    messagesData: Array<MessagesDataType>
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


// Объект с общими данными
let state = {
    //  Данные для ProfilePage
    profilePage: {
        postsData: [
            {id: 1, header: 'Begin', src: img1, message: 'It is my first post', likesCount: 25},
            {id: 2, header: 'Process', src: img1, message: 'It is my second post', likesCount: 40},
            {id: 3, header: 'End', src: img1, message: 'It is my third post', likesCount: 52}
        ],
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
        messagesData: [
            {id: 1, message: 'hello'},
            {id: 2, message: 'hi'},
            {id: 3, message: 'qwerty'},
            {id: 4, message: 'food'},
            {id: 5, message: 'drink'}
        ]
    }
}

export default state