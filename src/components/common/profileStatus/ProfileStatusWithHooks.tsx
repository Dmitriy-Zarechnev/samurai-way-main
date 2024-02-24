import React, {ChangeEvent, useEffect, useState} from 'react'
import S from './ProfileStatus.module.css'


// Типизация
type ProfileStatusWithHooksPropsType = {
    status: string
    updateStatus: (status: string) => void
}


export const ProfileStatusWithHooks = (props: ProfileStatusWithHooksPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [newStatus, setNewStatus] = useState<string>(props.status)

    useEffect(() => {
        setNewStatus(props.status)
    }, [props.status])


    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(newStatus)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStatus(e.currentTarget.value)
    }

    return (
        <div className={S.profile_info__text}>
            {editMode
                ? <input onChange={onStatusChange} value={newStatus} onBlur={deactivateEditMode} autoFocus/>
                : <span onDoubleClick={activateEditMode}>{props.status || 'No status'}</span>}
        </div>
    )
}

