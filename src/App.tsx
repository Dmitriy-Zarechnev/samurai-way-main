import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import {BrowserRouter} from 'react-router-dom'
import NavbarLeft from './components/sections/navBarLeft/NavbarLeft'
import Main from './components/sections/main/Main'
import {SummaryStatePropsType} from './redux/state'


function App(props: SummaryStatePropsType) {
    return (
        <BrowserRouter>

            <div className={'app-body'}>
                <Header/>
                <NavbarLeft/>
                <Main state={props.state} addPost={props.addPost} sendMessg={props.sendMessg}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App
