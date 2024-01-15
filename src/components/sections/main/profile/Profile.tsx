import React from 'react'
import classes from './Profile.module.css'
import ProfileInfo from './profileInfo/ProfileInfo'
import {ProfilePageWithFuncPropsType} from '../../../../redux/store'
import FriendsSideBar from './friendsSideBar/FriendsSideBar'
import MyPostsContainer from './myPosts/MyPostsContainer'


const Profile: React.FC<ProfilePageWithFuncPropsType> = (props) => {
    return (
        <section className={classes.app_profile}>
            <ProfileInfo/>
            <MyPostsContainer postsData={props.profilePageData.postsData}
                              dispatch={props.dispatch}
                              newPost={props.profilePageData.newPost}/>
            <FriendsSideBar
                friendsList={props.profilePageData.friendsList}/>
        </section>
    )
}

export default Profile