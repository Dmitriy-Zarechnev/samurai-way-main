import React from 'react'
import S from './ProfileInfo.module.css'
import {Preloader} from '../../../../common/preloader/Preloader'
import git from '../../../../../assets/images/git.svg'
import vk from '../../../../../assets/images/vk.svg'
import {Contacts} from '../../../../common/contacts/Contacts'
import sam from '../../../../../assets/images/sam.webp'
import {ProfileInfoType} from '../../../../../redux/profile-reducer'
import {ProfileStatus} from '../../../../common/ProfileStatus/ProfileStatus'


export const ProfileInfo = (props: { profileInfo: ProfileInfoType }) => {
    return (
        <>
            {props.profileInfo.userId
                ? <div className={S.profile}>
                    <div className={S.profile__box}>
                        <div className={S.profile__left}>
                            <p className={S.profile__full_name}>
                                {props.profileInfo.fullName}
                            </p>
                            <ProfileStatus status={props.profileInfo.aboutMe}/>

                            <div className={S.profile__work_box}>
                                <p className={S.profile_work__text}>
                                    {props.profileInfo.lookingForAJobDescription}
                                </p>
                                <span className={S.profile_work__text}>
                                    {props.profileInfo.lookingForAJob ? '🔍' : '🐱‍👤'}
                                </span>
                            </div>
                        </div>
                        <img className={S.profile__img}
                             src={props.profileInfo.photos.large ? props.profileInfo.photos.large : sam}
                             alt={`${props.profileInfo.fullName} - avatar should be here`}
                        />
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
}

