const numbers =[10,2,3,4,5,6,7]


const new1= numbers.reduce(callback,-Infinity)

function callback(acc,value){
    if(acc>value){
        return acc;

    } else {return value};


}
 

console.log(new1) 
