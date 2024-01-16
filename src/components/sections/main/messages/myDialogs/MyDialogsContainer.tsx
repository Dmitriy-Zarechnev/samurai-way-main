import React from 'react'
import MyDialogs from './MyDialogs'
import {StoreContext} from '../../../../../StoreContext'


const MyDialogsContainer: React.FC = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                return <MyDialogs dialogsData={store.getState().messagesPage.dialogsData}/>
            }}
        </StoreContext.Consumer>
    )
}

export default MyDialogsContainer