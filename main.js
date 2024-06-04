class Ship {
    constructor(name, length) {
        this.name = name;
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
        this.createBoard();
    }

    createBoard() {
        for(let col of this.width) {
            for (let row of this.height) {
                this.board[`${col}${row}`] = null
            }
        }
        return this.board
    }

    getKeys(){
        const keys = Object.keys(this.board);
        return keys;
    }

    // createShips() {
    //     const ships = {
    //     carrier:new Ship("Carrier", 5),
    //     battleship:new Ship("Battleship", 4),
    //     cruiser:new Ship("Cruiser", 3),
    //     submarine:new Ship("Submarine", 3),
    //     patrolBoat:new Ship("Patrolboat", 2)
    //     }
    //     return ships;
    // }

    placeShip(ship, coordinate, orientation){
        const keys = this.getKeys();
        const currentIndex = keys.indexOf(coordinate);

        if(currentIndex === -1){
            console.log('invalid starting coordinate');
            return;
        }

        let increment = 1;
        if (orientation === 'vertical'){
            increment = 10;
        }

        for (let i = 0; i < ship.length; i++){
            const currentCoordinate = keys[currentIndex + i * increment];
            if(!currentCoordinate || this.board[currentCoordinate] !== null) {
                console.log('invalid ship placement');
                return;
            }
        }

        for(let i = 0; i < ship.length; i++) {
            const currentCoordinate = keys[currentIndex + i * increment];
            this.modifyBoard(currentCoordinate, ship.name);
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

    print(){
        console.log(this.board);
    }

}

const myBoard = new gameBoard();
myBoard.createBoard();
const carrier = new Ship("Carrier", 5);
myBoard.placeShip(carrier, 'A1', 'vertical');
myBoard.print();


// myBoard.placeShip(ships.carrier, 'A1', 'horizontal');


// myBoard.modifyBoard('A1', ships['battleship'].name);
// myBoard.print();


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
