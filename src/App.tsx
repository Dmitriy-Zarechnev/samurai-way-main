import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import {BrowserRouter} from 'react-router-dom'
import MainComponents, {MessagesPropsType} from './components/sections/main/mainComponents/MainComponents'
import NavbarLeft from './components/sections/main/navBarLeft/NavbarLeft'


function App(props: MessagesPropsType) {
    return (
        <BrowserRouter>
            <div className={'app-body'}>
                <Header/>
                <NavbarLeft/>
                <MainComponents postsData={props.postsData} dialogsData={props.dialogsData} messagesData={props.messagesData}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App
