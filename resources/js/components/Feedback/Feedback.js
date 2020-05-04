import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Feedback extends Component {

    constructor () {
        super();
        // this.optionHandler = this.optionHandler.bind(this);
    }

    render() {
        return (
            <div>
                {!this.props.gameOver ?
                <p>It is {this.props.player}'s turn</p>
                : <p>The Game is Over!</p>}

            </div>
        );
    }
}

export default Feedback;