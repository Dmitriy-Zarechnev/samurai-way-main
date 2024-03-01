import React from 'react'
import S from './CheckInputForm.module.css'
import {UseFormRegister} from 'react-hook-form'

type CheckInputFormPropsType = {
    register: UseFormRegister<any>,
    devChecked: boolean,
    value: string,
    id: string,
    name: string
}


export const CheckInputForm = React.memo((props: CheckInputFormPropsType) => {
    return (
        <div className={S.checkBox}>
            <input className={S.inputCheck}
                   id={props.id}
                   type={'checkbox'}
                   defaultChecked={props.devChecked}
                   {...props.register(props.value)}
            />
            <label className={S.labelCheck} htmlFor={props.id}>{props.name}</label>
        </div>
    )
})

