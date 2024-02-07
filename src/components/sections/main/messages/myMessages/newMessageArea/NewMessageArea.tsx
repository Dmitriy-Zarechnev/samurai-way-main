import React, {ChangeEvent, KeyboardEvent} from 'react'
import S from './NewMessageArea.module.css'
import {Button} from '../../../../../common/button/Button'
import {TextArea} from '../../../../../common/textarea/TextArea'
import {NewMessageAreaPropsType} from '../../../../../../types/entities'


export const NewMessageArea = (props: NewMessageAreaPropsType) => {

    const onClickAddNewMessHandler = () => {
        props.sendNewMessage()
    }

    const onChangeNewMessHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let textareaValue = e.currentTarget.value
        props.updateNewMessage(textareaValue)
    }

    const onKeyDownInputHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        e.ctrlKey && e.key === 'Enter' && onClickAddNewMessHandler()
    }

    return (
        <div className={S.new_message}>
            <TextArea
                value={props.newMessg}
                onChange={onChangeNewMessHandler}
                onKeyDown={onKeyDownInputHandler}
                placeholder={'Your message begins here ...'}
            />

            <Button
                name={'Send new message'}
                onClick={onClickAddNewMessHandler}
                disabled={!props.newMessg}
            />
        </div>
    )
}



