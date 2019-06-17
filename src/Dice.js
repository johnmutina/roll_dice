import React, { Component } from 'react';

class Dice extends Component {
    render(){
        return (
            <div>
                <h2>{this.props.val}</h2>
            </div>
        )
    }
}

export default Dice;