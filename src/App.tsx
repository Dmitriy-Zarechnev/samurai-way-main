import React from 'react'
import S from './App.module.css'
import {Footer} from './components/sections/footer/Footer'
import {NavbarLeft} from './components/sections/navBarLeft/NavbarLeft'
import {Main} from './components/sections/main/Main'
import {HeaderContainer} from './components/sections/header/HeaderContainer'
import {connect} from 'react-redux'
import {initializeApp} from './redux/reducers/app-reducer'
import {AppRootState} from './redux/redux-store'
import {Preloader} from './components/common/preloader/Preloader'
import {getInitialized} from './redux/selectors/app-selector'


// Типизация
type AppPropsType =
    AppMapDispatchToProps & AppMapStateToProps

type AppMapStateToProps = ReturnType<typeof mapStateToProps>
type AppMapDispatchToProps = {
    initializeApp: () => void
}




class App extends React.PureComponent<AppPropsType> {

    //  -------- Авторизация на сервере ----------------
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        // Показываем preloader  до полной загрузки
        if (!this.props.initialized) return <Preloader isFetching={!this.props.initialized}/>

        // Показываем основные компоненты после полной загрузки
        return (
            <div className={S.app_body}>
                <HeaderContainer/>
                <NavbarLeft/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state: AppRootState) => {
    return {
        initialized: getInitialized(state)
    }
}


export const AppConnect =
    connect(mapStateToProps, {initializeApp})(App)


