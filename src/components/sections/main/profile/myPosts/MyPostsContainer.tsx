import React from 'react'
import {ActionType, RootStateDataType} from '../../../../../redux/redux-store'
import {addPostCreator, updateNewPostInputCreator, updateNewPostTextAreaCreator} from '../../../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'


let mapStateToProps = (state: RootStateDataType) => {
    return {
        posts: state.profilePage.postsData,
        newPost: state.profilePage.newPost
    }
}

let mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
    return {
        updateNewPostTextArea: (postValue: string) => {
            dispatch(updateNewPostTextAreaCreator(postValue) as ActionType)
        },
        updateNewPostInput: (headerValue: string) => {
            dispatch(updateNewPostInputCreator(headerValue) as ActionType)
        },
        addPost: () => {
            dispatch(addPostCreator() as ActionType)

        }
    }
}

const MyPostsContainer= connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer