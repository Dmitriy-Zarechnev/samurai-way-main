import React from 'react'
import {Post} from './post/Post'
import S from './MyPosts.module.css'
import {PostsDataType} from '../../../../../redux/profile-reducer'
import {FormTwoInputs, InputsDataType} from '../../../../common/formTwoInputs/FormTwoInputs'

// Типизация
type MyPostsPropsType = {
    posts: Array<PostsDataType>
    addPost: (header: string, text: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    const onSubmitTwoForms = (data: InputsDataType) => {
        props.addPost(data.header, data.text)
    }

    return (
        <div className={S.my_posts}>
            <h3 className={S.my_posts__header}>My posts</h3>
            <FormTwoInputs onSubmitTwoForms={onSubmitTwoForms}/>

            <Post postsData={props.posts}/>
        </div>
    )
}
