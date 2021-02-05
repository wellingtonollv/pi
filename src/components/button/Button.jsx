import React from 'react'
import './Button.scss'

export default class button extends React.Component {
    render() {
        return (
            <button className={"button"}> {this.props.name}</button>
        )
    }
}