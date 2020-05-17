
import game from './game.js';
//
let canvas = document.getElementById("gameScreen");
// we need to set the context of the canvas,and set the boundary of context to 2dimension
let ctx = canvas.getContext("2d");
//ctx.clearRect(0,0,800,600)

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

// // #colorvalue
// ctx.fillStyle = '#f00';
// //corodinate x, cordonatey, width, height
// ctx.fillRect(20,20,100,100);
// ctx.fillStyle = '#00f';

// ctx.fillRect(120,100,10,10);
// to clear the frame, the defailt screen size is 800x600

let game1 = new game(GAME_WIDTH,GAME_HEIGHT)
//game1.start();

//paddle1.draw(ctx);
// initiate te key before the game loop



let lastTime = 0;


//
function gameLoop(timestamp){
    let deltaTime=timestamp- lastTime;
    lastTime = timestamp;
    // clear canvas
    ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
   game1.update(deltaTime);
   game1.draw(ctx);
    //when the next frame is ready call this gameLoop again and passes the timestamp
    //initailtime istamp is the time passes since we load the page
    requestAnimationFrame(gameLoop);

}
//gameLoop(); instaead if we callrequest animation then it will give us a valid time stamp from the start and it will do same as gameLoop()
requestAnimationFrame(gameLoop);
