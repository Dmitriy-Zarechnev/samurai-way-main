import {authAPI} from '../../api/api'
import {Dispatch} from 'redux'
import {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {AppRootState, CommonActionsTypeForApp} from '../redux-store'


// Типизация
export type AuthReducerActionsType =
    SetAuthUserDataActionType |
    LogInServerActionType |
    ServerErrorActionType

type SetAuthUserDataActionType = ReturnType<typeof setAuthUserData>
type LogInServerActionType = ReturnType<typeof logInServer>
type ServerErrorActionType = ReturnType<typeof serverError>

export type AuthPageInitialState = {
    id: number | null
    email: string
    login: string
    isAuth: boolean
    isFetching: boolean
    logIn: LogInType
    isServerError: string
}

export type LogInType = {
    email: string,
    password: string,
    rememberMe: boolean
}

type ThunkType = ThunkAction<void, AppRootState, unknown, CommonActionsTypeForApp>
type ThunkDispatchType = ThunkDispatch<AppRootState, unknown, CommonActionsTypeForApp>

// *********** Константы названий экшенов ****************
const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA'
const LOG_IN_SERVER = 'LOG-IN-SERVER'
const SERVER_ERROR = 'SERVER-ERROR'


// *********** Первоначальный стэйт для authReducer ****************
const initialState: AuthPageInitialState = {
    id: null,
    email: '',
    login: '',
    isAuth: false,
    isFetching: false,
    logIn: {
        email: '',
        password: '',
        rememberMe: false
    },
    isServerError: ''
}


// *********** Reducer - редьюсер, чистая функция для изменения стэйта после получения экшена от диспача ****************
export const authReducer = (state: AuthPageInitialState = initialState, action: AuthReducerActionsType): AuthPageInitialState => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        case LOG_IN_SERVER:
            return {
                ...state,
                logIn: {
                    ...state.logIn,
                    email: action.payload.logIn.email,
                    password: action.payload.logIn.password,
                    rememberMe: action.payload.logIn.rememberMe
                },
                isServerError: ''
            }

        case SERVER_ERROR:
            return {
                ...state,
                isServerError: action.payload.message
            }

        default:
            return state
    }
}


// *********** Action creators - экшн криэйторы создают объект action ****************
export const setAuthUserData = (id: number | null, email: string, login: string, isAuth: boolean) => {
    return {type: SET_AUTH_USER_DATA, payload: {id, email, login, isAuth}} as const
}

export const logInServer = (logIn: LogInType) => {
    return {type: LOG_IN_SERVER, payload: {logIn}} as const
}

export const serverError = (message: string) => {
    return {type: SERVER_ERROR, payload:{message}} as const
}


// *********** Thunk - санки необходимые для общения с DAL ****************
//  -------- Проверка авторизации на сервере ----------------
export const authMe = () => {

    return (dispatch: Dispatch<AuthReducerActionsType>) => {
        return authAPI.authHeader().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login, true))
            }
        })
    }
}

//  -------- Логинизация на сервере ----------------
export const serverLogIn = (email: string, password: string, rememberMe: boolean): ThunkType => {

    return (dispatch: ThunkDispatchType) => {
         authAPI.logIn(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(authMe())
                if (rememberMe) dispatch(logInServer({email, password, rememberMe}))
            } else {
                dispatch(serverError(data.messages[0]))
            }
        })
    }
}

//  -------- Вылогинизация на сервере ----------------
export const serverLogOut = () => {

    return (dispatch: Dispatch<AuthReducerActionsType>) => {
        authAPI.logOut().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, '', '', false))
            }
        })
    }
}

