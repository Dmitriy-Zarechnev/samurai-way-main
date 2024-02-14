
import {AuthPageInitialState, authReducer, setAuthUserData, UserDataType} from '../redux/auth-reducer'

test('auth reducer should return newData', () => {

    const state: AuthPageInitialState = {
        data: {
            id: null,
            email: '',
            login: ''
        },
        isAuth: false,
        isFetching: false
    }

    const newData: UserDataType = {
        id: 5,
        email: 'hello@gmail.com',
        login: 'Ori'
    }

    const newState = authReducer(state, setAuthUserData(newData))

    expect(newState.isAuth).toBe(true)
    expect(newState.data.id).toBe(5)
    expect(newState.data.email).toBe('hello@gmail.com')
    expect(newState.data.login).toBe('Ori')
})