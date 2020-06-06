export function detectCollision (ball, gameObject){
//  gameobject is define in game.js as an arry of ball paddle  this.gameObject = [this.ball, this.paddle1, ...brick1]

// check collision of ball with paddle
let  topOfBall= ball.position.y;
let bottomOfBall = ball.position.y + ball.size;
//(detectCollision(this, this.gamex.paddle1) is invlked so gameobject will be paddle.y
let topOfObject = gameObject.position.y;
let leftSideOfObject = gameObject.position.x;
//let rightSideOfObject = this.gamex.paddle1.position.x + this.gamex.paddle1.width;

let rightSideOfObject = gameObject.position.x + gameObject.width;
let bottomOfObject = gameObject.position.y + gameObject.height;



//let leftSideofPaddle = this.gamex.paddle1.position.x + this.gamex.paddle1.width;
if 

(
    
    bottomOfBall >= topOfObject && 
    topOfBall <= bottomOfObject &&
    
    ball.position.x > leftSideOfObject &&
     ball.position.x + ball.size <= rightSideOfObject )
     

// this.speed.y = -this.speed.y;
// // so the below the ball just touches the paddle and bounce??
// this.position.y =this.gamex.paddle1.position.y - this.gamex.paddle1.width;
// }{}{
    {
        // this true show only that if there is collsion it will return true
return true;}
else {

    return false;
}


     }


