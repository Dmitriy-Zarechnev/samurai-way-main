import {AuthPageAPIComponentActionsType, AuthPageInitialState, SetAuthUserDataActionType, UserDataType} from '../types/entities'


const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA'

let initialState: AuthPageInitialState = {
    data: {},
    isAuth: false,
    isFetching: false
}

export const authReducer = (state: AuthPageInitialState = initialState, action: AuthPageAPIComponentActionsType):AuthPageInitialState => {

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

export const setAuthUserData = (data: UserDataType): SetAuthUserDataActionType => ({type: SET_AUTH_USER_DATA, data})