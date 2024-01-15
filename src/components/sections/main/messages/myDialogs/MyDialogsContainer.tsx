import React from 'react'
import {StoreType} from '../../../../../redux/store'
import MyDialogs from './MyDialogs'


const MyDialogsContainer: React.FC<{ store: StoreType }> = ({store}) => {
    return (
        <MyDialogs dialogsData={store.getState().messagesPage.dialogsData}/>
    )
}

export default MyDialogsContainer