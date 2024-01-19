import React, {ChangeEvent, KeyboardEvent} from 'react'
import classes from './NewMessageArea.module.css'
import {NewMessageAreaPropsType} from '../../../../../../redux/redux-store'
import Button from '../../../../../button/Button'
import TextArea from '../../../../../textarea/TextArea'


const NewMessageArea: React.FC<NewMessageAreaPropsType> = (props) => {

    const onClickAddNewMessHandler = () => {
        props.sendNewMessage()
    }

    let onChangeNewMessHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let textareaValue = e.currentTarget.value
        props.updateNewMessage(textareaValue)
    }
    const onKeyDownInputHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        e.ctrlKey && e.key === 'Enter' && onClickAddNewMessHandler()
    }

    return (
        <div className={classes.new_message}>
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

export default NewMessageArea