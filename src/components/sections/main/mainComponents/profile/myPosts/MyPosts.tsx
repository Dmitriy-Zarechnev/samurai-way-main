import React from 'react'
import Post from './post/Post'
import classes from './MyPosts.module.css'

const postsData = [
    {id: 1, header: 'Begin', message: 'It is my first post', likesCount: 25},
    {id: 2, header: 'Process', message: 'It is my second post', likesCount: 40},
    {id: 3, header: 'End', message: 'It is my third post', likesCount: 52}
]


const MyPosts: React.FC = () => {
    return (
        <div className={classes.my_Posts}>
            <h3>My posts</h3>

            <Post header={'Begin'} message="It is my first post" likesCount={25}/>
            <Post header={'Process'} message="It is my second post" likesCount={40}/>
            <Post header={'End'} message="It is my third post" likesCount={52}/>
        </div>
    )
}

export default MyPosts