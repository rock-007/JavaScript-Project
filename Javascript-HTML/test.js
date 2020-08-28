const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array1.reduce(reducer));

const reducer1 = (accumulator, currentValue) => accumulator * currentValue;

// 1 * 2 * 3 * 4
console.log(array1.reduce(reducer1));
// expected output: 24


const array12 = [1, 2, 3, 4];
const reducer2 = (accumulator, currentValue) => accumulator + currentValue;

console.log(array12.reduce(reducer2, 0) / array12.length);



////////////////////?











 array41.reduce(addMultiplyAverageArrayValues,{
sum:0,
product:1,
average:0
}
Function addMultiplyAverageArrayValues(accumulator,currentvalue,index){
If(index === array1.length-1){
Average= accumulator.average/array1.length
}else Average= accumulator.average+currentvalue


abc={
Sum :accumulator.sum+currentvalue,
product ;accumulator.product*currentvalue,
Average: Average;

}
Return abc
