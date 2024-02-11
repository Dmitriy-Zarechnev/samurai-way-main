import {FollowFriendActionType, SetCurrentPageActionType, SetTotalUsersCountActionType, SetUsersActionType, ToggleIsFetchingActionType, ToggleIsFollowingInProgressActionType, UnfollowFriendActionType, UsersAPIComponentActionsType, UsersInitialState, UsersListType} from '../types/entities'
import {followUnfollowAPI, usersAPI} from '../api/api'
import {Dispatch} from 'redux'

// *********** Константы названий экшенов ****************
export const FOLLOW_FRIEND = 'FOLLOW-FRIEND'
export const UNFOLLOW_FRIEND = 'UNFOLLOW-FRIEND'
export const SET_USERS = 'SET-USERS'
export const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
export const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
export const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
export const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE-IS-FOLLOWING-IN-PROGRESS'


// *********** Первоначальный стэйт для usersReducer ****************
const initialState: UsersInitialState = {
    items: [],
    totalCount: 0,
    error: '',
    pageSize: 7,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}


// *********** Reducer - редьюсер, чистая функция для изменения стэйта после получения экшена от диспача ****************
export const usersReducer = (state: UsersInitialState = initialState, action: UsersAPIComponentActionsType): UsersInitialState => {

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

        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress:
                    action.isFetching
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => id != action.userId)
            }

        default:
            return state
    }
}


// *********** Action creators - экшн криэйторы создают объект action ****************
export const followFriend = (userID: number): FollowFriendActionType => ({type: FOLLOW_FRIEND, userID})
export const unfollowFriend = (userID: number): UnfollowFriendActionType => ({type: UNFOLLOW_FRIEND, userID})
export const setUsers = (items: UsersListType[]): SetUsersActionType => ({type: SET_USERS, items})
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (isFetching: boolean, userId: number): ToggleIsFollowingInProgressActionType => ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFetching, userId})


// *********** Thunk - санки необходимые для общения с DAL ****************
//  -------- Первая загрузка списка пользователей ----------------
export const getUsers = (currentPage: number, pageSize: number) => {

    return (dispatch: Dispatch<UsersAPIComponentActionsType>) => {
        dispatch(toggleIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

//  -------- Изменение текущей страницы ----------------
export const newPageGetUsers = (currentPage: number, pageSize: number) => {

    return (dispatch: Dispatch<UsersAPIComponentActionsType>) => {
        dispatch(setCurrentPage(currentPage))
        dispatch(toggleIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
        })
    }
}

//  -------- Отписка от дружбы ----------------
export const unFollow = (id: number) => {

    return (dispatch: Dispatch<UsersAPIComponentActionsType>) => {
        dispatch(toggleFollowingInProgress(true, id))
        followUnfollowAPI.unfollowUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowFriend(id))
            }
            dispatch(toggleFollowingInProgress(false, id))
        })
    }
}

//  -------- Подписка для дружбы ----------------
export const follow = (id: number) => {

    return (dispatch: Dispatch<UsersAPIComponentActionsType>) => {
        dispatch(toggleFollowingInProgress(true, id))
        followUnfollowAPI.followUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(followFriend(id))
            }
            dispatch(toggleFollowingInProgress(false, id))
        })
    }
}

