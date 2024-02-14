import React from 'react'
import S from './Pagination.module.css'


// Типизация
type PaginationPropsType = {
    currentArray: Array<number>
    onPageChanged: (currentPage: number) => void
    currentPage: number
}

export const Pagination = (props: PaginationPropsType) => {
    return (
        <>
            {props.currentArray.map(el => {
                return (
                    <span key={el} className={`${S.page} ${props.currentPage === el ? S.selected_page : S.page_number}`}
                          onClick={() => {
                              props.onPageChanged(el)
                          }}
                    >
                        {el}
                    </span>
                )
            })}
        </>
    )
}

