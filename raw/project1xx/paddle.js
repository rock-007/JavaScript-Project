

export default class paddle {
    constructor(game1){
        this.gameWidth = game1.width;
        //this.gameheight =game1.GAME_HEIGHT;
        this.width = 155;
        this.height = 17;

        this.maxSpeed =44;
        this.speed =0;
// we making the position as an object
        this.position = {
            //
            x:game1.width/2 - this.width/2,
            //
            y:game1.height - this.height -10,
            

        }}

        moveLeft(){
            this.speed = -this.maxSpeed; 
        }
        moveRight(){
            this.speed = this.maxSpeed;}
            stop(){
                this.speed = 0;
            }
    // draw is the method and we do it in ctx
draw (ctx){
   ctx.fillStyle = "#f0f";

   ctx.fillRect(this.position.x,this.position.y,this.width, this.height);



    }

//deltatime= how much time since its last updated
update(deltaTime){
   // if(!deltaTime)return;

    //this.position.x += 5; this means 5 pixel per second
  //  this.position.x += 5/ deltaTime;
      this.position.x += this.speed;  
if(this.position.x<0) this.position.x=0;
if(this.position.x + this.width >this.gameWidth) this.position.x = this.gameWidth -this.width;

}

    }