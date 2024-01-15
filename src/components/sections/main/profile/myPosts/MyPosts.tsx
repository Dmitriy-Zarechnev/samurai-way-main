import React, {ChangeEvent} from 'react'
import Post from './post/Post'
import classes from './MyPosts.module.css'
import {PostsDataType} from '../../../../../redux/store'


type MyPostsPropsType = {
    posts: Array<PostsDataType>,
    newPost: Array<string>,
    updateNewPostTextArea: (postValue: string) => void
    updateNewPostInput: (headerValue: string) => void
    addPost: () => void
}


const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const onClickAddNewPostHandler = () => {
        props.addPost()
    }

    const onChangePostInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let headerValue = e.currentTarget.value
        props.updateNewPostInput(headerValue)
    }

    const onChangePostTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let postValue = e.currentTarget.value
        props.updateNewPostTextArea(postValue)
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
                    id={'headerAddPost'}
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

            <Post postsData={props.posts}/>
        </div>
    )
}

export default MyPosts