import {detectCollision} from './collisionDetection.js';


export default class ball{
constructor(game1) {
    this.image = document.getElementById("img_ball");

    this.gameWidth = game1.width;
    this.gameHeight = game1.height;
    // this.position = {x:10, y:400};
    // this.speed ={ x:2, y:-2};
    this.size = 14;
    console.log(this.gameWidth,this.gameHeight);
    // now we can use game1 in any of the other functions
    //    this.paddlex =game1.paddle1o r can bring the game all of it
    this.gamex =game1;
    this.reset();
    }
    reset(){
        this.position ={x:10, y:400};
        this.speed ={x:4, y: -2};


    }
draw(ctx){
    ctx.drawImage(this.image, this.position.x,this.position.y, this.size,this.size);

}
// update take deltatime so we know how far we are in the game
update(deltaTime){
    console.log(this.gamex.paddle1.position.x);

    this.position.x +=this.speed.x;
    this.position.y +=this.speed.y;
if(this.position.x +this.size > this.gameWidth || this.position.x <0){
    // to bounce back
    this.speed.x = -this.speed.x;
}
 if( this.position.y <0){
//     // to bounce back
  this.speed.y = -this.speed.y;
 }
if (this.position.y + this.size > this.gameHeight){
    this.gamex.lives--;
    this.reset();
}

if(detectCollision(this, this.gamex.paddle1)){
this.speed.y = -this.speed.y;
this.position.y = this.gamex.paddle1.position.y - this.size;

}
}

}