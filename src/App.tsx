import React from 'react'
import './App.css'
import Header from './components/Header'
import NavbarLeft from './components/NavbarLeft'
import Profile from './components/Profile'
import NavbarRight from './components/NavbarRight'

function App() {
    return (
        <div className={'app-body'}>
            <div className={'app-wrapper'}>
                <Header/>
                <NavbarLeft/>
                <Profile/>
                <NavbarRight/>
            </div>
        </div>
    )
}

export default App
