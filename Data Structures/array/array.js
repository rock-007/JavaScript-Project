


var array1 = new Array(3)
let u=0;
let k=0;

for (var i=0; i<3; i++){
    array1[i]= new Array(3);
array1[i][0]=1
array1[i][1]=3
array1[i][2]=5


}
for (var h=0; h<array1.length; h++ ){


    let z= array1.length-1-h
   u += array1[h][z];
  // console.log(u) 
  
  k += array1[h][h]

}

let total = Math.abs(k-u)



console.log(total) 