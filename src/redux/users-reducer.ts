import {ActionType, UsersInitialState, UsersListType} from './redux-store'

const FOLLOW_FRIEND = 'FOLLOW-FRIEND'
const UNFOLLOW_FRIEND = 'UNFOLLOW-FRIEND'
const SET_USERS = 'SET-USERS'

let initialState: UsersInitialState = {
    items: [],
    totalCount: 0,
    error: ''
    // users: [
    //     {id: 1, fullName: 'Morgan White', status: 'I am using react', followed: true, photoURL: min, location: {city: 'Zenon', country: 'Madagaskar'}},
    //     {id: 2, fullName: 'Malenia Blade of Mikkela', status: 'I am using css', followed: false, photoURL: min, location: {city: 'Hell', country: 'Haven'}},
    //     {id: 3, fullName: 'Hard Nut', status: 'I am using html', followed: true, photoURL: min, location: {city: 'Paradice', country: 'Haven'}},
    //     {id: 4, fullName: 'Blade Blue', status: 'I am using bll', followed: false, photoURL: min, location: {city: 'Moscow', country: 'Zelda'}}
    // ]

    // items: []
}


export const usersReducer = (state: UsersInitialState = initialState, action: ActionType) => {

    switch (action.type) {
        case FOLLOW_FRIEND:
            return {
                ...state,
                users: state.items.map(u => {
                    return u.id === action.userID ? {...u, followed: true} : u
                })
            }

        case UNFOLLOW_FRIEND:
            return {
                ...state,
                users: state.items.map(u => {
                    return u.id === action.userID ? {...u, followed: false} : u
                })
            }

        case SET_USERS:

            // return { ...state, items: [...state.items, ...action.items] }
            if (action.items && Array.isArray(action.items)) {
                return {...state, items: [...state.items, ...action.items]}
            } else {
                return state
            }

        default:
            return state
    }

}

export const followAC = (userID: number) => ({type: FOLLOW_FRIEND, userID})
export const unfollowAC = (userID: number) => ({type: UNFOLLOW_FRIEND, userID})
export const setUsersAC = (items: UsersListType[]) => ({type: SET_USERS, items})
