import React from 'react'
import Post from './post/Post'
import classes from './MyPosts.module.css'
import {PostsDataType} from '../../../../../redux/state'

const MyPosts: React.FC<{ postsData: Array<PostsDataType> }> = (props: { postsData: Array<PostsDataType> }) => {
    return (
        <div className={classes.my_Posts}>
            <h3>My posts</h3>
            <Post postsData={props.postsData}/>
        </div>
    )
}

export default MyPosts