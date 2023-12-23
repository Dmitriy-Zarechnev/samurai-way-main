import React from 'react'
import classes from './Post.module.css'
import picture from '../../../../../../../assets/images/Cupcake.jpg'

const Post: React.FC<{ message: string, likesCount: number }> = (props: { message: string, likesCount: number }) => {
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