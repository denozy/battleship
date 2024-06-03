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

// const battleship = new Ship(4);

// battleship.hit();
// battleship.hit();
// battleship.hit();
// battleship.isSunk();
// battleship.hit();
// battleship.isSunk();



module.exports = {
    Ship
};
