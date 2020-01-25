import React from 'react';
import "./Die.css"

class Die extends React.Component {
    render() {
        const { face } = this.props
        return (
            <i className={`Die fas fa-dice-${face}`}></i >

        )
    }
}
export default Die