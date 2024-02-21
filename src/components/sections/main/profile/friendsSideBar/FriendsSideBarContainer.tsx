import {FriendsSideBar} from './FriendsSideBar'
import {connect} from 'react-redux'
import {AppRootState} from '../../../../../redux/redux-store'
import {friendsSuperSelector} from '../../../../../redux/selectors/friendlist-selector'
import React from 'react'
import {compose} from 'redux'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {goToPage} from '../../../../../redux/reducers/profile-reducer'

// Типизация
export type FriendsSideBarAPIComponentPropsType =
    FriendsSideBarAPIComponentMapDispatchToProps &
    FriendsSideBarAPIComponentMapStateToProps &
    RouteComponentProps<{ userId: string }>

type FriendsSideBarAPIComponentMapStateToProps = ReturnType<typeof mapStateToProps>

type FriendsSideBarAPIComponentMapDispatchToProps = {
    goToPage: (id: string) => void
}

class FriendsSideBarAPIComponent extends React.Component<FriendsSideBarAPIComponentPropsType> {

    //  -------- Загрузка страницы пользователя при клике на ссылку ----------------
    componentDidMount() {
        this.props.goToPage(this.props.match.params.userId)
    }

    //  -------- Загрузка страницы пользователя при клике на ссылку ----------------
    componentDidUpdate() {
        this.props.goToPage(this.props.match.params.userId)
    }


    render() {
        return (
            <FriendsSideBar friendsSuperList={this.props.friendsSuperList}/>
        )
    }
}

let mapStateToProps = (state: AppRootState) => {
    return {
        // friendsList: state.friendsListData,
        friendsSuperList: friendsSuperSelector(state)
    }
}

export const FriendsSideBarContainer = compose(
    withRouter,
    connect(mapStateToProps, {goToPage}))
(FriendsSideBarAPIComponent) as React.FC

