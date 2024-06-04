class Ship {
    constructor(name, length) {
        this.name = name;
        this.length = length;
        this.damage = 0;
        this.sunk = false;
        this.location = [];
    }

    hit(){
        return this.damage++
    }

    isSunk() {
        if(this.damage === this.length) {
            this.sunk = true;
            console.log("Ship is sunk");
        }
    }
}

class Square {
    constructor() {
        this.index = 0;
        this.coordinate = null;
        this.hit = false;
        this.miss = false;
        this.ship = false;
    }

}

class gameBoard {
    constructor(){
        this.width = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        this.height = ['1','2','3','4','5','6','7','8','9','10'];
        this.board = [];
        this.allShipsSunk = false;
    }

    createBoard() {
        for(let col of this.width) {
            for (let row of this.height) {
                this.board.push(`${col}${row}`)
            }
        }
        return this.board
    }

    placeShip(ship, coordinate, orientation){
        

    }

    print(){
        console.log(this.board);
    }

}

const myBoard = new gameBoard();
myBoard.createBoard();
myBoard.print();


// myBoard.placeShip(ships.carrier, 'A1', 'horizontal');


// myBoard.modifyBoard('A1', ships['battleship'].name);
// myBoard.print();




module.exports = {
    Ship,
    gameBoard
};
