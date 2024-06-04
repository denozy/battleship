class Ship {
    constructor(length) {
        this.length = length;
        this.damage = 0;
        this.sunk = false;
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

class gameBoard {
    constructor(){
        this.width = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        this.height = ['1','2','3','4','5','6','7','8','9','10'];
        this.board = {};
        this.shipLocation = false;
        this.missLocation = false;
        this.hitLocation = false;
        this.allShipsSunk = false;
    }

    createBoard() {
        for(let col of this.width) {
            for (let row of this.height) {
                this.board[`${col}${row}`] = null
            }
        }
        return this.board
    }

    createShips() {
        const carrier = new Ship(5);
        const battleship = new Ship(4);
        const cruiser = new Ship(3);
        const submarine = new Ship(3);
        const patrolBoat = new Ship(2);
        return {carrier, battleship, cruiser, submarine, patrolBoat};
    }

    placeShip(ship, coordinate, orientation){
        let shipPart = null;
        if(orientation === horizontal){
            shipPart = gameBoard[findIndex(target => target.value)]
            for(let i = 0; i<ship.length; i++){
                shipPart 
            }
        }
    }

    modifyBoard(key, value) {
        if (this.board.hasOwnProperty(key)){
            this.board[key] = value;
        } else {
            console.log(`key ${key} does not exist`);
        }
    }

    receiveAttack(col, row){
        const inputCol = col.toUpperCase();
        const inputRow = row.toString();
        const attacked = (inputCol+inputRow).toString();
        return attacked
    }

}

const myBoard = new gameBoard();
console.log(myBoard.createBoard());
console.log(myBoard.createShips());



//console.log(myBoard.receiveAttack('a', '1'));
// const battleship = new Ship(4);

// battleship.hit();
// battleship.hit();
// battleship.hit();
// battleship.isSunk();
// battleship.hit();
// battleship.isSunk();



module.exports = {
    Ship,
    gameBoard
};
