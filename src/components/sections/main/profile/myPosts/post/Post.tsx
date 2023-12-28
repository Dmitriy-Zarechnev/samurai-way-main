import React from 'react'
import classes from './Post.module.css'
import {PostsDataType} from '../../../../../../redux/state'



const Post: React.FC<{ postsData: Array<PostsDataType> }> = (props: { postsData: Array<PostsDataType> }) => {
    return (
        <div className={classes.post}>
            {props.postsData.map((el: PostsDataType) => {
                return (
                    <div key={el.id}>
                        <h4>{el.header}</h4>
                        <img src={el.src} alt="picture"/>
                        <span className={classes.item}>{el.message}</span>
                        <div>
                            {el.likesCount} likes
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Post