var turns = '';
var calcTurn = Math.floor(Math.random() * 2);

var ticTacGrid = ["top-left","top-middle","top-right",
                  "middle-left", "middle-middle", "middle-right",
                  "bottom-left", "bottom-middle", "bottom-right"
                ];
var isPlayerX = 'false'
if(!calcTurn) {isPlayerX = 'true'}

document.addEventListener("DOMContentLoaded", function() {
    //console.log(ticTacGrid);
  if(!calcTurn) {

    userTurn();
  }
  else {

    computerTurn();

    }
});
/*
document.getElementById('top-left').addEventListener("click", function() {
  if(!this.classList.contains('circle') && !this.classList.contains('circle'))
    this.classList.add("circle");
  else {
    alert('I am clicked already!');
  }

});
*/


function computerTurn () {
  calcWin();
  //console.log('turn ' + turns);
  var locationPicker = Math.floor(Math.random() * 9);
  var pickedLocation = document.getElementById(ticTacGrid[locationPicker]);
  if (turns < 9) {
    if(!pickedLocation.classList.contains('circle') &&
       !pickedLocation.classList.contains('x')) {
         if(!calcTurn) {
           pickedLocation.classList.add("circle");
         }
         else {
           pickedLocation.classList.add("x");
         }
      locationPicker = '';
      turns++;
      calcWin();
      userTurn();
    }
    else {
      computerTurn();
    }
  }

  else {
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      async function endGame() {
        await sleep(200);
        alert("Game Over");
        location.reload();
      }
      endGame();
    }

}

function userTurn () {
  calcWin();

  if (turns < 9) {
    document.addEventListener("click", function(e) {
      //console.log(e.target.id);
      switch(e.target.id) {
        case "top-left":
        case "top-middle":
        case "top-right":
        case "middle-left":
        case "middle-middle":
        case "middle-right":
        case "bottom-left":
        case "bottom-middle":
        case "bottom-right":
          if(!e.target.classList.contains('circle') &&
             !e.target.classList.contains('x')) {
               if(!calcTurn) {e.target.classList.add("x");}
               else {e.target.classList.add("circle");}

          }
          turns++;
          calcWin();
          computerTurn();
          break;
      }
      });
    }
    else {
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      async function endGame() {
        await sleep(200);
        alert("Game Over");
        location.reload();
      }
      endGame();
    }
}


function calcWin () {
  var gameGrid = [];


  if(isPlayerX){

    for (i = 0; i < ticTacGrid.length; i++) {
      if(document.getElementById(ticTacGrid[i]).classList.contains('x')){
        gameGrid[i] = 1
        //console.log("gameGrid[" +i + "] = " + gameGrid[i]);
      }
      else {
        gameGrid[i] = 0
      }
      //console.log("gameGrid[" +i + "] = " + gameGrid[i])
    }
    //console.log(gameGrid[0]+gameGrid[1]+gameGrid[2])
    var topRowAdded = gameGrid[0]+gameGrid[1]+gameGrid[2];
    var middleRowAdded = gameGrid[3]+gameGrid[4]+gameGrid[5]
    var bottomRowAdded = gameGrid[6]+gameGrid[7]+gameGrid[8];
    var leftCollumnAdded = gameGrid[0]+gameGrid[3]+gameGrid[6];
    var middleCollumnAdded = gameGrid[1]+gameGrid[4]+gameGrid[7];
    var rightCollumnAdded = gameGrid[2]+gameGrid[5]+gameGrid[8];
    var leftDiagonalAdded = gameGrid[0]+gameGrid[4]+gameGrid[8];
    var rightDiagonalAdded = gameGrid[2]+gameGrid[4]+gameGrid[6];

    if(topRowAdded === 3 ||
      middleRowAdded === 3 ||
      bottomRowAdded === 3 ||
      leftCollumnAdded === 3 ||
      middleCollumnAdded === 3 ||
      rightCollumnAdded === 3 ||
      leftDiagonalAdded === 3 ||
      rightDiagonalAdded === 3) {function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function endGame() {
      await sleep(200);
      alert("Game Over! You won.");
      location.reload();
    }
    endGame();}
  }
  else {
    for (i = 0; i < ticTacGrid.length; i++) {
      if(document.getElementById(ticTacGrid[i]).classList.contains('circle')){
        gameGrid[i] = 1
        //console.log("gameGrid[" +i + "] = " + gameGrid[i]);
      }
      else {
        gameGrid[i] = 0
      }
      //console.log("gameGrid[" +i + "] = " + gameGrid[i])
    }
    //console.log(gameGrid[0]+gameGrid[1]+gameGrid[2])
    var topRowAdded = gameGrid[0]+gameGrid[1]+gameGrid[2];
    var middleRowAdded = gameGrid[3]+gameGrid[4]+gameGrid[5]
    var bottomRowAdded = gameGrid[6]+gameGrid[7]+gameGrid[8];
    var leftCollumnAdded = gameGrid[0]+gameGrid[3]+gameGrid[6];
    var middleCollumnAdded = gameGrid[1]+gameGrid[4]+gameGrid[7];
    var rightCollumnAdded = gameGrid[2]+gameGrid[5]+gameGrid[8];
    var leftDiagonalAdded = gameGrid[0]+gameGrid[4]+gameGrid[8];
    var rightDiagonalAdded = gameGrid[2]+gameGrid[4]+gameGrid[6];

    if(topRowAdded === 3 ||
      middleRowAdded === 3 ||
      bottomRowAdded === 3 ||
      leftCollumnAdded === 3 ||
      middleCollumnAdded === 3 ||
      rightCollumnAdded === 3 ||
      leftDiagonalAdded === 3 ||
      rightDiagonalAdded === 3) {function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function endGame() {
      await sleep(200);
      alert("Game Over! The Computer won.");
      location.reload();
    }
    endGame();}
  }
}
