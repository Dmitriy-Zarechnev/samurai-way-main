import React, {ChangeEvent, KeyboardEvent} from 'react'
import Post from './post/Post'
import classes from './MyPosts.module.css'
import {MyPostsPropsType} from '../../../../../redux/store'


const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const onClickAddNewPostHandler = () => {
        props.addPost()
    }

    //  --------------   Функции для input  -----------------
    const onChangePostInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let headerValue = e.currentTarget.value
        props.updateNewPostInput(headerValue)
    }

    const onKeyDownInputHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && onClickAddNewPostHandler()
    }
    //  ---------------------------------------------------------

    //  --------------   Функции для textarea  -----------------
    const onChangePostTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let postValue = e.currentTarget.value
        props.updateNewPostTextArea(postValue)
    }

    const onKeyDownTextAreaHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        e.ctrlKey && e.key === 'Enter' && onClickAddNewPostHandler()
    }
    //  ---------------------------------------------------------

    return (
        <div className={classes.my_posts}>
            <h3 className={classes.my_posts__header}>My posts</h3>

            <div className={classes.my_posts__new_post}>

                <label htmlFor="headerAddPost" className={classes.my_posts__input_label}>Post's Header</label>
                <input
                    onChange={onChangePostInputHandler}
                    onKeyDown={onKeyDownInputHandler}
                    value={props.newPost[0]}
                    className={classes.my_posts__input}
                    id={'headerAddPost'}
                    type="text"
                    placeholder={'Write your post\'s Header ...'}/>

                <textarea
                    onChange={onChangePostTextAreaHandler}
                    onKeyDown={onKeyDownTextAreaHandler}
                    value={props.newPost[1]}
                    className={classes.my_posts__textarea}
                    placeholder={'Your Post begins here ...'}
                />

                <button
                    disabled={!props.newPost[0] && !props.newPost[1]}
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