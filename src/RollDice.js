import React from 'react';
import Die from './Die';

class RollDice extends React.Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }
    constructor(props) {
        super(props)
        this.state = {
            die1: 'one',
            die2: 'one'
        }
    }

    handleClick = (e) => {

    }
    render() {
        return (
            <div>
                <Die face={this.state.die1} />
                <Die face={this.state.die2} />
                <button onClick={this.handleClick}>Roll Dice!</button>
            </div>
        )
    }
}
export default RollDice