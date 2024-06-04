const { Ship, gameBoard } = require('./main');

test('ship is initialized correctly', () => {
    const ship = new Ship("Carrier", 5);
    expect(ship.name).toBe("Carrier")
    expect(ship.length).toBe(5);
    expect(ship.damage).toBe(0);
    expect(ship.sunk).toBe(false);
});

test('the ship hit increments damage as expected', () => {
    const ship = new Ship("Carrier", 5);
    expect(ship.damage).toBe(0);
    ship.hit();
    expect(ship.damage).toBe(1);
    ship.hit();
    expect(ship.damage).toBe(2);
    ship.hit();
    expect(ship.damage).toBe(3);
    ship.hit();
    expect(ship.damage).toBe(4);
})
test('the ship doesnt sink before being hit length times', () => {
    const ship = new Ship("Carrier", 5);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.sunk).toBe(false);
})

test('the ship length works for various sizes', () => {
    const ship1 = new Ship("patrolBoat", 2);
    expect(ship1.length).toBe(2);
    const ship2 = new Ship("name", 4);
    expect(ship2.length).toBe(4);
    const ship3 = new Ship("name", 100);
    expect(ship3.length).toBe(100);
    const ship4 = new Ship("name", 0);
    expect(ship4.length).toBe(0);
})

test('this ship isSunk when the damage value reaches the length value', () => {
    const ship = new Ship("patrolBoat", 2);
    ship.hit()
    ship.hit()
    ship.isSunk();
    expect(ship.sunk).toBe(true);
})