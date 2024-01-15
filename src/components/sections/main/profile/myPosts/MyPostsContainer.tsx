import React from 'react'
import {ActionType, ProfilePageWithoutFriendPropsType} from '../../../../../redux/store'
import {addPostCreator, updateNewPostInputCreator, updateNewPostTextAreaCreator} from '../../../../../redux/profile-reducer'
import MyPosts from './MyPosts'


const MyPostsContainer: React.FC<ProfilePageWithoutFriendPropsType> = (props) => {

    const onClickAddNewPost = () => {
        props.dispatch(addPostCreator() as ActionType)
    }

    const onChangePostInput = (headerValue: string) => {
        props.dispatch(updateNewPostInputCreator(headerValue) as ActionType)
    }

    const onChangePostTextArea = (postValue: string) => {
        props.dispatch(updateNewPostTextAreaCreator(postValue) as ActionType)
    }

    return (
        <MyPosts
            posts={props.postsData}
            newPost={props.newPost}
            updateNewPostTextArea={onChangePostTextArea}
            updateNewPostInput={onChangePostInput}
            addPost={onClickAddNewPost}/>
    )
}

export default MyPostsContainer