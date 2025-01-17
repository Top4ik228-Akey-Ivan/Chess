import { Cell } from "../Cell.ts";
import { Colors } from "../Colors.ts";
import { Figure, FigureNames } from "./Figure.ts";
import blackLogo from '../../images/black-bishop.png'
import whiteLogo from '../../images/white-bishop.png'

export class Bishop extends Figure{
    constructor(color: Colors, cell: Cell){
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.BISHOP;
    }

    canMove(target: Cell): Boolean {
        if (!super.canMove(target)){
            return false
        }
        if (this.cell.isEmptyDiagonal(target)) {
            return true
        }
        return false
    }
}