import React from 'react'
import S from './App.module.css'
import {Footer} from './components/sections/footer/Footer'
import {BrowserRouter} from 'react-router-dom'
import {NavbarLeft} from './components/sections/navBarLeft/NavbarLeft'
import {Main} from './components/sections/main/Main'
import {HeaderContainer} from './components/sections/header/HeaderContainer'

function App() {
    return (
        <BrowserRouter>
            <div className={S.app_body}>
                <HeaderContainer/>
                <NavbarLeft/>
                <Main/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App


