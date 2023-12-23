import React from 'react'
import classes from './Messages.module.css'

const Messages: React.FC = () => {
    return (
        <section className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <h3 className={classes.dialogs_header}>Dialogs</h3>
                <div className={classes.dialog}> 1</div>
                <div className={`${classes.dialog} ${classes.active}`}> 2</div>
                <div className={classes.dialog}> 3</div>
                <div className={classes.dialog}> 4</div>
                <div className={classes.dialog}> 5</div>
                <div className={classes.dialog}> 6</div>
                <div className={classes.dialog}> 7</div>
            </div>

            <div className={classes.messages}>
                <h3 className={classes.messages_header}>Messages</h3>
                <div className={classes.message}>hello</div>
                <div className={classes.message}>hi</div>
                <div className={classes.message}>qwerty</div>
                <div className={classes.message}>food</div>
                <div className={classes.message}>drink</div>
            </div>
        </section>
    )
}

export default Messages