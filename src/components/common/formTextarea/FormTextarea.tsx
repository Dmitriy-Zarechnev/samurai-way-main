import React from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import S from './FormTextArea.module.css'
import {Button} from '../button/Button'


type FormTextareaPropsType = {
    type: string,
    onSubmitTextArea: (text: string) => void,
}


export const FormTextarea = (props: FormTextareaPropsType) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<{ TextArea: string }>()

    const onSubmit: SubmitHandler<{ TextArea: string }> = (data) => {
        console.log(data.TextArea)
        props.onSubmitTextArea(data.TextArea)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={S.wrapper}>

            <label className={S.label} htmlFor={props.type}>New {props.type}</label>
            <textarea id={props.type}
                      placeholder={`Your ${props.type} begins here ...`}
                      {...register('TextArea', {required: true})}
                      className={`${S.textarea} ${errors.TextArea ? S.errorClass : ''}`}
            />

            {<span className={`${S.span} ${errors.TextArea ? S.errorDisplay : S.spanDisplay}`}>
                    {props.type} field is required
                </span>}

            <Button name={`Send new ${props.type}`}/>
        </form>
    )
}


