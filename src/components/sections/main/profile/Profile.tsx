import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './myPosts/MyPosts'
import ProfileInfo from './profileInfo/ProfileInfo'
import {ProfilePagePropsType} from '../../../../redux/state'
import FriendsBar from './friendsBar/FriendsBar'


const Profile: React.FC<{ state: ProfilePagePropsType }> = (props: { state: ProfilePagePropsType }) => {
    return (
        <section className={classes.app_profile}>
            <ProfileInfo/>
            <MyPosts postsData={props.state.postsData}/>
            <FriendsBar/>
        </section>
    )
}

export default Profile