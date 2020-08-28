// // const array1 = [1, 2, 3, 4];
// // const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // console.log(array1.reduce(reducer));

// // const reducer1 = (accumulator, currentValue) => accumulator * currentValue;

// // // 1 * 2 * 3 * 4
// // console.log(array1.reduce(reducer1));
// // // expected output: 24


// // const array12 = [1, 2, 3, 4];
// // const reducer2 = (accumulator, currentValue) => accumulator + currentValue;

// // console.log(array12.reduce(reducer2, 0) / array12.length);



// // ////////////////////?










   
// //  const array17 = [1, 2, 3, 4];

// // function Evenodd(acc,elemet){
// // if(element %2 ==0) return `${acc}is even` ;
// // else if(element %3 ==0 && element %2 !=0) return `${acc}is odd`};



// // array17.reduce(Evenodd, " ");

// // function fizzBuzzReducer(acc, element) {
// //   if (element % 15 === 0) return `${acc}Fizz Buzz\n`;
// //   if (element % 5 === 0) return `${acc}Fizz\n`;
// //   if (element % 3 === 0) return `${acc}Buzz\n`;
// //   return `${acc}${element}\n`;
// // }

// // const nums = [1, 2, ];

// // console.log(nums.reduce(fizzBuzzReducer, ""));
// let array1 = [1, 2, 3, 4, 5 ];





// Function addMultiplyAverageArrayValues(accumulator,currentvalue,index){
//   // to calculate the average after it iterating thorugh last elemnt of array

// If(index === array1.length-1){
//   accumulator.average=accumulator.average+currentvalue
// Average= accumulator.average/array1.length
// } else Average= accumulator.average+currentvalue;


//  let endresult={
// Sum :accumulator.sum+currentvalue,
// product :accumulator.product*currentvalue,
// Average: Average

// }
// Return endresult;
// }

// console.log( array1.reduce(addMultiplyAverageArrayValues,{
// sum:0,
// product:1,
// average:0
// })