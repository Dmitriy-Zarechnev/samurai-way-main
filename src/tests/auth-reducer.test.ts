import {AuthPageInitialState, authReducer, setAuthUserData} from '../redux/reducers/auth-reducer'

let startState: AuthPageInitialState

beforeEach(() => {
    startState = {
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
})


test('auth reducer should return newData', () => {

    const newData = {
        id: 5,
        email: 'hello@gmail.com',
        login: 'Ori',
        isAuth: true
    }

    const newState = authReducer(startState, setAuthUserData(newData.id, newData.email, newData.login, newData.isAuth))

    expect(newState.isAuth).toBe(true)
    expect(newState.id).toBe(5)
    expect(newState.email).toBe('hello@gmail.com')
    expect(newState.login).toBe('Ori')
    expect(newState.isAuth).toBe(true)
})