const abc = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,200,15,17,22,25,30,201];

function calculate1(abc, var1){

for(i=0; i< abc.length;i++){
if(abc[i] === var1) return i;
}
return -1;
 

}



const efg = calculate1(abc, 200);

console.log(efg);


