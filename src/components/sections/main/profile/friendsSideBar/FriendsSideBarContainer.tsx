import React from 'react'
import FriendsSideBar from './FriendsSideBar'
import {StoreContext} from '../../../../../StoreContext'


const FriendsSideBarContainer: React.FC = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                return <FriendsSideBar friendsList={store.getState().profilePage.friendsList}/>
            }}
        </StoreContext.Consumer>
    )
}

export default FriendsSideBarContainer