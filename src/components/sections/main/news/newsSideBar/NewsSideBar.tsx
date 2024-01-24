import React from 'react'
import classes from './NewsSideBar.module.css'

class NewsSideBar extends React.Component {
    render() {
        return (
            <div className={classes.news_sidebar}>
                Where
            </div>
        )
    }
}

export default NewsSideBar

// Функциональная компонента
/*
const NewsSideBar:React.FC = () => {
    return (
        <div className={classes.news_sidebar}>
            Where
        </div>
    )
}
 */