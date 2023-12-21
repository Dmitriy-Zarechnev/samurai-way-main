import React from 'react'
import Post from './post/Post'
import classes from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <section className={classes.my_Posts}>
            <h3>My posts</h3>
            <h4>New post</h4>
            <Post/>
            <Post/>
        </section>
    )
}

export default MyPosts