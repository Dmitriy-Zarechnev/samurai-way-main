import React from 'react'
import {ActionType, RootStateDataType} from '../../../../../redux/store'
import {addPostCreator, updateNewPostInputCreator, updateNewPostTextAreaCreator} from '../../../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import {connect} from 'react-redux'

// Удалить после 45 урока
/*
const MyPostsContainer: React.FC = () => {

    // let state: RootStateDataType = store.getState()

    // const onClickAddNewPost = () => {
    //     store.dispatch(addPostCreator() as ActionType)
    // }
    //
    // const onChangePostInput = (headerValue: string) => {
    //     store.dispatch(updateNewPostInputCreator(headerValue) as ActionType)
    // }
    //
    // const onChangePostTextArea = (postValue: string) => {
    //     store.dispatch(updateNewPostTextAreaCreator(postValue) as ActionType)
    // }

    return (
        <StoreContext.Consumer>
            {(store) => {

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
            }}
        </StoreContext.Consumer>
    )
}

 */
// --------------------------

let mapStateToProps = (state: RootStateDataType) => {
    return {
        posts: state.profilePage.postsData,
        newPost: state.profilePage.newPost
    }
}

let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
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

const MyPostsContainer: React.FC = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer