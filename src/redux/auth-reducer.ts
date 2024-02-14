import {authAPI} from '../api/api'
import {Dispatch} from 'redux'


// Типизация
type AuthReducerActionsType = SetAuthUserDataActionType
type SetAuthUserDataActionType = ReturnType<typeof setAuthUserData>

export type AuthPageInitialState = {
    data: UserDataType
    isAuth: boolean
    isFetching: boolean
}

export type UserDataType = {
    id: number | null
    email: string
    login: string
}

// *********** Константы названий экшенов ****************
const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA'


// *********** Первоначальный стэйт для authReducer ****************
const initialState: AuthPageInitialState = {
    data: {
        id: null,
        email: '',
        login: ''
    },
    isAuth: false,
    isFetching: false
}


// *********** Reducer - редьюсер, чистая функция для изменения стэйта после получения экшена от диспача ****************
export const authReducer = (state: AuthPageInitialState = initialState, action: AuthReducerActionsType): AuthPageInitialState => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                data: {...action.payload.data},
                isAuth: true
            }

        default:
            return state
    }
}


// *********** Action creators - экшн криэйторы создают объект action ****************
export const setAuthUserData = (data: UserDataType) => {
    return {type: SET_AUTH_USER_DATA, payload: {data}} as const
}


// *********** Thunk - санки необходимые для общения с DAL ****************
//  -------- Первая загрузка списка пользователей ----------------
export const authMe = () => {

    return (dispatch: Dispatch<AuthReducerActionsType>) => {
        authAPI.authHeader().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(data.data))
            }
        })
    }
}


