import React from 'react'
import Post from './post/Post'
import classes from './MyPosts.module.css'
import {PostsDataType} from '../../../../../redux/state'

const MyPosts: React.FC<{ postsData: Array<PostsDataType> }> = (props: { postsData: Array<PostsDataType> }) => {
    return (
        <div className={classes.my_posts}>
            <h3 className={classes.my_posts__header}>My posts</h3>
            <div className={classes.my_posts__new_post}>
                <textarea className={classes.my_posts__textarea}></textarea>
                <button className={classes.my_posts__button}>Add new post</button>
            </div>
            <Post postsData={props.postsData}/>
        </div>
    )
}

export default MyPosts