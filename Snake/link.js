export default class Link {

	constructor(game){

		//initial position of link in a way that x and y are multiples of the LINK SIZE
		this.position = {
			x: game.linkSize*Math.floor((game.gameWidth/2 - game.linkSize/2)/game.linkSize), 
			y: game.linkSize*Math.floor((game.gameHeight/2 - game.linkSize/2)/game.linkSize)
		};
		this.gameWidth = game.gameWidth;
		this.gameHeight = game.gameHeight;
		this.size = game.linkSize;
		this.linkPadding = game.linkPadding;
		this.dir = ""; //direction of snake

	}

	//draw link
	draw(ctx){
		ctx.fillStyle = "green";
		ctx.fillRect(this.position.x + this.linkPadding, this.position.y + this.linkPadding, 
			this.size - 2*this.linkPadding, this.size - 2*this.linkPadding);
		
	}

	//detect collision with other objects (links or apple)
	collisionWithObject(object){
		if(this.position.x === object.position.x && this.position.y === object.position.y){
			console.log("collision");
			return true;
		}
	}

	//detect collision with walls
	collisionWithWalls(){
		if(this.position.x < 0 || this.position.x >= this.gameWidth ||
			this.position.y < 0 || this.position.y >= this.gameHeight){
			return true;
		}
	}

	//move link
	move(){

		switch(this.dir){
			case "right":
				this.position.x += this.size; //move right by one link size
				break;
			case "left":
				this.position.x -= this.size; //move right by one link size
				break;
			case "up":
				this.position.y -= this.size; //move up by one link size
				break;
			case "down":
				this.position.y += this.size; //move down by one link size
				break;
			}
		}
		



}