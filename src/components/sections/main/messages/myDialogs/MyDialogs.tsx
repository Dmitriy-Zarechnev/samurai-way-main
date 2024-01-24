import React from 'react'
import classes from './MyDialogs.module.css'
import {FriendsListDataType} from '../../../../../redux/redux-store'
import FriendsList from '../../../../friendsList/FriendsList'


class MyDialogs extends React.Component<{ dialogsData: Array<FriendsListDataType> }> {
    render() {
        return (
            <ul className={classes.my_dialogs}>
                <h3 className={classes.my_dialogs__header}>Dialogs</h3>
                <FriendsList friendsList={this.props.dialogsData} navlink={'messages'}/>
            </ul>
        )
    }
}

export default MyDialogs
// Функциональная компонента
/*
const MyDialogs: React.FC<{ dialogsData: Array<FriendsListDataType> }> = ({dialogsData}) => {
    return (
        <ul className={classes.my_dialogs}>
            <h3 className={classes.my_dialogs__header}>Dialogs</h3>
            <FriendsList friendsList={dialogsData} navlink={'messages'}/>
        </ul>
    )
}
 */