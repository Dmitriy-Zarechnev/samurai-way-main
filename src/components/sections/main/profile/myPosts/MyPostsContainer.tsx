import {ActionsTypes, RootStateDataType} from '../../../../../redux/redux-store'
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

let mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>) => {
    return {
        updateNewPostTextArea: (postValue: string) => {
            dispatch(updateNewPostTextAreaAC(postValue))
        },
        updateNewPostInput: (headerValue: string) => {
            dispatch(updateNewPostInputAC(headerValue))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer