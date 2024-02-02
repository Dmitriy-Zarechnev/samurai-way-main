import React from 'react'
import S from './ProfileInfo.module.css'
import {ProfileInfoType} from '../../../../../redux/redux-store'
import {Preloader} from '../../../../common/preloader/Preloader'
import git from '../../../../../assets/images/git.svg'
import vk from '../../../../../assets/images/vk.svg'


export const ProfileInfo = (props: { profileInfo: ProfileInfoType | null }) => {
    return (
        <>
            {props.profileInfo
                ? <div className={S.profile}>
                    <div className={S.profile__box}>
                        <div className={S.profile__left}>
                            <p className={S.profile__full_name}>
                                {props.profileInfo.fullName}
                            </p>
                            <p className={S.profile_info__text}>
                                {props.profileInfo.aboutMe}
                            </p>
                            <div className={S.profile__work_box}>
                                <p className={S.profile_info__text}>
                                    {props.profileInfo.lookingForAJobDescription}
                                </p>
                                <span>{props.profileInfo.lookingForAJob ? '🔍' : '🐱‍👤'}</span>
                            </div>
                        </div>
                        <img className={S.profile__img} src={props.profileInfo.photos.large} alt={`${props.profileInfo.fullName} - avatar should be here`}/>
                    </div>
                    <div className={S.profile__contacts}>
                        <a href={props.profileInfo.contacts.vk}><img className={S.profile__contacts_img} src={props.profileInfo.contacts.vk && vk} alt="vk"/>
                        </a>
                        <a href={props.profileInfo.contacts.github}>
                            <img className={S.profile__contacts_img} src={props.profileInfo.contacts.github && git} alt="git"/>
                        </a>
                    </div>
                </div>
                : <Preloader isFetching={!props.profileInfo}/>
            }


        </>
    )
}

