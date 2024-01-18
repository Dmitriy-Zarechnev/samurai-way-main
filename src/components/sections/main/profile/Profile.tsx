import React from 'react'
import classes from './Profile.module.css'
import MyPostsContainer from './myPosts/MyPostsContainer'
import FriendsSideBarContainer from './friendsSideBar/FriendsSideBarContainer'
import ProfileInfoContainer from './profileInfo/ProfileInfoContainer'


const Profile: React.FC = () => {
    return (
        <section className={classes.app_profile}>
            <ProfileInfoContainer/>
            <MyPostsContainer/>
            <FriendsSideBarContainer/>
        </section>
    )
}

export default Profile