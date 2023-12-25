import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/sections/main/Main'
import {BrowserRouter} from 'react-router-dom'
import {MessagesPropsType} from './components/sections/main/mainComponents/MainComponents'


function App(props: MessagesPropsType) {
    return (
        <BrowserRouter>
            <div className={'app-body'}>
                <div className={'app-wrapper'}>
                    <Header/>
                    <Main postsData={props.postsData} dialogsData={props.dialogsData} messagesData={props.messagesData}/>
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
