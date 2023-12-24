import React from 'react'
import classes from './Post.module.css'
import picture from '../../../../../../../assets/images/Cupcake.jpg'

export type PostsDataType = {
    id: number,
    header: string,
    message: string,
    likesCount: number
}


type PostPropsType = {
    postsData: Array<PostsDataType>
}

const Post: React.FC<PostPropsType> = (props: PostPropsType) => {
    return (
        <div className={classes.post}>
            {props.postsData.map((el: PostsDataType) => {
                return (
                    <div key={el.id}>
                        <h4>{el.header}</h4>
                        <img src={picture} alt="picture"/>
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