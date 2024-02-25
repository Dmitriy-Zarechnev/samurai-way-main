import React from 'react'
import S from './Contacts.module.css'


type ContactsPropsType = {
    href: string
    alt: string
    src: string
}

export const Contacts = React.memo((props: ContactsPropsType) => {
    return (
        <a href={props.href}>
            <img className={S.profile__contacts_img}
                 src={props.src}
                 alt={props.alt}
            />
        </a>
    )
})

