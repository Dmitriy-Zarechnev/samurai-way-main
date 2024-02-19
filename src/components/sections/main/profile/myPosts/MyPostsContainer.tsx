import {addPost, updateNewPostInput, updateNewPostTextArea} from '../../../../../redux/profile-reducer'
import {MyPosts} from './MyPosts'
import {connect} from 'react-redux'
import {AppRootState} from '../../../../../redux/redux-store'


let mapStateToProps = (state: AppRootState) => {
    return {
        posts: state.profilePage.postsData,
        newPost: state.profilePage.newPost
    }
}

export const MyPostsContainer = connect(mapStateToProps, {
    updateNewPostTextArea, updateNewPostInput, addPost
})(MyPosts)

