import {combineReducers, createStore} from 'redux'
import {profileReducer} from './profile-reducer'
import {messagesReducer} from './messages-reducer'
import {StoreType} from './store'

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer
})

let store:StoreType = createStore(reducers)

export default store