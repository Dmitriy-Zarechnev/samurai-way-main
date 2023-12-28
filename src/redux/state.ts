import img1 from '../assets/images/Cupcake.jpg'

// Типизация для State
export type StateDataType = {
    profilePage: ProfilePagePropsType,
    messagesPage: MessagesPagePropsType
}

// Типизация для ProfilePage
export type ProfilePagePropsType = {
    postsData: Array<PostsDataType>
}

export type PostsDataType = {
    id: number,
    header: string,
    src: string,
    message: string,
    likesCount: number
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
    name: string
}

// Объект с общими данными
let state = {
    //  Данные для ProfilePage
    profilePage: {
        postsData: [
            {id: 1, header: 'Begin', src: img1, message: 'It is my first post', likesCount: 25},
            {id: 2, header: 'Process', src: img1, message: 'It is my second post', likesCount: 40},
            {id: 3, header: 'End', src: img1, message: 'It is my third post', likesCount: 52}
        ]
    },

    // Данные для MessagePage
    messagesPage: {
        dialogsData: [
            {id: 1, name: 'Bob'},
            {id: 2, name: 'Hulk'},
            {id: 3, name: 'Sam'},
            {id: 4, name: 'Bilbo'},
            {id: 5, name: 'Dworf'}
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