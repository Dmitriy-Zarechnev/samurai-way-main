import React from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import S from './LogIn.module.css'

type Inputs = {
    LogIn: string
    Password: string
    Remember: string
}
const VarObj = {
    logIn: 'LogIn',
    password: 'Password',
    remember: 'Remember',
    errorMessage: 'field is required',
    placeHolderMessage: 'Write down your'
} as const

export const LogIn = () => {

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: {errors}
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        reset()
    }

    //console.log(watch(VarObj.logIn)) // watch input value by passing the name of it
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={S.formWrapper}>
            <div className={S.labelInput}>
                {/* register your input into the hook by invoking the "register" function */}
                <label className={S.label} htmlFor={VarObj.logIn}>{VarObj.logIn}</label>
                <input type={'text'} id={VarObj.logIn}
                       placeholder={`${VarObj.placeHolderMessage} ${VarObj.logIn}`}
                       {...register(VarObj.logIn, {required: true})}
                       className={`${S.input} ${errors.Password ? S.errorClass : ''}`}
                />
                {/* errors will return when field validation fails  */}
                {<span className={`${S.span} ${errors.Password ? S.errorDisplay : S.spanDisplay}`}>
                    {VarObj.logIn} {VarObj.errorMessage}
                </span>}
            </div>

            <div className={S.labelInput}>
                {/* include validation with required or other standard HTML validation rules */}
                <label className={S.label} htmlFor={VarObj.password}>{VarObj.password}</label>
                <input type={'password'} id={VarObj.password}
                       placeholder={`${VarObj.placeHolderMessage} ${VarObj.password}`}
                       {...register(VarObj.password, {required: true})}
                       className={`${S.input} ${errors.Password ? S.errorClass : ''}`}
                />
                {/* errors will return when field validation fails  */}
                {<span className={`${S.span} ${errors.Password ? S.errorDisplay : S.spanDisplay}`}>
                    {VarObj.password} {VarObj.errorMessage}
                </span>}
            </div>

            <div className={S.checkBox}>
                <input className={S.inputCheck}
                       id={VarObj.remember}
                       type={'checkbox'}
                       {...register(VarObj.remember)}
                />
                <label className={S.labelCheck} htmlFor={'remember'}>Remember Me</label>
            </div>

            <button className={S.submit}>Send</button>
        </form>
    )
}

