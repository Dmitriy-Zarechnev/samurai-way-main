import React from 'react'
import S from './ProfileInfo.module.css'
import {ProfileInfoType} from '../../../../../redux/redux-store'


export const ProfileInfo = (props: { profileInfo: ProfileInfoType }) => {
    return (
        <div className={S.profile_info}>
            <img className={S.profile_info__img} src={props.profileInfo.src} alt={'mainLogo'}/>
            <p className={S.profile_info__text}>
                {props.profileInfo.info}
            </p>
        </div>
    )
}

