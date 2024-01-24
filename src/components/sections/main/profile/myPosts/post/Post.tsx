import React from 'react'
import classes from './Post.module.css'
import {PostsDataType} from '../../../../../../redux/redux-store'

class Post extends React.Component<{ postsData: Array<PostsDataType> }> {

    render() {
        return (
            <div className={classes.post}>
                {this.props.postsData.map((el: PostsDataType) => {
                    return (
                        <div className={classes.post__item} key={el.id}>
                            <h4 className={classes.post__item_header}>{el.header}</h4>
                            <span className={classes.post__item_message}>{el.message}</span>
                            <img className={classes.post__item_img} src={el.src} alt="picture"/>
                            <span className={classes.post__item_likes}>
                            {el.likesCount} likes
                        </span>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default Post

// Функциональная компонента
/* const Post: React.FC<{ postsData: Array<PostsDataType> }> = ({postsData}) => {
    return (
        <div className={classes.post}>
            {postsData.map((el: PostsDataType) => {
                return (
                    <div className={classes.post__item} key={el.id}>
                        <h4 className={classes.post__item_header}>{el.header}</h4>
                        <span className={classes.post__item_message}>{el.message}</span>
                        <img className={classes.post__item_img} src={el.src} alt="picture"/>
                        <span className={classes.post__item_likes}>
                            {el.likesCount} likes
                        </span>
                    </div>
                )
            })}
        </div>
    )
}
 */