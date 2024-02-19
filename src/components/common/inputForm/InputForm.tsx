import React from 'react'
import S from './InputForm.module.css'
import {FieldErrors, RegisterOptions} from 'react-hook-form'

type InputFormPropsType = {
    field: 'input' | 'textarea',
    value: string,
    defValue?: string,
    placeholder: string,
    register: (name: string, options?: RegisterOptions<Record<string, any>>) => void,
    errors: FieldErrors
}

export const InputForm = (props: InputFormPropsType) => {

    const {
        field: FieldComponent,
        value,
        defValue,
        placeholder,
        register,
        errors,
        ...restProps
    } = props
    return (
        <div>
            <label className={S.label} htmlFor={value}>{value}</label>
            <FieldComponent type={'text'} id={value}
                            defaultValue={defValue || ''}
                            placeholder={placeholder || `Write your ${value}`}
                            {...register(value, {required: true})}
                            className={`${S.input} ${errors.value ? S.errorClass : ''}`}
            />

            {<span className={`${S.span} ${errors.value ? S.errorDisplay : S.spanDisplay}`}>
                    {value} field is required
                </span>}
        </div>
    )
}

