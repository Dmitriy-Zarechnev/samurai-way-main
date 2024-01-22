import {ActionType, UsersInitialState, UsersListType} from './redux-store'
import min from '../assets/images/min.jpg'

const FOLLOW_FRIEND = 'FOLLOW-FRIEND'
const UNFOLLOW_FRIEND = 'UNFOLLOW-FRIEND'
const SET_USERS = 'SET-USERS'

let initialState: UsersInitialState  = {

    users: [
        {id: 1, fullName: 'dz', status: 'I am using react', followed: true, photoURL: min, location: {city: 'Zenon', country: 'Madagaskar'}},
        {id: 2, fullName: 'fc', status: 'I am using css', followed: false, photoURL: min, location: {city: 'Hell', country: 'Haven'}},
        {id: 3, fullName: 'gr', status: 'I am using html', followed: true, photoURL: min, location: {city: 'Paradice', country: 'Haven'}},
        {id: 4, fullName: 'ld', status: 'I am using bll', followed: false, photoURL: min, location: {city: 'Moscow', country: 'Zelda'}}
    ]

    // users: []
}


export const usersReducer = (state: UsersInitialState  = initialState, action: ActionType) => {

    switch (action.type) {
        case FOLLOW_FRIEND:
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.userID ? {...u, followed: true} : u
                })
            }

        case UNFOLLOW_FRIEND:
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.userID ? {...u, followed: false} : u
                })
            }

        case SET_USERS:
            return {...state, users: [...state.users, action.users]}

        default:
            return state
    }

}

export const followAC = (userID: number) => ({type: FOLLOW_FRIEND, userID})
export const unfollowAC = (userID: number) => ({type: UNFOLLOW_FRIEND, userID})
export const setUsersAC = (users: UsersListType[]) => ({type: SET_USERS, users})
