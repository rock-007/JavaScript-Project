import paddle from './paddle.js';
import Inputhandle from './input.js';
import ball from './ball.js';
import brick from './brick.js';
import {buildLevel, level1, level2} from './level.js';


const GAMESTATE = { 
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3 ,
  NEWLEVEL: 4,

}

export default class game{
constructor(GAME_WIDTH, GAME_HEIGHT) {
    
       this.width = GAME_WIDTH;
        this.height = GAME_HEIGHT;

        // let paddle1 = new  paddle(GAME_WIDTH, GAME_HEIGHT);
   // let ball = new Ball(GAME_WIDTH,GAME_HEIGHT);
    this.gamestate = GAMESTATE.MENU
    this.paddle1 = new  paddle(this);
    this.ball = new ball(this);
    this.gameObject =[];
    // creat new array for the briks object so we can track when all the brick are destroyed
   this.brickx=[];
    this.lives =3;
    this.levels =[level1, level2];
    // current level is index
    this.currentLevel = 0;
    // this here ion input handler will be the game itself
    new Inputhandle(this.paddle1, this);
}
start(){ 
  if(this.gamestate !== GAMESTATE.MENU && this.gamestate !== GAMESTATE.NEWLEVEL ) return;


    //{x:20, y:20} is th position
    // let brick1 = new brick(this,{x:20, y:20});
    // level1 is 4x10 time array of arrays and this will give all the propeertyies if the parent functooin form here and that will include (game ) whcih will be used in the buildlevel
   this.brickx = buildLevel(this , this.levels[this.currentLevel]);
this.ball.reset();
  //  for(let i=0; i<10; i++){
        // it will build first 52 size from x=0 position  and then 52 size from x=104 ... but y position constant 15 i.e all the blocks are at 15 unit away rom y exes 
      //  brick1.push(new brick(this,{x: i*52,y: 3}));
  //  }
  // take brick out as we creating a seperate array up
//  this.gameObject = [this.ball, this.paddle1, ...brick1]

    this.gameObject = [this.ball, this.paddle1]
    this.gamestate =GAMESTATE.RUNNING;

}
// update all the objects
update(deltaTime){

//  this.gameObject.forEach(object => object.update(deltaTime));
 // the below will spread the two objects in one array
  [...this.gameObject, ...this.brickx].forEach(brick1 => brick1.update(deltaTime));

//  [...this.gameObject,...this.brick1].forEach(object => object.update(deltaTime));
  if(this.lives ===0) this.gamestate = GAMESTATE.GAMEOVER;
  // if game is paused we not gonnig to update anything
  if(this.gamestate === GAMESTATE.PAUSED || this.gamestate === GAMESTATE.MENU || this.gamestate === GAMESTATE.GAMEOVER )return;
 //this.paddle1.update(deltaTime);
   // this.ball.update(deltaTime)
   // when all the brickas are destroyed =0 then new level
   if(this.brickx.length ===0){
     //console.log("new level!"
     // then we have to level up and start() function again and start functio nknow what current level we are on
     this.currentLevel ++ ;
     this.gamestate = GAMESTATE.NEWLEVEL;
     this.start();
     
   }
  

       // go all of the object and update them

    // this.gameObject.forEach(object => object.update(deltaTime));
     // this will delete the brick that got hit by ball, under ball.js markedfordeletion got updated once it got collided or not
  this.brickx = this.brickx.filter(brick =>  !brick.markedForDeletion);


    }
//ctx.drawImage(imgBall, 0,10);



draw(ctx){
    // this.paddle1.draw(ctx);
    // this.ball.draw(ctx);
    // go all of the object and draw them
    [...this.gameObject, ...this.brickx].forEach(brick1 => brick1.draw(ctx));
    //this.gameObject.forEach(objectsss => objectsss.draw(ctx));

    if(this.gamestate === GAMESTATE.PAUSED){

    ctx.rect(0,0,this.width,this.height);
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fill();
    ctx.font ="30px Arial";
    ctx.fillstyle ="White";
    ctx.textAlign ="centre";
    ctx.fillText("Paused", this.width/3, this.height/2)
    }
    if(this.gamestate === GAMESTATE.MENU){

      ctx.rect(0,0,this.width,this.height);
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.fill();
      ctx.font ="30px Arial";
      ctx.fillStyle ="White";
      ctx.textAlign ="centre";
      ctx.fillText("Press SPACEBAR To Start", this.width/3, this.height/2)}

      if(this.gamestate === GAMESTATE.GAMEOVER){

        ctx.rect(0,0,this.width,this.height);
        ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.fill();
        ctx.font ="30px Arial";
        ctx.fillStyle ="White";
        ctx.textAlign ="centre";
        ctx.fillText("GAME OVER", this.width/3, this.height/2)
        }
      }

togglePause(){
  if(this.gamestate == GAMESTATE.PAUSED){
    this.gamestate = GAMESTATE.RUNNING;

  } else{
// == IS T OCOMPARE AND = IS TO SET 
    this.gamestate = GAMESTATE.PAUSED;
  }

}

}