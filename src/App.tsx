import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import {BrowserRouter} from 'react-router-dom'
import Main, {MessagesPropsType} from './components/sections/mainComponents/Main'
import NavbarLeft from './components/sections/navBarLeft/NavbarLeft'


function App(props: MessagesPropsType) {
    return (
        <BrowserRouter>
            <div className={'app-body'}>
                <Header/>
                <NavbarLeft/>
                <Main postsData={props.postsData} dialogsData={props.dialogsData} messagesData={props.messagesData}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App
