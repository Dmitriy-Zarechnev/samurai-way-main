import React from 'react'
import classes from './ProfileInfo.module.css'

const ProfileInfo: React.FC = () => {
    return (
        <div>
            <img className={classes.img} src={'https://www.southernliving.com/thmb/rLKpmjRRj7OG-R161ze_7kheuRE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cardinalgettyimages-166624332-2000-594ed447c14f46afa3c16a710a1a3849.jpg'} alt={'mainLogo'}/>
            <p className={classes.text} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae eligendi ex mollitia odio rerum sapiente sit ullam ut, vitae!</p>
        </div>
    )
}

export default ProfileInfo