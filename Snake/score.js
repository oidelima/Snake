export default class Game {

	constructor(game){

		this.gameWidth = game.gameWidth;
		this.gameHeight = game.gameHeight;
		this.score = 0;
		this.highScore = 0;
		this.game = game;
		this.scoreSize = game.scoreSize; 
		this.bestSize = game.bestSize;
		this.textAlpha = game.textAlpha;
		this.highScoreKey = game.highScoreKey;

	}

	//draw the score
	draw(ctx){
		this.drawCurrentScore(ctx);
		this.drawHighScore(ctx);
				
	}

	drawCurrentScore(ctx){
		ctx.textAlign = "right";
		ctx.textBaseline = "middle";
		ctx.fillStyle = "rgba(255,255,255, " + this.textAlpha + ")";
		ctx.font = this.scoreSize + "px dejavu sans mono";
		ctx.fillText(this.score, this.gameWidth - this.game.linkSize*2, 
			this.game.linkSize*2);
	}

	drawHighScore(ctx){
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillStyle = "rgba(255,255,255, " + this.textAlpha + ")";
		ctx.font = this.bestSize + "px dejavu sans mono";
		ctx.fillText("BEST " + this.highScore, this.gameWidth/2 , 
			this.game.linkSize*2);
	}

	//get high sore from local storage
	setHighScore(){
		var highScore = localStorage.getItem(this.highScoreKey);
		if(highScore == null) {
			this.highScore = 0;
		} else {
			this.highScore =  parseInt(highScore);
		}
	}

	saveHighScore(){
		if (this.score > this.highScore){
			this.highScore = this.score;
			localStorage.setItem(this.highScoreKey, this.highScore);
		}
	}

}