import {applyMiddleware, combineReducers, createStore} from 'redux'
import {MyPostsActionsType, profileReducer} from './reducers/profile-reducer'
import {messagesReducer, MyMessagesActionsType} from './reducers/messages-reducer'
import {friendsListReducer} from './reducers/friendsList-reducer'
import {UsersAPIComponentActionsType, usersReducer} from './reducers/users-reducer'
import {authReducer, AuthReducerActionsType} from './reducers/auth-reducer'
import thunkMiddleware from 'redux-thunk'
import {appReducer, AppReducerActionsType} from './reducers/app-reducer'


let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsListData: friendsListReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app:appReducer
})

// Типизация всего STATE
export type AppRootState = ReturnType<typeof rootReducer>

// Типизация всех actioncreators для типизации thunk
export type CommonActionsTypeForApp =
    AuthReducerActionsType |
    MyMessagesActionsType |
    MyPostsActionsType |
    UsersAPIComponentActionsType |
    AppReducerActionsType


let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store