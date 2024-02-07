import React from 'react'
import S from './Contacts.module.css'
import {ContactsPropsType} from '../../../types/entities'



export const Contacts = (props: ContactsPropsType) => {
    return (
        <a href={props.href}>
            <img className={S.profile__contacts_img}
                 src={props.src}
                 alt={props.alt}
            />
        </a>
    )
}

