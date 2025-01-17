import React from 'react';
import './App.css'
import BoardComponent from './components/BoardComponent.tsx';
import { Board } from './models/Board.ts';
import { Colors } from './models/Colors.ts';
import { Player } from './models/Player.ts';

function App() {
    const [board, setBoard] = React.useState(new Board())
    const [whitePlayer, setWhitePlayer] = React.useState(new Player(Colors.WHITE))
    const [blackPlayer, setBlackPlayer] = React.useState(new Player(Colors.BLACK))
    const [currentPlayer, setCurrentPlayer] = React.useState(null)

    React.useEffect(() => {
        restart()
        setCurrentPlayer(whitePlayer)
    }, [])

    function restart() {
        const newBoard = new Board();
        newBoard.initCells()
        newBoard.addFigures()
        setBoard(newBoard)
    }

    function swapPlayer() {
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
    }

    return (
        <div className="App">
            <BoardComponent 
            board={board} 
            setBoard={setBoard}
            swapPlayer={swapPlayer}
            currentPlayer={currentPlayer}/>
        </div>
    );
}

export default App;
