import React from 'react'
import classes from './Pagination.module.css'
import {PaginationPropsType} from '../../../../../redux/redux-store'


class Pagination extends React.Component <PaginationPropsType> {

    render() {
        return (
            <>
                {
                    this.props.currentArray.map(el => {
                        return (
                            <span key={el} className={this.props.currentPage === el ? classes.selected_page : classes.page_number}
                                  onClick={() => {
                                      this.props.onPageChanged(el)
                                  }}
                            >
                            {el} </span>
                        )
                    })
                }
            </>
        )
    }
}

export default Pagination