import {MyDialogs} from './MyDialogs'
import {connect} from 'react-redux'
import {RootStateDataType} from '../../../../../types/entities'



let mapStateToProps = (state: RootStateDataType) => {
    return {
        dialogsData: state.friendsListData
    }
}


export const MyDialogsContainer = connect(mapStateToProps, {})(MyDialogs)
