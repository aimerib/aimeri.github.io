var turns = '';
var calcTurn = Math.floor(Math.random() * 2);

var ticTacGrid = ["top-left","top-middle","top-right",
                  "middle-left", "middle-middle", "middle-right",
                  "bottom-left", "bottom-middle", "bottom-right"
                ];
var player = {
  isPlayerTurn : 'false',
  whoIsPlayer: 'circle',
  score: 0
};

var computer = {
  whoIsComputer : 'x',
  score: 0
};


if(!calcTurn) {
  player.isPlayerTurn = 'true';
  player.whoIsPlayer = 'x';
  computer.whoIsComputer = 'circle';
}


document.addEventListener("DOMContentLoaded", function() {
    turnLooper();
});

function computerTurn () {
  var locationPicker = Math.floor(Math.random() * 9);
  var pickedLocation = document.getElementById(ticTacGrid[locationPicker]);
  if (turns < 9) {
    if(!pickedLocation.classList.contains('circle') &&
       !pickedLocation.classList.contains('x')) {
      pickedLocation.classList.add(computer.whoIsComputer);
      locationPicker = '';
      turns++;
      player.isPlayerTurn = 'true';

      turnLooper();
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
  document.addEventListener("click", function(e) {
    if (turns < 9) {
      //console.log(e);
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
             !e.target.classList.contains('x')) {e.target.classList.add(player.whoIsPlayer);
               turns++;
               player.isPlayerTurn = 'false';
               turnLooper();
               }

               break;
          }
    }
  });
}

function turnLooper() {

    if (calcWin(player.whoIsPlayer)){
      player.score++;

      function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}

      async function endGame() {
        await sleep(200);
        alert("Game Over. You won!");
        for(i = 0; i < ticTacGrid.length; i++) {
          var e = document.getElementById(ticTacGrid[i]);
          e.classList.remove('circle');
          e.classList.remove('x');
          turns = '';
          document.getElementById('playerScore').innerHTML = player.score;
        }

      }
      endGame();

    }

    else if (calcWin(computer.whoIsComputer)) {
      computer.score++

      function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}

      async function endGame() {
        await sleep(200);
        alert("Game Over. Computer won!");

        for(i = 0; i < ticTacGrid.length; i++) {
          var e = document.getElementById(ticTacGrid[i]);
          e.classList.remove('circle');
          e.classList.remove('x');
          turns = '';
          document.getElementById('computerScore').innerHTML = computer.score;
        }

      }
      endGame();


    }

    else {
      if (turns < 9){
        if(player.isPlayerTurn === 'true') {userTurn();}
        else {computerTurn();}
      }

      else {
        function sleep(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
        }

      async function endGame() {
        await sleep(200);
        alert("Game Over. It's a Draw!");
        for(i = 0; i < ticTacGrid.length; i++) {
          var e = document.getElementById(ticTacGrid[i]);
          e.classList.remove('circle');
          e.classList.remove('x');
          turns = '';
        }
      }
      endGame();
      }

    }
}

function calcWin (whoseTurn) {
  var gameGrid = [];



  for (i = 0; i < ticTacGrid.length; i++) {
    if(document.getElementById(ticTacGrid[i]).classList.contains(whoseTurn)){
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
    rightDiagonalAdded === 3) {
      /*
    */
    return 1;
  }
}
