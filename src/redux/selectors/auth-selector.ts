import {AppRootState} from '../redux-store'

// ---- Селекторы для страницы logIn ------
export const getLogIn = (state: AppRootState) => {
    return state.auth.logIn
}

export const getIsAuth = (state: AppRootState) => {
    return state.auth.isAuth
}

export const getIsServerError = (state: AppRootState) => {
    return state.auth.isServerError
}
// --------------------------------------------