import React from 'react'
import classes from './ProfileInfo.module.css'
import {ProfileInfoType} from '../../../../../redux/redux-store'


const ProfileInfo: React.FC<{ profileInfo: Array<ProfileInfoType> }> = (props) => {

    return (
        <div className={classes.profile_info}>
            <img className={classes.profile_info__img} src={props.profileInfo[0].src} alt={'mainLogo'}/>
            <p className={classes.profile_info__text}>
                {props.profileInfo[0].info}
            </p>
        </div>
    )
}

export default ProfileInfo