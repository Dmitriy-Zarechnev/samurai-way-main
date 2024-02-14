import {MyMessages} from './MyMessages'
import {connect} from 'react-redux'
import {sendNewMessage, updateNewMessage} from '../../../../../redux/messages-reducer'
import {AppRootState} from '../../../../../redux/redux-store'
import {withAuthRedirect} from '../../../../../hoc/withAuthRedirect'


export type MyMessagesPropsType =
    MyMessagesMapStateToProps &
    MyMessagesMapDispatchToProps

type MyMessagesMapStateToProps = ReturnType<typeof mapStateToProps>

type MyMessagesMapDispatchToProps = {
    updateNewMessage: (textareaValue: string) => void
    sendNewMessage: () => void
}


let mapStateToProps = (state: AppRootState) => {
    return {
        messagesData: state.messagesPage.messagesData,
        newMessg: state.messagesPage.newMessg
    }
}


export const MyMessagesContainer = withAuthRedirect(connect(mapStateToProps,
    {updateNewMessage, sendNewMessage})(MyMessages))


