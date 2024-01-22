import {ActionType, UsersInitialState} from './redux-store'

const FOLLOW_FRIEND = 'FOLLOW-FRIEND'
const UNFOLLOW_FRIEND = 'UNFOLLOW-FRIEND'


let initialState: UsersInitialState = {
    users: [
        {id: 1, fullName: 'dz', status: 'I am using react', followed: true, location: {city: 'Zenon', country: 'Madagaskar'}},
        {id: 2, fullName: 'fc', status: 'I am using css', followed: false, location: {city: 'Hell', country: 'Haven'}},
        {id: 3, fullName: 'gr', status: 'I am using html', followed: true, location: {city: 'Paradice', country: 'Haven'}},
        {id: 4, fullName: 'ld', status: 'I am using bll', followed: false, location: {city: 'Moscow', country: 'Zelda'}}
    ]
}


export const usersReducer = (state: UsersInitialState = initialState, action: ActionType) => {

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

        default:
            return state
    }

}

export const followAC = (userID: number) => ({type: FOLLOW_FRIEND, userID})
export const unfollowAC = (userID: number) => ({type: UNFOLLOW_FRIEND, userID})