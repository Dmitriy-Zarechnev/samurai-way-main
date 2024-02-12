import {applyMiddleware, combineReducers, createStore} from 'redux'
import {profileReducer} from './profile-reducer'
import {messagesReducer} from './messages-reducer'
import {friendsListReducer} from './friendsList-reducer'
import {usersReducer} from './users-reducer'
import {authReducer} from './auth-reducer'
import thunkMiddleware from 'redux-thunk'

let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsListData: friendsListReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type AppRootState = ReturnType<typeof rootReducer>


let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store