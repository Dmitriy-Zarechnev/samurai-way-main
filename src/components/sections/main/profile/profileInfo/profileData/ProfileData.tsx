import React, {ChangeEvent} from 'react'
import S from './ProfileData.module.css'
import {ProfileStatusWithHooks} from '../../../../../common/profileStatus/ProfileStatusWithHooks'
import sam from '../../../../../../assets/images/AvatarDefault.webp'
import {Contacts} from '../../../../../common/contacts/Contacts'
import {ProfileInfoType} from '../../../../../../redux/reducers/profile-reducer'
import {Button} from '../../../../../common/button/Button'

type ProfileDataPropsType = {
    profileInfo: ProfileInfoType,
    status: string,
    updateStatus: (status: string) => void,
    isOwner: boolean,
    failMessage: string,
    savePhoto: (file: File) => void,
    goToEditMode: () => void
}

export const ProfileData = React.memo((props: ProfileDataPropsType) => {

    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.files && props.savePhoto(e.target.files[0])
    }

    return (
        <div className={S.profile}>
            <div className={S.profile__box}>
                <div className={S.profile__left}>
                    <p className={S.profile__full_name}>
                        {props.profileInfo.fullName}
                    </p>
                    <ProfileStatusWithHooks status={props.status}
                                            updateStatus={props.updateStatus}/>

                    <p className={S.profile_work__text}>
                        {props.profileInfo.lookingForAJob
                            ? `${props.profileInfo.lookingForAJobDescription}😜`
                            : 'I am not looking a new job 😎'}
                    </p>
                    {props.isOwner
                        && <Button name={'Edit'}
                                   onClick={props.goToEditMode}
                                   additionalClass={S.edit_btn}/>
                    }

                </div>
                <div className={S.profile__right}>
                    <div>
                        <img className={S.profile__img}
                             src={props.profileInfo.photos.large || sam}
                             alt={`${props.profileInfo.fullName} - avatar should be here`}
                        />

                        {props.isOwner && <>
                            <label htmlFor="image" className={S.btn_Input}>Your Avatar</label>
                            <input id={'image'}
                                   className={S.fileInput}
                                   type="file"
                                   onChange={mainPhotoSelected}/>
                        </>
                        }
                    </div>
                    <span className={S.fail_message}>{props.failMessage}</span>
                </div>
            </div>
            <div className={S.profile__contacts}>
                {props.profileInfo.contacts.facebook && <Contacts href={props.profileInfo.contacts.facebook} iconId={'faceBook'}/>}
                {props.profileInfo.contacts.website && <Contacts href={props.profileInfo.contacts.website} iconId={'website'}/>}
                {props.profileInfo.contacts.vk && <Contacts href={props.profileInfo.contacts.vk} iconId={'VK'}/>}
                {props.profileInfo.contacts.twitter && <Contacts href={props.profileInfo.contacts.twitter} iconId={'twitter'}/>}
                {props.profileInfo.contacts.instagram && <Contacts href={props.profileInfo.contacts.instagram} iconId={'instagram'}/>}
                {props.profileInfo.contacts.youtube && <Contacts href={props.profileInfo.contacts.youtube} iconId={'youtube'}/>}
                {props.profileInfo.contacts.github && <Contacts href={props.profileInfo.contacts.github} iconId={'gitHub'}/>}
                {props.profileInfo.contacts.mainLink && <Contacts href={props.profileInfo.contacts.mainLink} iconId={'mainLink'}/>}
            </div>
        </div>
    )
})

