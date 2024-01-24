import React, {ChangeEvent, KeyboardEvent} from 'react'
import Post from './post/Post'
import classes from './MyPosts.module.css'
import {MyPostsPropsType} from '../../../../../redux/redux-store'
import Button from '../../../../button/Button'
import TextArea from '../../../../textarea/TextArea'
import Input from '../../../../input/Input'


class MyPosts extends React.Component<MyPostsPropsType> {

    onClickAddNewPostHandler = () => {
        this.props.addPost()
    }

    //  --------------   Функции для input  -----------------
    onChangePostInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let headerValue = e.currentTarget.value
        this.props.updateNewPostInput(headerValue)
    }

    onKeyDownInputHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.ctrlKey && e.key === 'Enter' && this.onClickAddNewPostHandler()
    }
    //  ---------------------------------------------------------

    //  --------------   Функции для textarea  -----------------
    onChangePostTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let postValue = e.currentTarget.value
        this.props.updateNewPostTextArea(postValue)
    }

    onKeyDownTextAreaHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        e.ctrlKey && e.key === 'Enter' && this.onClickAddNewPostHandler()
    }

    //  ---------------------------------------------------------
    render() {
        return (
            <div className={classes.my_posts}>
                <h3 className={classes.my_posts__header}>My posts</h3>

                <div className={classes.my_posts__new_post}>

                    <label
                        htmlFor="headerAddPost"
                        className={classes.my_posts__input_label}>
                        Post's Header
                    </label>

                    <Input
                        id={'headerAddPost'}
                        type="text"
                        autoComplete={'off'}
                        value={this.props.newPost.newHeader}
                        onChange={this.onChangePostInputHandler}
                        onKeyDown={this.onKeyDownInputHandler}
                        placeholder={'Write your post\'s Header ...'}
                    />

                    <TextArea
                        placeholder={'Your Post begins here ...'}
                        value={this.props.newPost.newText}
                        onChange={this.onChangePostTextAreaHandler}
                        onKeyDown={this.onKeyDownTextAreaHandler}
                    />

                    <Button
                        name={'Add new post'}
                        onClick={this.onClickAddNewPostHandler}
                        disabled={!this.props.newPost.newHeader && !this.props.newPost.newText}
                    />
                </div>

                <Post postsData={this.props.posts}/>
            </div>
        )
    }
}

export default MyPosts

// Функциональная компонента
/*
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
        e.ctrlKey && e.key === 'Enter' && onClickAddNewPostHandler()
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

                <label
                    htmlFor="headerAddPost"
                    className={classes.my_posts__input_label}>
                    Post's Header
                </label>

                <Input
                    id={'headerAddPost'}
                    type="text"
                    autoComplete={'off'}
                    value={props.newPost.newHeader}
                    onChange={onChangePostInputHandler}
                    onKeyDown={onKeyDownInputHandler}
                    placeholder={'Write your post\'s Header ...'}
                />

                <TextArea
                    placeholder={'Your Post begins here ...'}
                    value={props.newPost.newText}
                    onChange={onChangePostTextAreaHandler}
                    onKeyDown={onKeyDownTextAreaHandler}
                />

                <Button
                    name={'Add new post'}
                    onClick={onClickAddNewPostHandler}
                    disabled={!props.newPost.newHeader && !props.newPost.newText}
                />
            </div>

            <Post postsData={props.posts}/>
        </div>
    )
}

 */