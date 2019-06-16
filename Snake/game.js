import InputHandler from "./input.js";
import Apple from "./apple.js";
import Link from "./link.js";
import Snake from "./snake.js";
import Score from "./score.js"


//set up game constants

const BATCH_SIZE = 4; //number of links added when the snake eats an apple
const LINK_SIZE = 20; // size of one link of snake including padding between links
const LINK_PADDING = .5; //separation in pxls between individual links
const SCORE_SIZE = 30; //size of text in game
const BEST_SIZE = 20; //alpha of text used for scoring
const TEXT_ALPHA = .9; //alpha of text used for scoring
const SAVE_KEY_SCORE = "highscore"//save key for local storage of hugh score




export default class Game {

	constructor(gameWidth, gameHeight){

		this.gameState = "PLAYING";
		this.gameWidth = gameWidth;
		this.gameHeight = gameHeight;
		this.linkSize = LINK_SIZE;
		this.linkPadding = LINK_PADDING;
		this.batchSize = BATCH_SIZE;
		this.scoreSize = SCORE_SIZE;
		this.bestSize = BEST_SIZE;
		this.textAlpha = TEXT_ALPHA;
		this.highScoreKey = SAVE_KEY_SCORE;
		this.snake = new Snake(this);
		this.apple = new Apple(this);
		this.score = new Score(this);
		this.score.setHighScore();
	

		new InputHandler(this.snake, this);

	}

	update(){

		
		if(this.gameState === "PAUSED") return;

		if(this.snake.linksToAdd > 0){
			this.snake.addLink();
			this.snake.linksToAdd--;
		}

		this.snake.update();

		if(this.snake.collisionWithObject(this.apple)) {
			this.apple = new Apple(this); 	//reload apple
			this.snake.eatApple(); //add new link
			this.score.score += 1; //update score
			this.score.saveHighScore();
			
		}

		if(this.snake.collisionWithWalls() || this.snake.collisionWithItself()){
			this.snake.links = [new Link(this)];
			this.score.score = 0 //update score
		}
	}

	draw(ctx){

		//draw background
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);

		//draw objects
		this.snake.draw(ctx);
		this.apple.draw(ctx);
		this.score.draw(ctx);
	}


}