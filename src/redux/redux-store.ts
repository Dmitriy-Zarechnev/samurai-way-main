import {applyMiddleware, combineReducers, createStore} from 'redux'
import {MyPostsActionsType, profileReducer} from './profile-reducer'
import {messagesReducer, MyMessagesActionsType} from './messages-reducer'
import {friendsListReducer} from './friendsList-reducer'
import {UsersAPIComponentActionsType, usersReducer} from './users-reducer'
import {authReducer, AuthReducerActionsType} from './auth-reducer'
import thunkMiddleware from 'redux-thunk'


let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsListData: friendsListReducer,
    usersPage: usersReducer,
    auth: authReducer
})

// Типизация всего STATE
export type AppRootState = ReturnType<typeof rootReducer>

// Типизация всех actioncreators для типизации thunk
export type CommonActionsTypeForApp =
    AuthReducerActionsType |
    MyMessagesActionsType |
    MyPostsActionsType |
    UsersAPIComponentActionsType


let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store