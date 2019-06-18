import React, { Component } from 'react';
import Dice from './Dice';
import './RollDice.css';

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
            <div className="RollDice">
                <h1>RollDice</h1>
                <div className="RollDice-box">
                    <Dice val={this.state.die1}/>
                    <Dice val={this.state.die2}/>
                </div>
                <button onClick={this.rollDice}>Roll dice!</button>
            </div>
        )
    }
}

export default RollDice;