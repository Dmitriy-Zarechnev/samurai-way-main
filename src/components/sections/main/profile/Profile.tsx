import React from 'react'
import classes from './Profile.module.css'
import ProfileInfo from './profileInfo/ProfileInfo'
import {StoreType} from '../../../../redux/store'
import MyPostsContainer from './myPosts/MyPostsContainer'
import FriendsSideBarContainer from './friendsSideBar/FriendsSideBarContainer'


const Profile: React.FC<{ store: StoreType }> = ({store}) => {
    return (
        <section className={classes.app_profile}>
            <ProfileInfo/>
            <MyPostsContainer store={store}/>
            <FriendsSideBarContainer store={store}/>
        </section>
    )
}

export default Profile