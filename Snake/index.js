import Game from "./game.js";

//set up constants
const GAME_WIDTH = 800; // in pixels
const GAME_HEIGHT = 600; // in pixels
const GAME_SPEED = 10; //in FPS


// set up canvas
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');


//create new gmae
let game = new Game(GAME_WIDTH, GAME_HEIGHT);


setInterval(update, 1000/GAME_SPEED); //set up game loop


//update game 

function update(){
	
	ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT); //clear game screen
	game.update(); //update snake and apple
	game.draw(ctx); //draw game
}