export default class InputHandler{

	constructor(snake, game){
		document.addEventListener("keydown", (event) => {

				switch(event.keyCode){

					case 37: //set direction to left
						//if the last command isn't left
						if(snake.keyboardPresses.slice(-1)[0] !== "left" && 
							snake.keyboardPresses.slice(-1)[0] !== "right") {
							snake.keyboardPresses.push("left"); //add left to command array
						}
						break;
					case 39: // set direction to right
						if(snake.keyboardPresses.slice(-1)[0] !== "right" &&
							snake.keyboardPresses.slice(-1)[0] !== "left") {
							snake.keyboardPresses.push("right");
						}	
						break;
					case 38: // set direction up
						if(snake.keyboardPresses.slice(-1)[0] !== "up" &&
							snake.keyboardPresses.slice(-1)[0] !== "down") {
							snake.keyboardPresses.push("up");
						}	
						break;
					case 40: // set direction down
						if(snake.keyboardPresses.slice(-1)[0] !== "down" &&
							snake.keyboardPresses.slice(-1)[0] !== "up") {
							snake.keyboardPresses.push("down");
						}	
						break;
					case 27: //esc pauses game
						console.log(2);
						if(game.gameState === "PAUSED"){
							game.gameState = "PLAYING";
							break;
						} else if (game.gameState === "PLAYING") {
							console.log(1);
							game.gameState = "PAUSED";
							break;
						}
						
	
				}
			
		})
	}






}