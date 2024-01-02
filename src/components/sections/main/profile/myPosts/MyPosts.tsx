import React, {useRef} from 'react'
import Post from './post/Post'
import classes from './MyPosts.module.css'
import {PostsDataType} from '../../../../../redux/state'

const MyPosts: React.FC<{ postsData: Array<PostsDataType>, addPost: (postHeader: string, postMessage: string) => void }> = (props) => {

    // Связали textarea, input и button
    const inputRefs = {
        newPostElHead: useRef<HTMLInputElement>(null),
        newPostEl: useRef<HTMLTextAreaElement>(null)
    }

    // Функция срабатывающая при клике
    const addNewPost = () => {
        const headerValue = inputRefs.newPostElHead.current?.value || ''
        const postValue = inputRefs.newPostEl.current?.value || ''
        props.addPost(headerValue, postValue)
    }


    return (
        <div className={classes.my_posts}>
            <h3 className={classes.my_posts__header}>My posts</h3>

            <div className={classes.my_posts__new_post}>

                <label htmlFor="headerAddPost" className={classes.my_posts__input_label}>Post's Header</label>
                <input ref={inputRefs.newPostElHead}
                       id={'headerAddPost'}
                       className={classes.my_posts__input}
                       type="text"
                       placeholder={'Write your post\'s Header ...'}/>

                <textarea ref={inputRefs.newPostEl}
                          className={classes.my_posts__textarea} placeholder={'Your Post begins here ...'}>
                </textarea>

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