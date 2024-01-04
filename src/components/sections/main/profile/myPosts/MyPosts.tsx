import React, {useRef} from 'react'
import Post from './post/Post'
import classes from './MyPosts.module.css'
import {ProfilePageWithoutFriendPropsType} from '../../../../../redux/state'

const MyPosts: React.FC<ProfilePageWithoutFriendPropsType> = (props) => {

    // Связали textarea, input и button
    const inputRefs = {
        newPostElHead: useRef<HTMLInputElement>(null),
        newPostElImg: useRef<HTMLInputElement>(null),
        newPostEl: useRef<HTMLTextAreaElement>(null)
    }

    // Функция срабатывающая при клике
    const addNewPost = () => {
        props.addPost()
    }

    // Функция срабатывающая при изменении
    let onPostChange = () => {
        let headerValue: string = inputRefs.newPostElHead.current?.value || ''
        let postValue: string = inputRefs.newPostEl.current?.value || ''
        let imgValue: string = inputRefs.newPostElImg.current?.value || ''

        props.updateNewPostText(headerValue, postValue,imgValue)
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

                <label htmlFor="image" className={classes.my_posts__btn_Input}>Your image</label>
                <input ref={inputRefs.newPostElImg}
                       type="file"
                       id={'image'}
                       name="image"
                       accept="image/*"
                       className={classes.my_posts__fileInput}
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