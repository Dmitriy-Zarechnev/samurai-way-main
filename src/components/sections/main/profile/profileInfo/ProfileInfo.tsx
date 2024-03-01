import React, {useState} from 'react'
import {Preloader} from '../../../../common/preloader/Preloader'
import {ProfileInfoType} from '../../../../../redux/reducers/profile-reducer'
import {ProfileData} from './profileData/ProfileData'
import {ProfileDataForm} from './profileDataForm/ProfileDataForm'

type ProfileInfoPropsType = {
    profileInfo: ProfileInfoType,
    status: string,
    updateStatus: (status: string) => void,
    isOwner: boolean,
    savePhoto: (file: File) => void,
    failMessage: string
}

export const ProfileInfo = React.memo((props: ProfileInfoPropsType) => {

    const [editMode, setEditMode] = useState(false)

    const goToEditMode = () => {
        setEditMode(true)
    }

    return (
        props.profileInfo.userId
            ? editMode
                ? <ProfileDataForm profileInfo={props.profileInfo}/>
                : <ProfileData profileInfo={props.profileInfo}
                               status={props.status}
                               updateStatus={props.updateStatus}
                               isOwner={props.isOwner}
                               failMessage={props.failMessage}
                               savePhoto={props.savePhoto}
                               goToEditMode={goToEditMode}/>

            : <Preloader isFetching={!props.profileInfo.userId}/>
    )
})

