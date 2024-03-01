import React, {ChangeEvent} from 'react'
import S from './ProfileInfo.module.css'
import {Preloader} from '../../../../common/preloader/Preloader'
import git from '../../../../../assets/images/GitHubContacts.svg'
import vk from '../../../../../assets/images/VKContacts.svg'
import {Contacts} from '../../../../common/contacts/Contacts'
import sam from '../../../../../assets/images/AvatarDefault.webp'
import {ProfileInfoType} from '../../../../../redux/reducers/profile-reducer'
import {ProfileStatusWithHooks} from '../../../../common/profileStatus/ProfileStatusWithHooks'

type ProfileInfoPropsType = {
    profileInfo: ProfileInfoType,
    status: string,
    updateStatus: (status: string) => void,
    isOwner: boolean,
    savePhoto: (file: File) => void,
    failMessage: string
}

export const ProfileInfo = React.memo((props: ProfileInfoPropsType) => {


    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.files && props.savePhoto(e.target.files[0])
    }

    return (
        <>
            {props.profileInfo.userId
                ? <div className={S.profile}>
                    <div className={S.profile__box}>
                        <div className={S.profile__left}>
                            <p className={S.profile__full_name}>
                                {props.profileInfo.fullName}
                            </p>
                            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

                            <div className={S.profile__work_box}>
                                <p className={S.profile_work__text}>
                                    {props.profileInfo.lookingForAJobDescription}
                                </p>
                                <span className={S.profile_work__text}>
                                    {props.profileInfo.lookingForAJob ? '🔍' : '🐱‍👤'}
                                </span>
                            </div>
                        </div>
                        <div className={S.profile__right}>
                            <img className={S.profile__img}
                                 src={props.profileInfo.photos.large || sam}
                                 alt={`${props.profileInfo.fullName} - avatar should be here`}
                            />
                            {props.isOwner && <input type="file" onChange={mainPhotoSelected}/>}
                            <span className={S.fail_message}>{props.failMessage}</span>
                        </div>
                    </div>
                    <div className={S.profile__contacts}>
                        <Contacts href={props.profileInfo.contacts.vk} alt={'vk-logo'} src={vk}/>
                        <Contacts href={props.profileInfo.contacts.github} alt={'git-logo'} src={git}/>
                    </div>
                </div>
                : <Preloader isFetching={!props.profileInfo.userId}/>
            }
        </>
    )
})

