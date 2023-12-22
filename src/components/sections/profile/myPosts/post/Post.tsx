import React from 'react'
import classes from './Post.module.css'
import picture from '../../../../../assets/images/Cupcake.jpg'

const Post = (props: { message: string }) => {
    return (
        <div className={classes.post}>
            <img src={picture} alt="picture"/>
            <span className={classes.item}>{props.message}</span>
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post