import React from 'react'
import classes from './News.module.css'
import NewsData from './newsData/NewsData'
import NewsSideBar from './newsSideBar/NewsSideBar'

class News extends React.Component {
    render() {
        return (
            <section className={classes.news}>
                <h2 className={classes.news__header}>News</h2>
                <NewsData/>
                <NewsSideBar/>
            </section>
        )
    }
}

export default News

// Функциональная компонента
/*
const News: React.FC = () => {
    return (
        <section className={classes.news}>
            <h2 className={classes.news__header}>News</h2>
            <NewsData/>
            <NewsSideBar/>
        </section>
    )
}
 */