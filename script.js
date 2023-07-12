//Spaceship class that holds the properties
class Spaceship {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }

//Attack method to attack the target ship
  attack(targetShip) {
    console.log(`${this.name} is attacking ${targetShip.name}`);

    if (Math.random() < this.accuracy) {
      targetShip.hull -= this.firepower;
      console.log(`Hit! ${targetShip.name} Hull: ${targetShip.hull}`);
    } else {
      console.log(`Missed! ${targetShip.name} Hull: ${targetShip.hull}`);
    }
  }
}

//Creating a new instance for the spaceship class
const USS_Assembly = new Spaceship("USS Assembly", 20, 5, 0.7);

//Place to store instances for alien ships
const alienShips = [];

//Loop to create 6 spaceships and generate random values for the properties 
for(let i; i <= 6; i++) {
    const hull = Math.floor(Math.random() * 4) + 3;
    const firepower = Math.floor(Math.random() * 3) + 2;
    const accuracy = Math.random() * 0.2 + 0.6;
    const alienShip = new Spaceship(`Alien Ship ${i}`, hull, firepower, accuracy);
    alienShips.push(alienShip)

}

let currentShipIndex = 0


playGame = () => {
    if (currentShipIndex >= alienShips.length) {
        console.log("Congratulations! you have destroyed all the alien ships!");
        return;
    }
}

const currentShip = alienShips[currentShipIndex];
console.log(`- - - - - - - - -
Alien Ship ${currentShipIndex + 1} encountered!
- - - - - - - - -`);


playGame()