import React from 'react'
import classes from './ProfileInfo.module.css'
import profImg from '../../../../../assets/images/prof.png'

const ProfileInfo: React.FC = () => {
    return (
        <div className={classes.prof}>
            <img className={classes.img} src={profImg} alt={'mainLogo'}/>
            <p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam modi nam neque nobis officia quas quasi, repudiandae suscipit voluptatibus?</p>
        </div>
    )
}

export default ProfileInfo