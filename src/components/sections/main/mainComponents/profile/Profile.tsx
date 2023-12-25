import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './myPosts/MyPosts'
import ProfileInfo from './profileInfo/ProfileInfo'
import {PostsDataType} from './myPosts/post/Post'

const postsData: Array<PostsDataType> = [
    {id: 1, header: 'Begin', message: 'It is my first post', likesCount: 25},
    {id: 2, header: 'Process', message: 'It is my second post', likesCount: 40},
    {id: 3, header: 'End', message: 'It is my third post', likesCount: 52}
]

const Profile: React.FC = () => {
    return (
        <section className={classes.content}>
            <ProfileInfo/>
            <MyPosts postsData={postsData}/>
        </section>
    )
}

export default Profile