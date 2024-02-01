import React from 'react'
import S from './Post.module.css'
import {PostsDataType} from '../../../../../../redux/redux-store'

export const Post = (props: { postsData: PostsDataType[] }) => {
    return (
        <div className={S.post}>
            {props.postsData.map((el: PostsDataType) => {
                return (
                    <div className={S.post__item} key={el.id}>
                        <h4 className={S.post__item_header}>{el.header}</h4>
                        <span className={S.post__item_message}>{el.message}</span>
                        <img className={S.post__item_img} src={el.src} alt="picture"/>
                        <span className={S.post__item_likes}>
                            {el.likesCount} likes
                        </span>
                    </div>
                )
            })}
        </div>
    )
}


