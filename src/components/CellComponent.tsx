import React, {FC} from 'react'
import { Cell } from '../models/Cell.ts';

interface CellProps {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void;
}

const CellCopmonent: FC<CellProps> = ({cell, selected, click}) => {
    return (
        <div 
            onClick={() => click(cell)} 
            className={['cell', cell.color, selected ? "selected" : ""].join(' ') }
            style={{background: cell.available && cell.figure ? 'blue' : ''}}
        >
            {cell.available && !cell.figure && <div className={"available"}></div>}
            {cell.figure?.logo && <img src={cell.figure.logo} alt=''/> }
        </div>
    );
}
 
export default CellCopmonent;