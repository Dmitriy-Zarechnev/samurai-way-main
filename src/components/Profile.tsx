import React from 'react'

const Profile = () => {
    return (
        <section className={'content'}>
            <img src={'https://img.freepik.com/premium-photo/christmas-lantern-snow-evening-christmas_158863-8456.jpg'} alt={'winter_picture'}/>
            <div>
                <img src={'https://www.southernliving.com/thmb/rLKpmjRRj7OG-R161ze_7kheuRE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cardinalgettyimages-166624332-2000-594ed447c14f46afa3c16a710a1a3849.jpg'} alt={'mainLogo'}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae eligendi ex mollitia odio rerum sapiente sit ullam ut, vitae!</p>
            </div>

            <div>
                <h3>My posts</h3>
            </div>
        </section>
    )
}

export default Profile