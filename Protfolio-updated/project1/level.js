import brick from './brick.js';

// fuctonj to turn rows into bricks
// here first level will be equal to level1 as from(let brick1 = buildLevel(this, level1);

export function buildLevel(game, level){
let brick1=[];


level.forEach((row,rowIndex)=> {
 row.forEach((eachelemet, brickIndex)=>{
         // each element in the below level1 if found 1

     if(eachelemet === 1){
         let position ={x:70 * brickIndex, y:70 + 24* rowIndex};
         brick1.push(new brick(game,position));}});
     });

// this return will through bakc the brick to the game otherwise we wont se the bricks in the output
     return brick1;
    }



// level1 will be an arry of an arrays
export const level1 =[
// 10 bricks per row, 1 = present 0= empty pacve
 [0,0,0,0,0,0,0,0,0,1,0,0],
 [1,1,1,1,1,1,1,1,1,1,1,1],
 [1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1],



];
export const level2 =[
    // 10 bricks per row, 1 = present 0= empty pacve
     [1,0,1,0,1,0,1,0,1,0],
     [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
     [1,1,1,1,1,1,1,1,1],
    
    
    
    ];