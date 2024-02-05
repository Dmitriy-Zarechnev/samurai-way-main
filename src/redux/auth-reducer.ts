import {AuthPageAPIComponentActionsType, AuthPageInitialState, SetUserDataActionType, UserDataType} from './redux-store'


const SET_USER_DATA = 'SET-USER-DATA'

let initialState: AuthPageInitialState = {
    data: {},
    isFetching: false
}

export const authReducer = (state: AuthPageInitialState = initialState, action: AuthPageAPIComponentActionsType) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                data: {...action.data}
            }
        default:
            return state
    }
}

export const setUserData = (data: UserDataType): SetUserDataActionType => ({type: SET_USER_DATA, data})