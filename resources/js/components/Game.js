import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Grid from './Grid/Grid';
import Feedback from './Feedback/Feedback';

class Game extends Component {
    constructor () {
        super();
        this.state = {
            player: 'Red',
            gameOver: false,
            winner: null
        }
        this.turnHandler = this.turnHandler.bind(this);
    }

    turnHandler(countFilled, winner) {

        let translate = [];
        translate['red'] = "Red";
        translate['blue'] = "Blue";
        translate['DRAW'] = "DRAW";

        if (!winner && winner != "DRAW") {
            let nextPlayer = 'Blue';
            if (this.state.player == 'Blue') {
                nextPlayer = "Red";
            }
            this.setState({
                player:nextPlayer
            })
        } else {
            this.setState({
                gameOver:true,
                winner: translate[winner]
            })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <Grid
                                    player={this.state.player}
                                    turnCallback={this.turnHandler}
                                />
                                <Feedback
                                    player={this.state.player}
                                    gameOver={this.state.gameOver}
                                    winner={this.state.winner}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;

if (document.getElementById('app')) {
    ReactDOM.render(<Game />, document.getElementById('app'));
}
