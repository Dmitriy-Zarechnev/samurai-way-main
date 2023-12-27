import React from 'react'
import classes from './News.module.css'
import NewsData from './newsData/NewsData'
import NewsSideBar from './newsSideBar/NewsSideBar'

const News: React.FC = () => {
    return (
        <section className={classes.news}>
            <h2 className={classes.header}>News</h2>
            <NewsData/>
            <NewsSideBar/>
        </section>
    )
}

export default News