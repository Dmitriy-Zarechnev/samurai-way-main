import React from 'react'
import classes from './Post.module.css'
import picture from '../../../../../assets/images/Cupcake.jpg'

const Post = () => {
    return (
        <div className={classes.post}>
            <img src={picture} alt="picture"/>
            <span className={classes.item}>Post 1</span>
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post