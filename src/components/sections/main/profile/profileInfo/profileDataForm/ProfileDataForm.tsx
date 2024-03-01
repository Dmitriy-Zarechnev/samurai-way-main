import React from 'react'
import {ProfileInfoType} from '../../../../../../redux/reducers/profile-reducer'
import {SubmitHandler, useForm} from 'react-hook-form'
import {Button} from '../../../../../common/button/Button'
import S from './ProfileDataForm.module.css'
import {ProfileInputForm} from '../../../../../common/profileInputForm/ProfileInputForm'
import {CheckInputForm} from '../../../../../common/checkInputForm/CheckInputForm'


type ProfileDataFormPropsType = {
    profileInfo: ProfileInfoType,
    onSubmitProfileDataForm: (data: ProfileInfoType) => void,
    closeEditMode: () => void
}

export const ProfileDataForm = React.memo((props: ProfileDataFormPropsType) => {

    const {
        register,
        handleSubmit,
        reset
    } = useForm<ProfileInfoType>()

    const onSubmit: SubmitHandler<ProfileInfoType> = (data) => {
        props.onSubmitProfileDataForm(data)
        props.closeEditMode()
        reset()

        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={S.wrapper}>
            <div className={S.info_wrapper}>
                <ProfileInputForm
                    register={register}
                    value={'aboutMe'}
                    id={'aboutMe'}
                    defValue={props.profileInfo.aboutMe}
                    name={'About Me'}/>

                <ProfileInputForm
                    register={register}
                    value={'lookingForAJobDescription'}
                    id={'lookingForAJobDescription'}
                    defValue={props.profileInfo.lookingForAJobDescription}
                    name={'Skills Description'}/>

                <ProfileInputForm
                    register={register}
                    value={'fullName'}
                    id={'fullName'}
                    defValue={props.profileInfo.fullName}
                    name={'Full Name'}/>

                <CheckInputForm
                    id={'lookingForAJob'}
                    name={'Looking Job'}
                    value={'lookingForAJob'}
                    register={register}
                    devChecked={props.profileInfo.lookingForAJob}/>
            </div>

            <div className={S.contacts_wrapper}>
                <h3 className={S.contacts_header}>Contacts</h3>

                <ProfileInputForm
                    register={register}
                    value={'contacts.facebook'}
                    id={'facebook'}
                    defValue={props.profileInfo.contacts.facebook}
                    name={'Facebook'}
                />

                <ProfileInputForm
                    register={register}
                    value={'contacts.website'}
                    id={'website'}
                    defValue={props.profileInfo.contacts.website}
                    name={'Website'}
                />

                <ProfileInputForm
                    register={register}
                    value={'contacts.vk'}
                    id={'vk'}
                    defValue={props.profileInfo.contacts.vk}
                    name={'VK'}
                />

                <ProfileInputForm
                    register={register}
                    value={'contacts.twitter'}
                    id={'twitter'}
                    defValue={props.profileInfo.contacts.twitter}
                    name={'Twitter'}
                />

                <ProfileInputForm
                    register={register}
                    value={'contacts.instagram'}
                    id={'instagram'}
                    defValue={props.profileInfo.contacts.instagram}
                    name={'Instagram'}
                />

                <ProfileInputForm
                    register={register}
                    value={'contacts.youtube'}
                    id={'youtube'}
                    defValue={props.profileInfo.contacts.youtube}
                    name={'Youtube'}
                />

                <ProfileInputForm
                    register={register}
                    value={'contacts.github'}
                    id={'github'}
                    defValue={props.profileInfo.contacts.github}
                    name={'Github'}
                />

                <ProfileInputForm
                    register={register}
                    value={'contacts.mainLink'}
                    id={'mainLink'}
                    defValue={props.profileInfo.contacts.mainLink}
                    name={'MainLink'}
                />
            </div>
            <Button name={'Save'}/>
        </form>
    )
})

