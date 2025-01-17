import { Cell } from "../Cell.ts";
import { Colors } from "../Colors.ts";
import { Figure, FigureNames } from "./Figure.ts";
import blackLogo from '../../images/black-knight.png'
import whiteLogo from '../../images/white-knight.png'

export class Knight extends Figure{
    constructor(color: Colors, cell: Cell){
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KNIGHT;
    }
    
    canMove(target: Cell): Boolean {
        if (!super.canMove(target)){
            return false
        }
        const dx = Math.abs(this.cell.x - target.x)
        const dy = Math.abs(this.cell.y - target.y)
        return (dx === 1 && dy === 2) || (dx === 2 && dy === 1)

    }
}