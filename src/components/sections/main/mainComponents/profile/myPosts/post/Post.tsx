import React from 'react'
import classes from './Post.module.css'
import picture from '../../../../../../../assets/images/Cupcake.jpg'

type PostPropsType = {
    message: string,
    likesCount: number
}

const Post: React.FC<PostPropsType> = (props: PostPropsType) => {
    return (
        <div className={classes.post}>
            <img src={picture} alt="picture"/>
            <span className={classes.item}>{props.message}</span>
            <div>
                <span>{props.likesCount} likes</span>
            </div>
        </div>
    )
}

export default Post