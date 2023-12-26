import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './myPosts/MyPosts'
import ProfileInfo from './profileInfo/ProfileInfo'
import {PostPropsType} from './myPosts/post/Post'


const Profile: React.FC<PostPropsType> = (props: PostPropsType) => {
    return (
        <section className={classes.content}>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}/>
        </section>
    )
}

export default Profile