import { Cell } from "../Cell.ts";
import { Colors } from "../Colors.ts";
import { Figure, FigureNames } from "./Figure.ts";
import blackLogo from '../../images/black-king.png'
import whiteLogo from '../../images/white-king.png'

export class King extends Figure{
    constructor(color: Colors, cell: Cell){
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING;
    }

    canMove(target: Cell): Boolean {
        if (!super.canMove(target)) {
            return false
        }
        const dx = Math.abs(this.cell.x - target.x)
        const dy = Math.abs(this.cell.y - target.y)
        return (dx === 1 && dy === 1) || (dx === 1 && dy === 0) || (dx === 0 && dy === 1)
    }
}