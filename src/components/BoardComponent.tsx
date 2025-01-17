/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC } from 'react'
import { Board } from '../models/Board';
import CellCopmonent from './CellComponent.tsx';
import { Cell } from '../models/Cell.ts';
import { Player } from '../models/Player.ts';

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
    currentPlayer: Player | null;
    swapPlayer: () => void;
}

const BoardComponent: FC<BoardProps> = ({ board, setBoard, swapPlayer, currentPlayer }) => {
    const [selectedCell, setSelectedCell] = React.useState<Cell | null>(null)

    React.useEffect(() => {
        highlightCells()
    }, [selectedCell])

    function click(cell: Cell) {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell)
            swapPlayer()
            setSelectedCell(null)
            updateBoard()
        } else {
            if (cell.figure?.color === currentPlayer?.color) {
                setSelectedCell(cell)
            }
        }
    }

    function highlightCells() {
        board.highlightCells(selectedCell)
        updateBoard()
    }


    function updateBoard() {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    return (
        <div>
            <h1>Текущий игрок: {currentPlayer?.color}</h1>
            <div className="board">
                {board.cells.map((row, index) =>
                    <React.Fragment key={index}>
                        {row.map(cell =>
                            <CellCopmonent
                                key={cell.id}
                                cell={cell}
                                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                                click={click} />
                        )}
                    </React.Fragment>
                )}
            </div>
        </div>
    );
}

export default BoardComponent;