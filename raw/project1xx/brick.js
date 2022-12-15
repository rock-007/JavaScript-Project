import {detectCollision} from './collisionDetection.js';

export default class brick{

constructor(game1, position) {

    this.image = document.getElementById("img_brick");
    this.gameq =game1;
    this.gameWidth = game1.width;
    this.gameHeight = game1.height;
    this.position = position;
    // we have to define size or width/hight otherwise it wont appear 
    this.width =80;
   this.height =32;
// when ball hit the brick when can say its try but by default is faluse
   this.markedForDeletion = false;
  // this.size = 15;
    console.log(this.gameWidth,this.gameHeight);
    }




    update(){
        // this here will pass the brick object will all its properties
        if(detectCollision(this.gameq.ball,this)){
            this.gameq.ball.speed.y = -this.gameq.ball.speed.y;
            this.markedForDeletion = true;
        }
    }

    draw(ctx){
ctx.drawImage(
        this.image,

        this.position.x,
        this.position.y,
        this.width,
        this.height,
)

    
    }}
