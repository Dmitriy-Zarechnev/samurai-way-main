import React from 'react'
import S from './ProfileStatus.module.css'

// Типизация
type ProfileStatusPropsType = {
    status: string
}

type StateType = {
    editMode: boolean
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType, StateType> {

    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div className={S.profile_info__text}>
                {this.state.editMode
                    ? <input value={this.props.status} onBlur={this.deactivateEditMode.bind(this)} autoFocus/>
                    : <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>}
            </div>
        )
    }
}

