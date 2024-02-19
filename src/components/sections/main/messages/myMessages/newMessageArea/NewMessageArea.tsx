import React from 'react'
import S from './NewMessageArea.module.css'
import {FormTextarea} from '../../../../../common/formTextarea/FormTextarea'

export type NewMessageAreaPropsType = {
    sendNewMessage: (text: string) => void
}

export const NewMessageArea = (props: NewMessageAreaPropsType) => {

    // const onClickAddNewMessHandler = () => {
    //     props.sendNewMessage()
    // }

    // const onChangeNewMessHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let textareaValue = e.currentTarget.value
    //     props.updateNewMessage(textareaValue)
    // }
    //
    // const onKeyDownInputHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    //     e.ctrlKey && e.key === 'Enter' && onClickAddNewMessHandler()
    // }

    const onSubmitTextArea = (text: string) => {
        debugger
        return props.sendNewMessage(text)
    }

    return (
        <div className={S.new_message}>
            <FormTextarea type={'message'} onSubmitTextArea={onSubmitTextArea}/>
        </div>
    )
}



