import React from 'react'
import logo from '../../../assets/images/logo.svg'
import S from './Header.module.css'
import {NavLink} from 'react-router-dom'
import {Button} from '../../common/button/Button'


// Типизация
type HeaderPropsType = {
    id: number | null
    email: string
    login: string
    isAuth: boolean
    logOut: () => void
}

export const Header = (props: HeaderPropsType) => {

    return (
        <header className={S.app_header}>

            <img src={logo} alt={'main_logo'}/>

            <div className={S.login_block}>
                {props.isAuth
                    ?
                    <div className={S.button_box}>
                        <span className={S.span}>{props.login}</span>
                        <Button name={'LogOut'} onClick={props.logOut}/>
                    </div>

                    : <NavLink to={'/login'}><Button name={'LogIn'}/></NavLink>}
            </div>
        </header>
    )
}


