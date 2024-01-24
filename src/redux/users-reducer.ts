import {ActionType, UsersInitialState, UsersListType} from './redux-store'

const FOLLOW_FRIEND = 'FOLLOW-FRIEND'
const UNFOLLOW_FRIEND = 'UNFOLLOW-FRIEND'
const SET_USERS = 'SET-USERS'

let initialState: UsersInitialState = {
    items: [],
    totalCount: 0,
    error: ''
}


export const usersReducer = (state: UsersInitialState = initialState, action: ActionType) => {

    switch (action.type) {
        case FOLLOW_FRIEND:
            return {
                ...state,
                items: state.items.map(u => {
                    return u.id === action.userID ? {...u, followed: true} : u
                })
            }

        case UNFOLLOW_FRIEND:
            return {
                ...state,
                items: state.items.map(u => {
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
