import {SubmitHandler, useForm} from 'react-hook-form'
import S from './FormTwoInputs.module.css'
import React from 'react'
import {Button} from '../button/Button'
import {InputForm} from '../inputForm/InputForm'
import {TextAreaForm} from '../textareaForm/TextAreaForm'

export type InputsDataType = {
    header: string
    post: string
}

type FormTwoInputsPropsType = {
    onSubmitTwoForms: (data: InputsDataType) => void
}

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
            <InputForm value={'header'} type={'text'} register={register} errors={errors.header}/>
            <TextAreaForm value={'post'} register={register} errors={errors.post}/>
            <Button name={'Add New Post'}/>
        </form>
    )
}
