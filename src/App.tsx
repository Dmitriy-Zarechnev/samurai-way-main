import React from 'react'
import './App.css'
import Header from './components/sections/header/Header'
import Footer from './components/sections/footer/Footer'
import {BrowserRouter} from 'react-router-dom'
import NavbarLeft from './components/sections/navBarLeft/NavbarLeft'
import Main from './components/sections/main/Main'

function App() {
    return (
        <BrowserRouter>
            <div className={'app-body'}>
                <Header/>
                <NavbarLeft/>
                <Main/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App
