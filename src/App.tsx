import React from 'react'
import './App.css'
import Header from './components/header/Header'
import NavbarLeft from './components/navBarLeft/NavbarLeft'
import Profile from './components/profile/Profile'
import NavbarRight from './components/navBarRight/NavbarRight'
import Footer from './components/footer/Footer'

function App() {
    return (
        <div className={'app-body'}>
            <div className={'app-wrapper'}>
                <div className={'app-header'}>
                    <div className={'app-container'}>
                        <Header/>
                    </div>
                </div>
                <section className={'app-main'}>
                    <NavbarLeft/>
                    <Profile/>
                    <NavbarRight/>
                </section>
                <div className={'app-footer'}>
                    <div className={'app-container'}>
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
