import React from 'react'
import Post, {PostPropsType} from './post/Post'
import classes from './MyPosts.module.css'

const MyPosts: React.FC<PostPropsType> = (props: PostPropsType) => {
    return (
        <div className={classes.my_Posts}>
            <h3>My posts</h3>
            <Post postsData={props.postsData}/>
        </div>
    )
}

export default MyPosts