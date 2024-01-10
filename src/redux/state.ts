import img1 from '../assets/images/Cupcake.jpg'
import img2 from '../assets/images/winter.jpg'
import cammyFriend from '../assets/images/webp/Cammy.webp'
import kratosFriend from '../assets/images/webp/Kratos.webp'
import groguFriend from '../assets/images/webp/Grogu.webp'
import trissFriend from '../assets/images/webp/Triss.webp'
import itachiFriend from '../assets/images/webp/Itachi.webp'
import nineS from '../assets/images/webp/9s.webp'


// Типизация для Store
export type StoreType = {
    _state: RootStateDataType,
    _callSubscriber: (state: RootStateDataType) => void,

    getState: () => RootStateDataType,
    subscribe: (observer: any) => void,

    dispatch: (action: ActionType) => void,
}

// Типизация для State
export type RootStateDataType = {
    profilePage: ProfilePagePropsType,
    messagesPage: MessagesPagePropsType
}

// Типизация для action
export type ActionType = {
    type: 'ADD-POST' | 'UPDATE-NEW-POST-TEXT' | 'SEND-NEW-MESSAGE' | 'UPDATE-NEW-SEND-MESSAGE',
    newHeaderText?: string,
    newText?: string,
    message?: string,
}


// Типизация для общих пропсов вместе с функциями
export type SummaryStatePropsType = {
    state: RootStateDataType,
    dispatch: (action: ActionType) => void,
}

// Типизация для ProfilePage с функциями
export type ProfilePageWithFuncPropsType = {
    profilePageData: ProfilePagePropsType,
    dispatch: (action: ActionType) => void,
}

// Типизация для ProfilePage с функциями без friendsList
export type ProfilePageWithoutFriendPropsType = {
    postsData: Array<PostsDataType>,
    newPost: Array<string>,
    dispatch: (action: ActionType) => void,
}

// Типизация для ProfilePage
export type ProfilePagePropsType = {
    postsData: Array<PostsDataType>,
    newPost: Array<string>,
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


// Типизация для MessagePage с функциями
export type MessagesPageWithFuncPropsType = {
    state: MessagesPagePropsType,
    dispatch: (action: ActionType) => void,
}

// Типизация для MessagePage с функциями без dialogsData
export type MessagesPageWithoutDialogsPropsType = {
    messagesData: Array<MessagesDataType>,
    newMessg: string,
    dispatch: (action: ActionType) => void,
}

// Типизация для MessagePage
export type MessagesPagePropsType = {
    dialogsData: Array<DialogsDataType>,
    messagesData: Array<MessagesDataType>,
    newMessg: string
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


// Store содержит все данные и методы
let store: StoreType = {
    _state: {
        //  Данные для ProfilePage
        profilePage: {
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
    },

    _callSubscriber() {
        console.log('State was changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },


    dispatch(action: ActionType) {

        if (action.type === 'ADD-POST') {
            let newPost: PostsDataType = {
                id: 5,
                header: this._state.profilePage.newPost[0],
                src: img2,
                message: this._state.profilePage.newPost[1],
                likesCount: 0
            }

            this._state.profilePage.postsData.unshift(newPost)
            this._state.profilePage.newPost[0] = ''
            this._state.profilePage.newPost[1] = ''

            this._callSubscriber(this._state)

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {

            if (action.newHeaderText != null) {
                this._state.profilePage.newPost[0] = action.newHeaderText
            }

            if (action.newText != null) {
                this._state.profilePage.newPost[1] = action.newText
            }

            this._callSubscriber(this._state)

        } else if (action.type === 'SEND-NEW-MESSAGE') {
            let newMessg: MessagesDataType = {
                id: 6,
                message: this._state.messagesPage.newMessg
            }

            this._state.messagesPage.messagesData.push(newMessg)
            this._state.messagesPage.newMessg = ''

            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-SEND-MESSAGE') {

            if (action.message != null) {
                this._state.messagesPage.newMessg = action.message
            }

            this._callSubscriber(this._state)
        }


    }

}

export default store
