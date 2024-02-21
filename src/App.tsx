import React from 'react'
import S from './App.module.css'
import {Footer} from './components/sections/footer/Footer'
import {BrowserRouter} from 'react-router-dom'
import {NavbarLeft} from './components/sections/navBarLeft/NavbarLeft'
import {Main} from './components/sections/main/Main'
import {HeaderContainer} from './components/sections/header/HeaderContainer'
import {connect} from 'react-redux'
import {initializeApp} from './redux/app-reducer'


// Типизация
type AppPropsType =
    AppMapDispatchToProps
type AppMapDispatchToProps = {
    initializeApp: () => void
}

class App extends React.Component<AppPropsType> {

    //  -------- Авторизация на сервере ----------------
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
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
}

export const AppConnect =
    connect(null, {initializeApp})(App)


