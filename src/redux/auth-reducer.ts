import {AuthPageAPIComponentActionsType, AuthPageInitialState, SetAuthUserDataActionType, UserDataType} from '../types/entities'
import {authAPI} from '../api/api'
import {Dispatch} from 'redux'

// *********** Константы названий экшенов ****************
export const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA'


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
export const authReducer = (state: AuthPageInitialState = initialState, action: AuthPageAPIComponentActionsType): AuthPageInitialState => {

    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                data: {...action.data},
                isAuth: true
            }

        default:
            return state
    }
}


// *********** Action creators - экшн криэйторы создают объект action ****************
export const setAuthUserData = (data: UserDataType): SetAuthUserDataActionType => ({type: SET_AUTH_USER_DATA, data})


// *********** Thunk - санки необходимые для общения с DAL ****************
//  -------- Первая загрузка списка пользователей ----------------
export const authMe = () => {

    return (dispatch: Dispatch<AuthPageAPIComponentActionsType>) => {

        authAPI.authHeader().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(data.data))
            }
        })
    }
}


