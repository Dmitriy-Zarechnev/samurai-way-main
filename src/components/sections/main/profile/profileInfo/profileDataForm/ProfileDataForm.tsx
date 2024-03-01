import React from 'react'
import {ProfileInfoType} from '../../../../../../redux/reducers/profile-reducer'

type ProfileDataFormPropsType = {
    profileInfo: ProfileInfoType,
}

export const ProfileDataForm = React.memo((props: ProfileDataFormPropsType) => {
    return (
        <div>
            hello
        </div>
    )
})

