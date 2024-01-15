import React from 'react'
import {ActionType, RootStateDataType, StoreType} from '../../../../../redux/store'
import {addPostCreator, updateNewPostInputCreator, updateNewPostTextAreaCreator} from '../../../../../redux/profile-reducer'
import MyPosts from './MyPosts'


const MyPostsContainer: React.FC<{ store: StoreType }> = ({store}) => {

    let state: RootStateDataType = store.getState()

    const onClickAddNewPost = () => {
        store.dispatch(addPostCreator() as ActionType)
    }

    const onChangePostInput = (headerValue: string) => {
        store.dispatch(updateNewPostInputCreator(headerValue) as ActionType)
    }

    const onChangePostTextArea = (postValue: string) => {
        store.dispatch(updateNewPostTextAreaCreator(postValue) as ActionType)
    }

    return (
        <MyPosts
            posts={state.profilePage.postsData}
            newPost={state.profilePage.newPost}
            updateNewPostTextArea={onChangePostTextArea}
            updateNewPostInput={onChangePostInput}
            addPost={onClickAddNewPost}/>
    )
}

export default MyPostsContainer