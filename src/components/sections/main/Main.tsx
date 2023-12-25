import React from 'react'
import NavbarLeft from './navBarLeft/NavbarLeft'
import classes from './Main.module.css'
import MainComponents, {MessagesPropsType} from './mainComponents/MainComponents'

const Main: React.FC<MessagesPropsType> = (props: MessagesPropsType) => {
    return (
        <main className={classes.app_main}>
            <NavbarLeft/>
            <MainComponents postsData={props.postsData} dialogsData={props.dialogsData} messagesData={props.messagesData}/>
        </main>
    )
}

export default Main