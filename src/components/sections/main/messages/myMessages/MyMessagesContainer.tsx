import {MyMessages} from './MyMessages'
import {connect} from 'react-redux'
import {sendNewMessage, updateNewMessage} from '../../../../../redux/messages-reducer'
import {RootStateDataType} from '../../../../../types/entities'


let mapStateToProps = (state: RootStateDataType) => {
    return {
        messagesData: state.messagesPage.messagesData,
        newMessg: state.messagesPage.newMessg,
        isAuth:state.auth.isAuth
    }
}


export const MyMessagesContainer = connect(mapStateToProps,
    {updateNewMessage, sendNewMessage})(MyMessages)


