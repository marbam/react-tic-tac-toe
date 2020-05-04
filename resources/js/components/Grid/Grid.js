import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Grid.css';

class Grid extends Component {
    constructor () {
        super();
        this.state = {
            squares: [
                {position: 1, player: 'white', filled: false},
                {position: 2, player: 'white', filled: false},
                {position: 3, player: 'white', filled: false},
                {position: 4, player: 'white', filled: false},
                {position: 5, player: 'white', filled: false},
                {position: 6, player: 'white', filled: false},
                {position: 7, player: 'white', filled: false},
                {position: 8, player: 'white', filled: false},
                {position: 9, player: 'white', filled: false},
            ],
            countFilled: 0
        }
        this.takeTurn = this.takeTurn.bind(this);
        this.checkWinner = this.checkWinner.bind(this);

    }

    takeTurn(square, index) {
        if (!square.filled && !this.props.gameOver) {
            let newSquare = {position: square.position, player: this.props.player.toLowerCase(), filled:true}
            let squares = this.state.squares;
            squares[index] = newSquare;
            let filled = this.state.countFilled+1;
            this.setState({
                squares: squares,
                countFilled: filled
            });
            let winner = this.checkWinner(filled);
            this.props.turnCallback(filled, winner);
        }
    }

    checkWinner(filled) {
        var arrayGrid = [];
        this.state.squares.map((square, index) =>
            arrayGrid[index+1] = square.player
        )

        if (arrayGrid[1] != "white") {
            let player = arrayGrid[1];
            if ((arrayGrid[1] == arrayGrid[2]) && (arrayGrid[2] == arrayGrid[3])) {
                console.log('top row');
                return player;
            } else if ((arrayGrid[1] == arrayGrid[4]) && (arrayGrid[4] == arrayGrid[7])) {
                console.log('left column');
                return player;
            } else if ((arrayGrid[1] == arrayGrid[5]) && (arrayGrid[5] == arrayGrid[9])) {
                console.log('top left diagonal');
                return player;
            }
        }

        if (arrayGrid[2] != "white") {
            let player = arrayGrid[2];
            if ((arrayGrid[2] == arrayGrid[5]) && (arrayGrid[5] == arrayGrid[8])) {
                console.log('middle column');
                return player;
            }
        }

        if (arrayGrid[3] != "white") {
            let player = arrayGrid[3];
            if ((arrayGrid[3] == arrayGrid[6]) && (arrayGrid[6] == arrayGrid[9])) {
                console.log('right column');
                return player;
            } else if ((arrayGrid[3] == arrayGrid[5]) && (arrayGrid[5] == arrayGrid[7])) {
                console.log('top right diagonal');
                return player;
            }
        }

        if (arrayGrid[4] != "white") {
            let player = arrayGrid[4];
            if ((arrayGrid[4] == arrayGrid[5]) && (arrayGrid[5] == arrayGrid[6])) {
                console.log('middle row');
                return player;
            }
        }

        if (arrayGrid[7] != "white") {
            let player = arrayGrid[7];
            if ((arrayGrid[7] == arrayGrid[8]) && (arrayGrid[8] == arrayGrid[9])) {
                console.log('middle row');
                return player;
            }
        }

        if (filled == 9) {
            console.log('filled - draw?')
            return "DRAW";
        }

        console.log('not over');
        return null;
    }

    render() {
        return (
            <div id="grid">
                {this.state.squares.map((square, index)  =>
                    <div
                        className={`square ${square.player+'-square'}`}
                        onClick={() => this.takeTurn(square, index)}
                        key={index}
                    >
                    </div>
                )}
            </div>
        );

    }
}
export default Grid;