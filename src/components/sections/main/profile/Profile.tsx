import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './myPosts/MyPosts'
import ProfileInfo from './profileInfo/ProfileInfo'
import { ProfilePageWithFuncPropsType} from '../../../../redux/state'
import FriendsSideBar from './friendsSideBar/FriendsSideBar'


const Profile: React.FC<ProfilePageWithFuncPropsType> = (props) => {
    return (
        <section className={classes.app_profile}>
            <ProfileInfo/>
            <MyPosts postsData={props.state.postsData}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
                     newPost={props.state.newPost}/>
            <FriendsSideBar friendsList={props.state.friendsList}/>
        </section>
    )
}

export default Profile