import React, { Component } from 'react';
import Dice from './Dice';

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            die1: 1,
            die2: 1
        }
        this.rollDice = this.rollDice.bind(this);
    }

    rollDice() {
        this.setState({
            die1: Math.floor(Math.random() * 6) + 1,
            die2: Math.floor(Math.random() * 6) + 1
        });
    }

    render(){
        return (
            <div>
                <h1>RollDice</h1>
                <Dice val={this.state.die1}/>
                <Dice val={this.state.die2}/>
                <button onClick={this.rollDice}>Roll dice!</button>
            </div>
        )
    }
}

export default RollDice;