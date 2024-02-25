import {followUnfollowAPI, usersAPI} from '../../api/api'
import {Dispatch} from 'redux'


// Типизация
export type UsersInitialState = {
    items: UsersListType[]
    totalCount: number
    error: string
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

export type UsersListType = {
    name: string
    id: number
    photos: UsersPhotos
    status: string
    followed: boolean
}

type UsersPhotos = {
    small: string
    large: string
}


export type UsersAPIComponentActionsType =
    FollowFriendActionType |
    UnfollowFriendActionType |
    SetUsersActionType |
    SetCurrentPageActionType |
    SetTotalUsersCountActionType |
    ToggleIsFetchingActionType |
    ToggleIsFollowingInProgressActionType


type FollowFriendActionType = ReturnType<typeof followFriend>
type UnfollowFriendActionType = ReturnType<typeof unfollowFriend>
type SetUsersActionType = ReturnType<typeof setUsers>
type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
type ToggleIsFollowingInProgressActionType = ReturnType<typeof toggleFollowingInProgress>


// *********** Константы названий экшенов ****************
export const FOLLOW_FRIEND = '/users/FOLLOW-FRIEND'
export const UNFOLLOW_FRIEND = '/users/UNFOLLOW-FRIEND'
export const SET_USERS = '/users/SET-USERS'
export const SET_CURRENT_PAGE = '/users/SET-CURRENT-PAGE'
export const SET_TOTAL_USERS_COUNT = '/users/SET-TOTAL-USERS-COUNT'
export const TOGGLE_IS_FETCHING = '/users/TOGGLE-IS-FETCHING'
export const TOGGLE_IS_FOLLOWING_IN_PROGRESS = '/users/TOGGLE-IS-FOLLOWING-IN-PROGRESS'


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
                    return u.id === action.payload.userID ? {...u, followed: true} : u
                })
            }

        case UNFOLLOW_FRIEND:
            return {
                ...state,
                items: state.items.map(u => {
                    return u.id === action.payload.userID ? {...u, followed: false} : u
                })
            }

        case SET_USERS:
            return {...state, items: action.payload.items}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload.currentPage}

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalCount: action.payload.totalCount}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.payload.isFetching}

        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress:
                    action.payload.isFetching
                        ? [...state.followingInProgress, action.payload.userId]
                        : state.followingInProgress.filter(id => id != action.payload.userId)
            }

        default:
            return state
    }
}


// ****** Action creators - экшн криэйторы создают объект action ***********
export const followFriend = (userID: number) => {
    return {type: FOLLOW_FRIEND, payload: {userID}} as const
}
export const unfollowFriend = (userID: number) => {
    return {type: UNFOLLOW_FRIEND, payload: {userID}} as const
}
export const setUsers = (items: UsersListType[]) => {
    return {type: SET_USERS, payload: {items}} as const
}
export const setCurrentPage = (currentPage: number) => {
    return {type: SET_CURRENT_PAGE, payload: {currentPage}} as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {type: SET_TOTAL_USERS_COUNT, payload: {totalCount}} as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {type: TOGGLE_IS_FETCHING, payload: {isFetching}} as const
}
export const toggleFollowingInProgress = (isFetching: boolean, userId: number) => {
    return {type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, payload: {isFetching, userId}} as const
}


// *********** Thunk - санки необходимые для общения с DAL ****************
//  -------- Первая загрузка списка пользователей ----------------
export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch<UsersAPIComponentActionsType>) => {
    dispatch(toggleIsFetching(true))

    const response = await usersAPI.getUsers(currentPage, pageSize)

    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.data.items))
    dispatch(setTotalUsersCount(response.data.totalCount))
}

//  -------- Изменение текущей страницы ----------------
export const newPageGetUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch<UsersAPIComponentActionsType>) => {
    dispatch(setCurrentPage(currentPage))
    dispatch(toggleIsFetching(true))

    const response = await usersAPI.getUsers(currentPage, pageSize)

    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.data.items))
}

//  -------- Отписка от дружбы ----------------
export const unFollow = (id: number) => async (dispatch: Dispatch<UsersAPIComponentActionsType>) => {
    dispatch(toggleFollowingInProgress(true, id))

    const response = await followUnfollowAPI.unfollowUser(id)
    response.data.resultCode === 0 && dispatch(unfollowFriend(id))

    dispatch(toggleFollowingInProgress(false, id))
}

//  -------- Подписка для дружбы ----------------
export const follow = (id: number) => async (dispatch: Dispatch<UsersAPIComponentActionsType>) => {
    dispatch(toggleFollowingInProgress(true, id))

    const response = await followUnfollowAPI.followUser(id)
    response.data.resultCode === 0 && dispatch(followFriend(id))

    dispatch(toggleFollowingInProgress(false, id))
}

