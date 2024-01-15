import React, {ChangeEvent} from 'react'
import Post from './post/Post'
import classes from './MyPosts.module.css'
import {ActionType, ProfilePageWithoutFriendPropsType} from '../../../../../redux/state'
import {addPostCreator, updateNewPostTextCreator} from '../../../../../redux/profile-reducer'


const MyPosts: React.FC<ProfilePageWithoutFriendPropsType> = (props) => {

    const onClickAddNewPostHandler = () => {
        props.dispatch(addPostCreator() as ActionType)
    }


    let postValue: string
    let headerValue: string
    const onChangePostInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        headerValue = e.currentTarget.value

        props.dispatch(updateNewPostTextCreator(headerValue, postValue) as ActionType)
    }

    const onChangePostTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        postValue = e.currentTarget.value

        props.dispatch(updateNewPostTextCreator(headerValue, postValue) as ActionType)
    }


    return (
        <div className={classes.my_posts}>
            <h3 className={classes.my_posts__header}>My posts</h3>

            <div className={classes.my_posts__new_post}>

                <label htmlFor="headerAddPost" className={classes.my_posts__input_label}>Post's Header</label>
                <input
                    onChange={onChangePostInputHandler}
                    value={props.newPost[0]}
                    className={classes.my_posts__input}
                    type="text"
                    placeholder={'Write your post\'s Header ...'}/>

                <textarea
                    onChange={onChangePostTextAreaHandler}
                    value={props.newPost[1]}
                    className={classes.my_posts__textarea}
                    placeholder={'Your Post begins here ...'}
                />

                <button
                    onClick={onClickAddNewPostHandler}
                    className={classes.my_posts__button}>
                    Add new post
                </button>
            </div>

            <Post postsData={props.postsData}/>
        </div>
    )
}

export default MyPosts