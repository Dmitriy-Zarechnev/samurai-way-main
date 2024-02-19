import React from 'react'
import {MyMessages} from './MyMessages'
import {connect} from 'react-redux'
import {sendNewMessage} from '../../../../../redux/messages-reducer'
import {AppRootState} from '../../../../../redux/redux-store'
import {withAuthRedirect} from '../../../../../hoc/withAuthRedirect'
import {compose} from 'redux'



export type MyMessagesPropsType =
    MyMessagesMapStateToProps &
    MyMessagesMapDispatchToProps

type MyMessagesMapStateToProps = ReturnType<typeof mapStateToProps>

type MyMessagesMapDispatchToProps = {
    sendNewMessage: (text: string) => void
}


let mapStateToProps = (state: AppRootState) => {
    return {
        messagesData: state.messagesPage.messagesData
    }
}


export const MyMessagesContainer = compose(
    withAuthRedirect,
    connect(mapStateToProps, {sendNewMessage})
)(MyMessages) as React.FC


