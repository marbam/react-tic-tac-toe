import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Feedback extends Component {

    constructor () {
        super();
    }

    render() {

        const style = {marginTop: "20px"};
        return (
            <div style={style}>
                {!this.props.gameOver ?
                <p>It is {this.props.player}'s turn</p>
                : <p>The Game is Over!
                    <span> {this.props.winner && this.props.winner != "DRAW" ? ' The winner is '+this.props.winner : 'The game is a draw!'}</span>
                </p>}

            </div>
        );
    }
}

export default Feedback;