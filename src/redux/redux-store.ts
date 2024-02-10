import {combineReducers, createStore} from 'redux'
import {profileReducer} from './profile-reducer'
import {messagesReducer} from './messages-reducer'
import {friendsListReducer} from './friendsList-reducer'
import {usersReducer} from './users-reducer'
import {authReducer} from './auth-reducer'

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsListData: friendsListReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers)

export default store