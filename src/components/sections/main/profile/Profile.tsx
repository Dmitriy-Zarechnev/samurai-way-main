import React from 'react'
import classes from './Profile.module.css'
import ProfileInfo from './profileInfo/ProfileInfo'
import MyPostsContainer from './myPosts/MyPostsContainer'
import FriendsSideBarContainer from './friendsSideBar/FriendsSideBarContainer'


const Profile: React.FC = () => {
    return (
        <section className={classes.app_profile}>
            <ProfileInfo/>
            <MyPostsContainer />
            <FriendsSideBarContainer />
        </section>
    )
}

export default Profile