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
      window.alert(`${this.name} is attacking ${targetShip.name}`);
      console.log(`${this.name} is attacking ${targetShip.name}`);
  
      if (Math.random() < this.accuracy) {
        targetShip.hull -= this.firepower;
        window.alert(`Hit! ${targetShip.name} Hull: ${targetShip.hull}`);
        console.log(`Hit! ${targetShip.name} Hull: ${targetShip.hull}`);
      } else {
        window.alert(`Missed! ${targetShip.name} Hull: ${targetShip.hull}`);
        console.log(`Missed! ${targetShip.name} Hull: ${targetShip.hull}`);
      }
    }
  }
  
  //Creating a new instance for the spaceship class
  const USS_Assembly = new Spaceship("USS Assembly", 20, 5, 0.7);
  
  //Place to store instances for alien ships
  const alienShips = [];
  
  //Loop to create 6 spaceships and generate random values for the properties 
  for(let i = 0; i < 6; i++) {
      const hull = Math.floor(Math.random() * 4) + 3;
      const firepower = Math.floor(Math.random() * 3) + 2;
      const accuracy = Math.random() * 0.2 + 0.6;
      const alienShip = new Spaceship(`Alien Ship ${i + 1}`, hull, firepower, accuracy);
      alienShips.push(alienShip)
  
  }
  
  //Inital variable to keep track of the alienships
  let currentShipIndex = 0
  
  //main loop to check if the index is greater or equal to the length of alienships
  playGame = () => {
      //If it is then this message will display
      if (currentShipIndex >= alienShips.length) {
          window.alert("Congratulations! you have destroyed all the alien ships!");
          console.log("Congratulations! you have destroyed all the alien ships!");
          
          return;
      }
      //Gets the current alienship and displays a message when encountered
      const currentShip = alienShips[currentShipIndex];
      window.alert(`- - - - - - - - -
      Alien Ship ${currentShipIndex + 1} encountered!
      - - - - - - - - -`);
      console.log(`- - - - - - - - -
      Alien Ship ${currentShipIndex + 1} encountered!
      - - - - - - - - -`);
      // while loop used to show if the USS and alien ship hull is still over 0 the USS will initiate an attack
      while (USS_Assembly.hull > 0 && currentShip.hull > 0) {
      USS_Assembly.attack(currentShip);
  
      //If the current alien ship hull is less than or equal to 0 then this alert will pop up
      if (currentShip.hull <= 0) {
          window.alert(`You destroyed Alien Ship ${currentShipIndex + 1}!`);
          console.log(`You destroyed Alien Ship ${currentShipIndex + 1}!`);
          currentShipIndex++;
          break
      }
      currentShip.attack(USS_Assembly);
  
      //If the USS_Assembly ship hull is less than or equal to 0 this alrt will pop up
      if (USS_Assembly.hull <= 0) {
          window.alert("Game over! The USS Assembly has been destroyed.");
          console.log("Game over! The USS Assembly has been destroyed.");
          return;
      }
  }
  
      //Keep playing conditional with a window.confirm to choose if you want to keep playing or retreat
      console.log("- - - - - - - - - - - - - - - -");
      const keepPlaying = window.confirm("Do you want to attack the next ship?")
  
      if (keepPlaying) {
      playGame()
      } else {
      window.alert("Game Over! You chose to retreat.");
      console.log("Game Over! You chose to retreat.")
      }
  }
    //Start button with a click event to run the playGame function
      const startButton = document.getElementById("startButton")
      startButton.addEventListener("click", () => {
          playGame() 
      });
     