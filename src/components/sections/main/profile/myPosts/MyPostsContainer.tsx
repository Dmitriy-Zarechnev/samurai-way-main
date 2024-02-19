import {addPost} from '../../../../../redux/profile-reducer'
import {MyPosts} from './MyPosts'
import {connect} from 'react-redux'
import {AppRootState} from '../../../../../redux/redux-store'


const mapStateToProps = (state: AppRootState) => {
    return {
        posts: state.profilePage.postsData
    }
}

export const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)

