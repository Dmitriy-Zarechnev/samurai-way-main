import React from 'react'
import {StoreType} from './redux/store'
import store from './redux/redux-store'


export const StoreContext = React.createContext<StoreType>(store)

const Provider: React.FC<{ store: StoreType }> = ({store, ...props}) => {
    return (
        <StoreContext.Provider value={store}>
            {props.children}
        </StoreContext.Provider>
    )
}