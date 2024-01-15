import React from 'react'
import {StoreType} from '../../../../../redux/store'
import FriendsSideBar from './FriendsSideBar'


const FriendsSideBarContainer: React.FC<{ store: StoreType }> = ({store}) => {
    return (
        <FriendsSideBar friendsList={store.getState().profilePage.friendsList}/>
    )
}

export default FriendsSideBarContainer