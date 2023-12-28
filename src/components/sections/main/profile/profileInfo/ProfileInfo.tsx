import React from 'react'
import classes from './ProfileInfo.module.css'
import profImg from '../../../../../assets/images/prof.png'

const ProfileInfo: React.FC = () => {
    return (
        <div className={classes.profile_info}>
            <img className={classes.profile_info__img} src={profImg} alt={'mainLogo'}/>
            <p className={classes.profile_info__text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam modi nam neque nobis officia quas quasi, repudiandae suscipit voluptatibus?</p>
        </div>
    )
}

export default ProfileInfo