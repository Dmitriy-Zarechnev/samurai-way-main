import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './myPosts/MyPosts'
import ProfileInfo from './profileInfo/ProfileInfo'

const Profile: React.FC = () => {
    return (
        <section className={classes.content}>
            <ProfileInfo/>
            <MyPosts/>
        </section>
    )
}


export default Profile