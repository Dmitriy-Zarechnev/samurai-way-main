import {combineReducers, createStore, Store} from 'redux'
import {profileReducer} from './profile-reducer'
import {messagesReducer} from './messages-reducer'
import {ActionType, StoreType} from './store'


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer
})

let store: Store<StoreType, ActionType> = createStore(reducers)


export default store