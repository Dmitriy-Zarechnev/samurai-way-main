import React from 'react'
import Post from './post/Post'
import classes from './MyPosts.module.css'

const MyPosts: React.FC = () => {
    return (
        <div className={classes.my_Posts}>
            <h3>My posts</h3>
            <h4>New post</h4>
            <Post message="It is my first post" likesCount={25}/>
            <Post message="It is my second post" likesCount={40}/>
            <Post message="It is my third post" likesCount={52}/>
        </div>
    )
}

export default MyPosts