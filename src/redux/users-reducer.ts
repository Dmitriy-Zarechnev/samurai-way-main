import {ActionsTypes, followFriendActionType, setCurrentPageActionType, setTotalUsersCountActionType, setUsersActionType, unfollowFriendActionType, UsersInitialState, UsersListType} from './redux-store'

const FOLLOW_FRIEND = 'FOLLOW-FRIEND'
const UNFOLLOW_FRIEND = 'UNFOLLOW-FRIEND'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'

let initialState: UsersInitialState = {
    items: [],
    totalCount: 0,
    error: '',
    pageSize: 7,
    currentPage: 1
}


export const usersReducer = (state: UsersInitialState = initialState, action: ActionsTypes) => {

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
            return {...state, items: action.items}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalCount: action.totalCount}

        default:
            return state
    }
}

export const followAC = (userID: number): followFriendActionType => ({type: FOLLOW_FRIEND, userID})
export const unfollowAC = (userID: number): unfollowFriendActionType => ({type: UNFOLLOW_FRIEND, userID})
export const setUsersAC = (items: UsersListType[]): setUsersActionType => ({type: SET_USERS, items})
export const setCurrentPageAC = (currentPage: number): setCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalCount: number): setTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, totalCount})
