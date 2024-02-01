import {ActionsTypes, FollowFriendActionType, SetCurrentPageActionType, SetTotalUsersCountActionType, SetUsersActionType, ToggleIsFetchingActionType, UnfollowFriendActionType, UsersInitialState, UsersListType} from './redux-store'

const FOLLOW_FRIEND = 'FOLLOW-FRIEND'
const UNFOLLOW_FRIEND = 'UNFOLLOW-FRIEND'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

let initialState: UsersInitialState = {
    items: [],
    totalCount: 0,
    error: '',
    pageSize: 7,
    currentPage: 1,
    isFetching: true
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

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        default:
            return state
    }
}

export const followAC = (userID: number): FollowFriendActionType => ({type: FOLLOW_FRIEND, userID})
export const unfollowAC = (userID: number): UnfollowFriendActionType => ({type: UNFOLLOW_FRIEND, userID})
export const setUsersAC = (items: UsersListType[]): SetUsersActionType => ({type: SET_USERS, items})
export const setCurrentPageAC = (currentPage: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalCount: number): SetTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const toggleIsFetchingAC = (isFetching: boolean): ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching})
