import React, {useRef} from 'react'
import Post from './post/Post'
import classes from './MyPosts.module.css'
import {ActionType, addPostActionCreator, ProfilePageWithoutFriendPropsType, updateNewPostTextActionCreator} from '../../../../../redux/state'


const MyPosts: React.FC<ProfilePageWithoutFriendPropsType> = (props) => {

    // Связали textarea, input и button
    const inputRefs = {
        newPostElHead: useRef<HTMLInputElement>(null),
        newPostElImg: useRef<HTMLInputElement>(null),
        newPostEl: useRef<HTMLTextAreaElement>(null)
    }

    // Функция срабатывающая при клике
    const addNewPost = () => {
        props.dispatch(addPostActionCreator() as ActionType)
    }

    // Функция срабатывающая при изменении
    let onPostChange = () => {
        let headerValue = inputRefs.newPostElHead.current?.value || ''
        let postValue = inputRefs.newPostEl.current?.value || ''

        props.dispatch(updateNewPostTextActionCreator(headerValue, postValue) as ActionType)
    }


    return (
        <div className={classes.my_posts}>
            <h3 className={classes.my_posts__header}>My posts</h3>

            <div className={classes.my_posts__new_post}>

                <label htmlFor="headerAddPost" className={classes.my_posts__input_label}>Post's Header</label>
                <input ref={inputRefs.newPostElHead}
                       id={'headerAddPost'}
                       onChange={onPostChange}
                       value={props.newPost[0]}
                       className={classes.my_posts__input}
                       type="text"
                       placeholder={'Write your post\'s Header ...'}/>

                <textarea ref={inputRefs.newPostEl}
                          onChange={onPostChange}
                          value={props.newPost[1]}
                          className={classes.my_posts__textarea}
                          placeholder={'Your Post begins here ...'}
                />

                <button
                    onClick={addNewPost}
                    className={classes.my_posts__button}>
                    Add new post
                </button>
            </div>

            <Post postsData={props.postsData}/>
        </div>
    )
}

export default MyPosts