import { Cell } from "../Cell.ts";
import { Colors } from "../Colors.ts";
import { Figure, FigureNames } from "./Figure.ts";
import blackLogo from '../../images/black-rook.png'
import whiteLogo from '../../images/white-rook.png'

export class Rook extends Figure{
    constructor(color: Colors, cell: Cell){
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.ROOK;
    }

    canMove(target: Cell): Boolean {
        if (!super.canMove(target)){
            return false
        }
        if (this.cell.isEmptyVertical(target)){
            return true
        }
        if (this.cell.isEmptyHorizontal(target)){
            return true
        }
        return false
    }
}