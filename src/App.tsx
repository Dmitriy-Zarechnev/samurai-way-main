import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/sections/main/Main'

function App() {
    return (
        <div className={'app-body'}>
            <div className={'app-wrapper'}>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </div>
    )
}


export default App
