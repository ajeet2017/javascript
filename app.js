// store function in variable.
const startGameBtn = document.getElementById('start-game-btn');

//1. way of declaration.
var start = function startGame(){
    console.log("game is starting.....")
}

// 2. way of declaration.
// var start = function (){
//     console.log("game is starting.....")
// }


// startGameBtn.addEventListener('click',startGame)  ===> throw error
startGameBtn.addEventListener('click',start)  // execute properly.

