import React from 'react'
import classes from './Post.module.css'

export type PostsDataType = {
    id: number,
    header: string,
    src: string,
    message: string,
    likesCount: number
}

export type PostPropsType = {
    postsData: Array<PostsDataType>
}

const Post: React.FC<PostPropsType> = (props: PostPropsType) => {
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