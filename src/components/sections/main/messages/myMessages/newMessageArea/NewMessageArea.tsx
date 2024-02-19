import React from 'react'
import S from './NewMessageArea.module.css'
import {FormTextarea} from '../../../../../common/formTextarea/FormTextarea'

export type NewMessageAreaPropsType = {
    sendNewMessage: (text: string) => void
}

export const NewMessageArea = (props: NewMessageAreaPropsType) => {

    const onSubmitTextArea = (text: string) => {
        return props.sendNewMessage(text)
    }

    return (
        <div className={S.new_message}>
            <FormTextarea type={'message'}
                          onSubmitTextArea={onSubmitTextArea}
            />
        </div>
    )
}



