import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';
import './Dice.css';

class Dice extends Component {
    render(){
        let dieIcon = {
            1: faDiceOne,
            2: faDiceTwo,
            3: faDiceThree,
            4: faDiceFour,
            5: faDiceFive,
            6: faDiceSix
        }
        return (
            <div>
                <FontAwesomeIcon className="Dice-icon" icon={dieIcon[this.props.val]} />
            </div>
        )
    }
}

export default Dice;