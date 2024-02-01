import {RootStateDataType} from '../../../../../redux/redux-store'
import {addPost, updateNewPostInput, updateNewPostTextArea} from '../../../../../redux/profile-reducer'
import {MyPosts} from './MyPosts'
import {connect} from 'react-redux'


let mapStateToProps = (state: RootStateDataType) => {
    return {
        posts: state.profilePage.postsData,
        newPost: state.profilePage.newPost
    }
}

export const MyPostsContainer = connect(mapStateToProps, {
    updateNewPostTextArea, updateNewPostInput, addPost
})(MyPosts)

