import React from 'react'
import classes from './NewsData.module.css'

class NewsData extends React.Component {
    render() {
        return (
            <div className={classes.news_data}>
                Where
            </div>
        )
    }
}

export default NewsData

// Функциональная компонента
/*
const NewsData: React.FC = () => {
    return (
        <div className={classes.news_data}>
            Where
        </div>
    )
}
 */