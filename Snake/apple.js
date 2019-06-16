export default class Apple {

	constructor(game){

		//initial random position of apple in a way that x and y are multiples of the LINK SIZE
		this.position = {//TO DO
			x: game.linkSize * Math.floor(Math.random() * (game.gameWidth-game.linkSize) / game.linkSize),
			y: game.linkSize * Math.floor(Math.random() * (game.gameHeight-game.linkSize) / game.linkSize)
		};
		this.gameWidth = game.gameWidth;
		this.gameHeight = game.gameHeight;
		this.size = game.linkSize;
		this.linkPadding = game.linkPadding;
	}


	//draw apple
	draw(ctx){
		ctx.fillStyle = "red";
		ctx.fillRect(this.position.x + this.linkPadding, this.position.y + this.linkPadding, 
			this.size - 2*this.linkPadding, this.size - 2*this.linkPadding);
	}


}