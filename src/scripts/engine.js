const state = {
   view: {
      squares: document.querySelectorAll(".square"),
      enemy: document.querySelector(".enemy"),
      timeLeft: document.querySelector("#time-left"),
      score: document.querySelector("#score")
   },
   value: {
      timeId: null,
      gameVelocity: 1000,
   },
};

function randomSquare() {
   state.view.squares.forEach((square) => {
      square.classList.remove("enemy");
   });
   
   let randomNumber = Math.floor(Math.random() * 9);
   let randomSquare = state.view.squares[randomNumber];
   randomSquare.classList.add("enemy");
}

function moveEnemy() {
   state.values.timeId - setInterval(randomSquare, gameVelocity);
}

function addListenerHitBox() {
   state.view.squares.forEach((square) => {
      // if(square.id === )
   })
};

function initialize() {
   randomSquare();
};

initialize();