import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './myPosts/MyPosts'
import ProfileInfo from './profileInfo/ProfileInfo'
import {ProfilePageWithFuncPropsType} from '../../../../redux/state'
import FriendsSideBar from './friendsSideBar/FriendsSideBar'


const Profile: React.FC<ProfilePageWithFuncPropsType> = (props) => {
    return (
        <section className={classes.app_profile}>
            <ProfileInfo/>
            <MyPosts postsData={props.profilePageData.postsData}
                     dispatch={props.dispatch}
                     newPost={props.profilePageData.newPost}/>
            <FriendsSideBar friendsList={props.profilePageData.friendsList}/>
        </section>
    )
}

export default Profile