import React from 'react'
import NavbarLeft from '../navBarLeft/NavbarLeft'
import classes from './Main.module.css'
import Dialogs from '../dialogs/Dialogs'
import NavbarRight from '../navBarRight/NavbarRight'

const Main: React.FC = () => {
    return (
        <main className={classes.app_main}>
            <NavbarLeft/>

            {/*<div className={classes.content}>*/}
            {/*    <Profile/>*/}
            {/*</div>*/}

            <div className={classes.content}>
                <Dialogs/>
            </div>

            <NavbarRight/>
        </main>
    )
}

export default Main