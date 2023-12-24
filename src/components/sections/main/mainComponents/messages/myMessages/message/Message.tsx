import React from 'react'
import classes from './Message.module.css'


const Message: React.FC<{ message: string }> = (props: { message: string }) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

export default Message