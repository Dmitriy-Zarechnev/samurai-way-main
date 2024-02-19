import {SubmitHandler, useForm} from 'react-hook-form'
import S from './FormTwoInputs.module.css'
import React from 'react'
import {Button} from '../button/Button'

export type InputsDataType = {
    header: string
    text: string
}

type FormTwoInputsPropsType = {
    onSubmitTwoForms: (data: InputsDataType) => void
}

const VarObj = {
    header: 'header',
    text: 'text',
    errorMessage: 'field is required',
    placeHolderMessage: 'Write down post\'s'
} as const

export const FormTwoInputs = (props: FormTwoInputsPropsType) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<InputsDataType>()

    const onSubmit: SubmitHandler<InputsDataType> = (data) => {
        props.onSubmitTwoForms(data)
        reset()
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={S.wrapper}>
            <div className={S.labelBox}>
                <label className={S.label} htmlFor={VarObj.header}>{VarObj.header}</label>
                <input type={'text'} id={VarObj.header}
                       placeholder={`${VarObj.placeHolderMessage} ${VarObj.header}`}
                       {...register(VarObj.header, {required: true})}
                       className={`${S.input} ${errors.header ? S.errorClass : ''}`}
                />
                {<span className={`${S.span} ${errors.header ? S.errorDisplay : S.spanDisplay}`}>
                    {VarObj.header} {VarObj.errorMessage}
                </span>}
            </div>

            <div className={S.labelBox}>
                <label className={S.label} htmlFor={VarObj.text}>{VarObj.text}</label>
                <textarea id={VarObj.text}
                          placeholder={`${VarObj.placeHolderMessage} ${VarObj.text}`}
                          {...register(VarObj.text, {required: true})}
                          className={`${S.textarea} ${errors.text ? S.errorClass : ''}`}
                />
                {<span className={`${S.span} ${errors.text ? S.errorDisplay : S.spanDisplay}`}>
                    {VarObj.text} {VarObj.errorMessage}
                </span>}
            </div>

            <Button name={'Add New Post'}/>
        </form>
    )
}
