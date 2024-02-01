import React from 'react'
import S from './Preloader.module.css'
import preLoader from '../../../assets/images/loader.svg'


export const Preloader = (props: { isFetching: boolean }) => {
    return (
        <div className={props.isFetching ? S.preloader_box : ''}>
            {props.isFetching && <img className={S.preloader} src={preLoader} alt={'Fetching Image Should Be Here'}/>}
        </div>
    )
}

