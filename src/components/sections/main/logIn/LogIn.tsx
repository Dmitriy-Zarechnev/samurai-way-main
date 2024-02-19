import React from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import S from './LogIn.module.css'
import {LogInType} from '../../../../redux/auth-reducer'

export type Inputs = {
    LogIn: string
    Password: string
    Remember: boolean
}

type LogInPropsType = {
    onSubmitForm: (data: Inputs) => void
    logIn: LogInType
}

const VarObj = {
    logIn: 'LogIn',
    password: 'Password',
    remember: 'Remember',
    errorMessage: 'field is required',
    placeHolderMessage: 'Write down your'
} as const

export const LogIn = (props: LogInPropsType) => {

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: {errors}
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        props.onSubmitForm(data)
        reset()
    }

    //console.log(watch(VarObj.logIn)) // watch input value by passing the name of it
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={S.formWrapper}>
            <div className={S.labelInput}>

                <label className={S.label} htmlFor={VarObj.logIn}>{VarObj.logIn}</label>
                <input type={'text'} id={VarObj.logIn}
                       defaultValue={props.logIn.email}
                       placeholder={`${VarObj.placeHolderMessage} ${VarObj.logIn}`}
                       {...register(VarObj.logIn, {required: true})}
                       className={`${S.input} ${errors.LogIn ? S.errorClass : ''}`}
                />

                {<span className={`${S.span} ${errors.LogIn ? S.errorDisplay : S.spanDisplay}`}>
                    {VarObj.logIn} {VarObj.errorMessage}
                </span>}
            </div>

            <div className={S.labelInput}>

                <label className={S.label} htmlFor={VarObj.password}>{VarObj.password}</label>
                <input type={'password'} id={VarObj.password}
                       defaultValue={props.logIn.password}
                       placeholder={`${VarObj.placeHolderMessage} ${VarObj.password}`}
                       {...register(VarObj.password, {required: true})}
                       className={`${S.input} ${errors.Password ? S.errorClass : ''}`}
                />

                {<span className={`${S.span} ${errors.Password ? S.errorDisplay : S.spanDisplay}`}>
                    {VarObj.password} {VarObj.errorMessage}
                </span>}
            </div>

            <div className={S.checkBox}>
                <input className={S.inputCheck}
                       id={VarObj.remember}

                       checked={props.logIn.rememberMe}
                       type={'checkbox'}
                       {...register(VarObj.remember)}
                />
                <label className={S.labelCheck} htmlFor={'remember'}>Remember Me</label>
            </div>

            <button className={S.submit}>Send</button>
        </form>
    )
}

