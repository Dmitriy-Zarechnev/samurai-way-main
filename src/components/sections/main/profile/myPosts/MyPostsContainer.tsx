import {ActionType, RootStateDataType} from '../../../../../redux/redux-store'
import {addPostAC, updateNewPostInputAC, updateNewPostTextAreaAC} from '../../../../../redux/profile-reducer'
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
            dispatch(updateNewPostTextAreaAC(postValue) as ActionType)
        },
        updateNewPostInput: (headerValue: string) => {
            dispatch(updateNewPostInputAC(headerValue) as ActionType)
        },
        addPost: () => {
            dispatch(addPostAC() as ActionType)
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer