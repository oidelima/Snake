import Link from "./link.js";
import InputHandler from "./input.js";

export default class Snake{

	constructor(game){
		this.links = [new Link(game)];
		this.gameWidth = game.gameWidth;
		this.gameHeight = game.gameHeight;
		this.linkSize = game.linkSize;
		this.keyboardPresses = [];
		this.linkPadding = game.linkPadding;
		this.linksToAdd = 0; //remaining links to add to snake
		this.batchSize = game.batchSize;
		this.game = game;
		
		

	}

	//detect collision of head link with other objects (links or apple)
	collisionWithObject(object){
		if(this.links[0].position.x === object.position.x && 
			this.links[0].position.y === object.position.y){
			console.log("collision");
			return true;
		}
	}

	//detect collision of head link with walls
	collisionWithWalls(){
		if(this.links[0].position.x < 0 || this.links[0].position.x >= this.gameWidth ||
			this.links[0].position.y < 0 || this.links[0].position.y >= this.gameHeight){
				return true;
		}
	}

	//detect collision of snake with itself
	collisionWithItself(){
		for (let i = 1; i < this.links.length; i++){
			if (this.links[0].position.x === this.links[i].position.x && 
			this.links[0].position.y === this.links[i].position.y){
				return true;
			}
		}
	}

	eatApple(){
		//update remaining links to add
		this.linksToAdd += this.batchSize;
	}

	addLink(){
		//adding link to links list
		this.links.push(new Link(this.game));


		//setting x and y position values for new link when you eat an apple
		switch(this.links[this.links.length - 2].dir) {
			case "right": 
				this.links[this.links.length - 1].position.x = this.links[this.links.length - 2].position.x - this.linkSize;
				this.links[this.links.length - 1].position.y = this.links[this.links.length - 2].position.y;
				break;
			case "left":
				this.links[this.links.length - 1].position.x = this.links[this.links.length - 2].position.x + this.linkSize;
				this.links[this.links.length - 1].position.y = this.links[this.links.length - 2].position.y;
				break;
			case "up": 
				this.links[this.links.length - 1].position.x = this.links[this.links.length - 2].position.x;
				this.links[this.links.length - 1].position.y = this.links[this.links.length - 2].position.y + this.linkSize;
				break;
			case "down":
				this.links[this.links.length - 1].position.x = this.links[this.links.length - 2].position.x;
				this.links[this.links.length - 1].position.y = this.links[this.links.length - 2].position.y - this.linkSize ;
				break;

		}

		//setting direction for new link
		this.links[this.links.length - 1].dir = this.links[this.links.length - 2].dir;

	}

	//draw the snake
	draw(ctx){
		for(let i =0; i< this.links.length; i++ ){
			this.links[i].draw(ctx);
		}
	}

	//set the direction of the links of the snake
	setDirections(){

		//set direction and move each link of snake except the head
		for (let i = this.links.length - 1; i >= 1; i--){
			this.links[i].dir = this.links[i-1].dir;
		}	

		//set the direction of the head link of the snake
		if (this.keyboardPresses.length > 1){
			this.links[0].dir = this.keyboardPresses.shift(); //remove first command from array
		} else {
			this.links[0].dir = this.keyboardPresses[0];
		}

		
	}

	//move all links according to their directions
	move(){
		for (let i = 0; i < this.links.length; i++){
			this.links[i].move();
		}
	}


	update(){
		this.move();
		this.setDirections();
	}


}