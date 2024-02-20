import React from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import S from './LogIn.module.css'
import {LogInType} from '../../../../redux/auth-reducer'
import {InputForm} from '../../../common/inputForm/InputForm'
import {Button} from '../../../common/button/Button'
import {Redirect} from 'react-router-dom'

export type Inputs = {
    LogIn: string
    Password: string
    Remember: boolean
}

type LogInPropsType = {
    onSubmitForm: (data: Inputs) => void
    logIn: LogInType
    isAuth: boolean
}


export const LogIn = (props: LogInPropsType) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        debugger
        props.onSubmitForm(data)
        reset()
    }

    // Redirect  на страницу профиля, при успешной авторизации
    if (props.isAuth) return <Redirect to={'/profile'}/>

    return (
        <>
            <h2 className={S.header}>YOUR PARADISE BEGINS HERE</h2>
            <form onSubmit={handleSubmit(onSubmit)} className={S.formWrapper}>

                <InputForm value={'LogIn'}
                           errors={errors.LogIn}
                           register={register}
                           type={'email'}
                           defValue={props.logIn.email}
                />

                <InputForm value={'Password'}
                           errors={errors.Password}
                           register={register}
                           type={'password'}
                           defValue={props.logIn.password}
                />

                <div className={S.checkBox}>
                    <input className={S.inputCheck}
                           id={'Remember'}
                           type={'checkbox'}
                           defaultChecked={props.logIn.rememberMe}
                           {...register('Remember')}
                    />
                    <label className={S.labelCheck} htmlFor={'remember'}>Remember Me</label>
                </div>

                <Button name={'Sing In'}/>
            </form>
        </>
    )
}

