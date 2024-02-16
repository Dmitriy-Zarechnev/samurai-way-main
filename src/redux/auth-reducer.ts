import {authAPI} from '../api/api'
import {Dispatch} from 'redux'


// Типизация
type AuthReducerActionsType =
    SetAuthUserDataActionType |
    LogInServerActionType

type SetAuthUserDataActionType = ReturnType<typeof setAuthUserData>
type LogInServerActionType = ReturnType<typeof logInServer>

export type AuthPageInitialState = {
    data: UserDataType
    isAuth: boolean
    isFetching: boolean
    logIn: LogInType
}

export type UserDataType = {
    id: number | null
    email: string
    login: string
}

export type LogInType = {
    email: string,
    password: string,
    rememberMe: boolean
}

// *********** Константы названий экшенов ****************
const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA'
const LOG_IN_SERVER = 'LOG-IN-SERVER'


// *********** Первоначальный стэйт для authReducer ****************
const initialState: AuthPageInitialState = {
    data: {
        id: null,
        email: '',
        login: ''
    },
    isAuth: false,
    isFetching: false,
    logIn: {
        email: '',
        password: '',
        rememberMe: false
    }
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

        case LOG_IN_SERVER:
            debugger
            return {
                ...state,
                logIn: {
                    ...state.logIn,
                    email: action.payload.logIn.email,
                    password: action.payload.logIn.password,
                    rememberMe: action.payload.logIn.rememberMe
                }
            }

        default:
            return state
    }
}


// *********** Action creators - экшн криэйторы создают объект action ****************
export const setAuthUserData = (data: UserDataType) => {
    return {type: SET_AUTH_USER_DATA, payload: {data}} as const
}

export const logInServer = (logIn: LogInType) => {
    return {type: LOG_IN_SERVER, payload: {logIn}} as const
}


// *********** Thunk - санки необходимые для общения с DAL ****************
//  -------- Проверка авторизации на сервере ----------------
export const authMe = () => {

    return (dispatch: Dispatch<AuthReducerActionsType>) => {
        authAPI.authHeader().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(data.data))
            }
        })
    }
}

//  -------- Логинизация на сервере ----------------
export const serverLogIn = (email: string, password: string, rememberMe: boolean) => {

    return (dispatch: Dispatch<AuthReducerActionsType>) => {
        authAPI.logIn(email, password, rememberMe).then(data => {
            debugger
            if (data.resultCode === 0) {
                dispatch(logInServer({email, password, rememberMe}))
            }
        })
    }
}

