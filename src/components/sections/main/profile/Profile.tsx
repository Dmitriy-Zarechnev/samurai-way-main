import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './myPosts/MyPosts'
import ProfileInfo from './profileInfo/ProfileInfo'
import {AddPostFuncPropsType, ProfilePagePropsType} from '../../../../redux/state'
import FriendsSideBar from './friendsSideBar/FriendsSideBar'


const Profile: React.FC<{ state: ProfilePagePropsType, addPost:AddPostFuncPropsType }> = (props) => {
    return (
        <section className={classes.app_profile}>
            <ProfileInfo/>
            <MyPosts postsData={props.state.postsData} addPost={props.addPost}/>
            <FriendsSideBar friendsList={props.state.friendsList}/>
        </section>
    )
}

export default Profile